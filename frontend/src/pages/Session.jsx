import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { endSession, getSessionById, joinSession } from "../services/sessions";
import { problems } from "../data/problems";
import { executeCode } from "../lib/piston";
import toast from "react-hot-toast";
import Navbar from "../components/common/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadge } from "../lib/difficulty";
import { Loader2Icon, LogOutIcon, PhoneOffIcon } from "lucide-react";
import CodeEditor from "../components/CodeEditor";
import OutputPanel from "../components/OutputPanel";
import useStreamClient from "../utils/streamClient";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import VidoCallUI from "../components/VideoCallUI";
import VideoCallUI from "../components/VideoCallUI";

const Session = () => {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  //get session by id

  const sessionById = useQuery({
    queryKey: ["sessionById", id],
    queryFn: async () => {
      const token = await getToken();
      return getSessionById(id, token);
    },
  });
  const { data: sessionData, isLoading: sessionLoading, refetch } = sessionById;
  // console.log(sessionData);
  const session = sessionData?.session;
  // console.log(session);

  //end session function
  const endSessionMutation = useMutation({
    mutationKey: ["endSession"],
    mutationFn: async () => {
      const token = await getToken();
      return endSession(id, token);
    },
    onSuccess: () => {
      toast.success("Session Ended Successfully...");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.msg || "Failed to end Session!");
      console.log(error);
    },
  });

  //join session function
  const joinSessionMutation = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: async () => {
      const token = await getToken();
      return joinSession(id, token);
    },
    onSuccess: () => {
      toast.success("Joined Session Successfully...");
      refetch();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.msg || "Failed to join Session!");
      // console.log(error);
    },
  });

  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;

  const sessionProblem = session?.problem
    ? Object.values(problems).find((p) => p.title === session.problem)
    : null;
  // console.log(sessionProblem);

  const [code, setCode] = useState(
    sessionProblem?.starterCode?.[selectedLanguage] || ""
  );

  //redirect the participant on session ends
  useEffect(() => {
    if (!session || sessionLoading) return;
    if (session.status === "Completed") navigate("/dashboard");
  }, [session, sessionLoading]);

  //auto join the user as participant
  useEffect(() => {
    if (!session || !user || sessionLoading) return;
    if (isHost || isParticipant) return;
    joinSessionMutation.mutate();
  }, [session, user, isHost, isParticipant, sessionLoading, id]);

  //on update code
  useEffect(() => {
    if (sessionProblem?.starterCode?.[selectedLanguage]) {
      setCode(sessionProblem.starterCode[selectedLanguage]);
    }
  }, [sessionProblem, selectedLanguage]);
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    const starterCode = sessionProblem?.starterCode?.[newLang] || "";
    // console.log(starterCode);
    setCode(starterCode);
    setOutput(null);
  };
  // console.log(code);

  //stream info.
  const { streamClient, call, chatClient, channel, isInitializingCall } =
    useStreamClient(session, sessionLoading, isHost, isParticipant, getToken);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);
  };

  const handleEndSession = () => {
    if (confirm("Are you sure to end this session")) {
      endSessionMutation.mutate({
        onSuccess: () => {
          //navigate the host to dashboard
          navigate("/dashboard");
        },
      });
    }
  };

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PanelGroup direction="horizontal">
          {/* left section */}
          <Panel defaultSize={50} minSize={30}>
            <PanelGroup direction="vertical">
              {/* problem description panel */}
              <Panel defaultSize={50} minSize={20}>
                <div className="h-full overflow-y-auto bg-base-200">
                  <div className="p-6 bg-base-100 border-b border-base-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h1 className="text-3xl font-bold text-base-content">
                          {session?.problem || "Loading..."}
                        </h1>
                        {sessionProblem?.category && (
                          <p className="text-base-content/60 mt-1">
                            {sessionProblem.category}
                          </p>
                        )}
                        <p className="text-base-content/60 mt-2">
                          Host: {session?.host?.name || "Loading..."} •{" "}
                          {session?.participant ? 2 : 1}/2 participants
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`badge badge-lg ${getDifficultyBadge(
                            session?.difficulty
                          )}`}
                        >
                          {session?.difficulty.slice(0, 1).toUpperCase() +
                            session?.difficulty.slice(1) || "Easy"}
                        </span>
                        {/* {console.log(session)} */}
                        {isHost && session?.status === "Active" && (
                          <button
                            onClick={handleEndSession}
                            disabled={endSessionMutation.isPending}
                            className="btn btn-error btn-sm gap-2"
                          >
                            {endSessionMutation.isPending ? (
                              <Loader2Icon className="w-4 h-4 animate-spin" />
                            ) : (
                              <LogOutIcon className="w-4 h-4" />
                            )}
                            End Session
                            {/* {console.log(session.stauts)} */}
                          </button>
                        )}
                        {session?.status === "completed" && (
                          <span className="badge badge-ghost badge-lg">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* problem desc */}
                    {sessionProblem?.description && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">
                          Description
                        </h2>
                        <div className="space-y-3 text-base leading-relaxed">
                          <p className="text-base-content/90">
                            {sessionProblem.description.text}
                          </p>
                          {sessionProblem.description.notes?.map(
                            (note, idx) => (
                              <p key={idx} className="text-base-content/90">
                                {note}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* examples section */}
                    {sessionProblem?.examples &&
                      sessionProblem.examples.length > 0 && (
                        <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                          <h2 className="text-xl font-bold mb-4 text-base-content">
                            Examples
                          </h2>

                          <div className="space-y-4">
                            {sessionProblem.examples.map((example, idx) => (
                              <div key={idx}>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="badge badge-sm">
                                    {idx + 1}
                                  </span>
                                  <p className="font-semibold text-base-content">
                                    Example {idx + 1}
                                  </p>
                                </div>
                                <div className="bg-base-200 rounded-lg p-4 font-mono text-sm space-y-1.5">
                                  <div className="flex gap-2">
                                    <span className="text-primary font-bold min-w-[70px]">
                                      Input:
                                    </span>
                                    <span>{example.input}</span>
                                  </div>
                                  <div className="flex gap-2">
                                    <span className="text-secondary font-bold min-w-[70px]">
                                      Output:
                                    </span>
                                    <span>{example.output}</span>
                                  </div>
                                  {example.explanation && (
                                    <div className="pt-2 border-t border-base-300 mt-2">
                                      <span className="text-base-content/60 font-sans text-xs">
                                        <span className="font-semibold">
                                          Explanation:
                                        </span>{" "}
                                        {example.explanation}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    {/* Constraints */}
                    {sessionProblem?.constraints &&
                      sessionProblem.constraints.length > 0 && (
                        <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                          <h2 className="text-xl font-bold mb-4 text-base-content">
                            Constraints
                          </h2>
                          <ul className="space-y-2 text-base-content/90">
                            {sessionProblem.constraints.map(
                              (constraint, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-primary">•</span>
                                  <code className="text-sm">{constraint}</code>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </Panel>
              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

              {/* code editor panel */}
              <Panel defaultSize={50} minSize={20}>
                <PanelGroup direction="vertical">
                  {/* editor panel */}
                  <Panel defaultSize={70} minSize={20}>
                    <CodeEditor
                      selectedLanguage={selectedLanguage}
                      code={code}
                      isRunning={isRunning}
                      onLanguageChange={handleLanguageChange}
                      onCodeChange={setCode}
                      onRunCode={handleRunCode}
                      sessionId={id}
                    />
                  </Panel>
                  <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

                  {/* output panel */}
                  <Panel defaultSize={30} minSize={20}>
                    <OutputPanel output={output} />
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

          {/* right section */}
          <Panel defaultSize={50} minSize={30}>
            <div className="h-full p-4  bg-base-200 overflow-auto">
              {isInitializingCall ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
                    <p className="text-lg">Connecting to video call...</p>
                  </div>
                </div>
              ) : !streamClient || !call ? (
                <div className="h-full flex items-center justify-center">
                  <div className="card bg-base-100 shadow-xl max-w-md">
                    <div className="card-body items-center text-center">
                      <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mb-4">
                        <PhoneOffIcon className="w-12 h-12 text-error" />
                      </div>
                      <h2 className="card-title text-2xl">Connection Failed</h2>
                      <p className="text-base-content/70">
                        Unable to connect to the video call
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full">
                  <StreamVideo client={streamClient}>
                    <StreamCall call={call}>
                      <VideoCallUI chatClient={chatClient} channel={channel} />
                    </StreamCall>
                  </StreamVideo>
                </div>
              )}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default Session;
