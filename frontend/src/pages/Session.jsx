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
import { Loader2Icon, LogOutIcon } from "lucide-react";

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
    queryKey: ["sessionById"],
    queryFn: async () => {
      const token = await getToken();
      return getSessionById(id, token);
    },
  });
  const { data: sessionData, isLoading: sessionLoading, refetch } = sessionById;
  console.log(sessionData);
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
    },
    onError: (error) => {
      toast.error(error?.response?.data?.msg || "Failed to join Session!");
      // console.log(error);
    },
  });

  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?._id;

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
    if (session.status === "completed") navigate("/dashboard");
  }, [session, sessionLoading]);

  //auto join the user as participant
  useEffect(() => {
    if (!session || !user || sessionLoading) return;
    if (isHost || isParticipant) return;
    joinSessionMutation.mutate({
      onSuccess: refetch,
    });
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
          {/* left panel */}
          <Panel defaultSize={50} minSize={30}>
            <PanelGroup direction="vertical">
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
                        {console.log(session)}
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
                            {console.log(session.stauts)}
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
              <Panel defaultSize={50} minSize={20}></Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className="w-2 bg-base-200 hover:bg-primary transition-colors cursor-col-resize" />
          {/* right panel */}
          <Panel defaultSize={50} minSize={30}></Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default Session;
