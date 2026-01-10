import { chatClient, streamClient } from "../lib/stream.js";
import { Session } from "../models/Session.js";

const createSession = async (req, res) => {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user.id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty)
      return res
        .status(400)
        .json({ msg: "Problem and Difficulty are required!" });

    //to get the call id stream
    const callId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;

    const session = await Session.create({
      problem,
      difficulty,
      host: userId,
      callId,
    });

    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() },
      },
    });

    //chat functionality
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    res.status(200).json({ msg: "Session created Successfully", session });
  } catch (error) {
    console.log("Error in Create Session controller", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const getActiveSessions = async (req, res) => {
  try {
    const activeSessions = await Session.find({ status: "Active" })
      .populate("host", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    res
      .status(200)
      .json({ msg: "Active sessions fetched successfully...", activeSessions });
  } catch (error) {
    console.log("Error in get active Session controller", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const getMyRecentSessions = async (req, res) => {
  try {
    const userId = req.user._id;
    const sessions = await Session.find({
      status: "Completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res
      .status(200)
      .json({ msg: "Recent sessions fetched successfully", sessions });
  } catch (error) {
    console.log("Error in get recent Session controller", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const getSessionById = async (req, res) => {
  try {
    const sessionId = req.params.id;
    const session = await Session.findById(sessionId)
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId");

    if (!session) return res.status(404).json({ msg: "Session not found" });

    res.status(200).json({ msg: "Fetched session by id" });
  } catch (error) {
    console.log("Error in get Session by id controller", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const joinSession = async (req, res) => {
  try {
    const sessionId = req.params.id;
    const userId = req.user.id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ msg: "Session not found" });
    //check session is already full
    if (session.participant)
      return res.status(404).json({ msg: "Session is full." });
    session.participant = userId;
    await session.save();

    const channel= chatClient.channel("messaging",session.callId)
    await channel.addMembers([clerkId])

    res.status(200).json({
      msg:"Joined session successfully",
      session
    })
  } catch (error) {
    console.log("Error in join Session controller", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const endSession = async (req, res) => {
  try {
    const sessionId = req.params.id;
    const userId = req.user.id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ msg: "Session not found" });

    //only host can end the session
    if(session.host != session.userId)
      return res.status(403).json({msg:"Only the host can end session"})

    //if already completed
    if(session.status === "Completed") return res.status(400).json({msg:"Session already completed"})
      session.status= "Completed"
    await session.save()

    const call= streamClient.video.call("default",session.callId)
    await call.delete({hard:true})

    const channel= chatClient.channel("messaging",session.callId)
    await channel.delete()

    res.status(200).json({msg:"Session ended successfully",session})
  } catch (error) {
     console.log("Error in end Session controller", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export {
  createSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
  endSession,
};
