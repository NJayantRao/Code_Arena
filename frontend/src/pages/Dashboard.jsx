import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createSession,
  getActiveSessions,
  getMyRecentSessions,
} from "../services/sessions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/Welcome";
import StatCard from "../components/ui/cards/StatCard";
import ActiveSessions from "../components/ui/cards/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/ui/modals/CreateSessionModal";

const Dashboard = () => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [session, setSession] = useState([]);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  //Create session
  const createSessionMutation = useMutation({
    mutationKey: ["createSession"],
    mutationFn: async (payload) => {
      const token = await getToken();
      return createSession({ data: payload, token });
    },
    onSuccess: () => {
      toast.success("Session Created Successfully...");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.msg || "Failed to create Session!");
      // console.log(error);
    },
  });

  const handleCreateSession = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;
    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty,
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  //active sessions
  const activeSessions = useQuery({
    queryKey: ["activeSessions"],
    queryFn: async () => {
      const token = await getToken();
      return getActiveSessions(token);
    },
  });

  const {
    data: activeSessionData,
    isLoading: isActiveSessionLoading,
    isPending: isActiveSessionPending,
    error: activeSessionError,
  } = activeSessions;

  const activeSession = activeSessionData?.activeSessions;

  // console.log(data,isLoading,isPending,error);
  // console.log(activeSession);

  //recent sessions
  const recentSessions = useQuery({
    queryKey: ["recentSessions"],
    queryFn: async () => {
      const token = await getToken();
      return getMyRecentSessions(token);
    },
  });

  const {
    data: recentSessionData,
    isLoading: isRecentSessionLoading,
    isPending: isRecentSessionPending,
    error: recentSessionError,
  } = recentSessions;

  const recentSession = recentSessionData?.sessions;

  const activeSessionsCount = activeSessionData?.activeSessions || [];
  const recentSessionsCount = recentSessionData?.sessions || [];

  const isUserInSession = (session) => {
    if (!user.id) return false;

    return (
      session.host?.clerkId === user.id ||
      session.participant?.clerkId === user.id
    );
  };

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />
      <Welcome
        onCreateSession={() => {
          setShowCreateModal(true);
        }}
      />
      <div className="container mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StatCard
            activeSessionsCount={activeSessionsCount.length}
            recentSessionsCount={recentSessionsCount.length}
          />
          <ActiveSessions
            sessions={activeSession ?? []}
            isLoading={isActiveSessionLoading}
            isUserInSession={isUserInSession}
          />
        </div>
        <RecentSessions
          sessions={recentSession ?? []}
          isLoading={isRecentSessionLoading}
        />
      </div>
      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => {
          setShowCreateModal(false);
        }}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateSession={handleCreateSession}
        isCreating={createSessionMutation.isPending}
      />
    </div>
  );
};

export default Dashboard;
