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
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-2xl mb-6">Create New Session</h3>

        <div className="space-y-8">
          <label className="label">
            <span className="label-text font-semibold">Select Problem</span>
            <span className="label-text-alt text-error">*</span>
          </label>

          <select
            className="select w-full truncate"
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
              Select a Coding problem...
            </option>
            {problemsList.map((ele) => {
              return (
                <option
                  key={ele.id}
                  value={ele.title}
                  className="rounded-xl truncate"
                >
                  {ele.title} ({ele.difficulty})
                </option>
              );
            })}
          </select>
        </div>
        {roomConfig.problem && (
          <div className="alert bg-green-500 text-black">
            <Code2Icon className="size-5" />
            <div>
              <p className="font-semibold">Room Summary:</p>
              <p>
                Problem:{" "}
                <span className="font-medium">{roomConfig.problem}</span>
              </p>
              <p>
                Max Participants:{" "}
                <span className="font-medium">2 (1-on-1 session)</span>
              </p>
            </div>
          </div>
        )}
        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn bg-green-600"
            onClick={onCreateSession}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <div className="flex gap-2">
                <Loader2Icon className="size-5 animate-spin" />
                Creating...
              </div>
            ) : (
              <div className="flex gap-2">
                <Plus className="size-5" />
                Create
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default CreateSessionModal;
