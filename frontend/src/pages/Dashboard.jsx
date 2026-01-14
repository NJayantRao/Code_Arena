import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSession } from "../services/sessions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "../components/common/Navbar";
import Welcome from "../components/Welcome";
import StatCard from "../components/ui/cards/StatCard";
import ActiveSessions from "../components/ui/cards/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/ui/modals/CreateSessionModal";

const Dashboard = () => {
  const queryClient = useQueryClient();

  const createSessionMutation = useMutation({
    mutationFn: createSession,
    onSuccess: () => {
      toast.success("Session Created Successfully...");
    },
    onError: (error) => {
      toast.error("Failed to create Session!");
      console.log(error);
    },
  });

  // console.log(createSession);

  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });
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
          <StatCard />
          <ActiveSessions />
        </div>
        <RecentSessions />
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
