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
    const session= await Session.findById(sessionId).populate(
      "host",
      "name profileImage email clerkId"
    )
    .populate(
      "participant",
      "name profileImage email clerkId"
    )

    if(!session) return res.status(404).json({msg:"Session not found"})

      res.status(200).json({msg:"Fetched session by id"})
  } catch (error) {
    console.log("Error in get Session by id controller", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const joinSession = async (req, res) => {
  try {
    console.log("Session");
  } catch (error) {
    console.log(error);
  }
};
const endSession = async (req, res) => {
  try {
    console.log("Session");
  } catch (error) {
    console.log(error);
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
