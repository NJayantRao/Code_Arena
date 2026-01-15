import React from "react";
import { problems } from "../../../data/problems";
import { Code2Icon, Loader2Icon, Plus } from "lucide-react";

const CreateSessionModal = ({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateSession,
  isCreating,
}) => {
  const problemsList = Object.values(problems);
  if (!isOpen) return null;
  return (
    <div className="modal modal-open backdrop-blur-sm">
      <div className="modal-box max-w-2xl p-6 bg-base-200 border border-base-300 shadow-xl rounded-xl">
        {/* TITLE */}
        <h3 className="text-2xl font-black flex items-center gap-2">
          Create New Session
        </h3>
        <p className="text-sm opacity-70 mb-4">
          Choose a coding problem and spin up a live session.
        </p>

        {/* SELECT */}
        <label className="text-sm font-semibold flex items-center gap-1 mb-2">
          Select Problem <span className="text-error">*</span>
        </label>

        <select
          className="select select-bordered w-full bg-base-100 rounded-lg"
          value={roomConfig.problem}
          onChange={(e) => {
            const selectedProblem = problemsList.find(
              (p) => p.title === e.target.value
            );
            setRoomConfig({
              problem: e.target.value,
              difficulty: selectedProblem.difficulty,
            });
          }}
        >
          <option value="" disabled className="rounded-xl">
            Pick a coding challenge...
          </option>
          {problemsList.map((ele) => (
            <option key={ele.id} value={ele.title}>
              {ele.title} ({ele.difficulty})
            </option>
          ))}
        </select>

        {/* SUMMARY CARD */}
        {roomConfig.problem && (
          <div className="mt-4 rounded-xl border border-success/40 bg-success/10 p-4 space-y-1">
            <div className="flex items-center gap-2">
              <Code2Icon className="size-5 text-success" />
              <p className="font-semibold text-success">Room Summary</p>
            </div>
            <p className="text-sm">
              <span className="opacity-70">Problem:</span>{" "}
              <span className="font-medium">{roomConfig.problem}</span>
            </p>
            <p className="text-sm">
              <span className="opacity-70">Max Participants:</span>{" "}
              <span className="font-medium">2 (1-on-1)</span>
            </p>
            <p className="text-sm">
              <span className="opacity-70">Difficulty:</span>{" "}
              <span className="badge badge-sm badge-outline badge-success">
                {roomConfig.difficulty}
              </span>
            </p>
          </div>
        )}

        {/* ACTIONS */}
        <div className="modal-action mt-6 gap-3">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn bg-emerald-600 hover:bg-emerald-500 text-white gap-2 border-none rounded-lg"
            disabled={isCreating || !roomConfig.problem}
            onClick={onCreateSession}
          >
            {isCreating ? (
              <>
                <Loader2Icon className="size-5 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="size-5" />
                Create Session
              </>
            )}
          </button>
        </div>
      </div>

      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
};

export default CreateSessionModal;
