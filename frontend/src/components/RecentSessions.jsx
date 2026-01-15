import { Code2, Clock, Users, Trophy, Loader } from "lucide-react";
import { getDifficultyBadge } from "../lib/difficulty";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="card bg-base-100 border-2 border-violet-500/20 hover:border-violet-500/30 mt-8">
      <div className="card-body">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-[#1E1B4B] to-[#0F0A32] rounded-xl">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-black">Your Past Sessions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <Loader className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className={`card relative ${
                  session.status === "active"
                    ? "bg-success/10 border-success/30 hover:border-success/60"
                    : "bg-base-200 border-base-300 hover:border-primary/30"
                }`}
              >
                <div className="card-body p-5">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          session.status === "active"
                            ? "bg-gradient-to-br from-success to-success/70"
                            : "bg-gradient-to-br from-primary to-secondary"
                        }`}
                      >
                        <Code2 className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base mb-1 line-clamp-2">
                          {session.problem}
                        </h3>
                        <span
                          className={`badge badge-sm ${getDifficultyBadge(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty}
                        </span>
                      </div>
                    </div>

                    {session.status === "active" && (
                      <div className="flex items-center gap-1">
                        <div className="status status-success animate-pulse"></div>
                        <div className=" badge badge-success gap-1 whitespace-nowrap">
                          ACTIVE
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 text-sm opacity-80 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>
                        {formatDistanceToNow(new Date(session.createdAt), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>
                        {session.participant ? "2" : "1"} participant
                        {session.participant ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-base-300">
                    <span className="text-xs font-semibold opacity-80 uppercase">
                      Completed
                    </span>
                    <span className="text-xs opacity-40">
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl flex items-center justify-center">
                <Trophy className="w-10 h-10 text-[#2DD4BF]/50" />
              </div>
              <p className="text-lg font-semibold opacity-70 mb-1">
                No sessions yet
              </p>
              <p className="text-sm opacity-50">
                Start your coding journey today!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;
