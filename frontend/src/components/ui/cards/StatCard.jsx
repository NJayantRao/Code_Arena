import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  console.log(activeSessionsCount);
  console.log(recentSessionsCount);

  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-6">
      {/* Active Count */}
      <div className="card bg-base-100 border-2 border-green-600/20 hover:border-green-600/40">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-green-600/10 rounded-2xl">
              <UsersIcon className="w-7 h-7 text-green-600" />
            </div>
            <div className="badge  p-4 text-lg text-[#00a63e]">
              <div className="inline-grid *:[grid-area:1/1]">
                <div className="status status-[#00a63e] animate-ping"></div>
                <div className="status status-success"></div>
              </div>
              Live
            </div>
          </div>
          <div className="text-4xl font-black mb-1">{activeSessionsCount}</div>
          <div className="text-sm opacity-60">Active Sessions</div>
        </div>
      </div>

      {/* Recent Count */}
      <div className="card bg-base-100 border-2 border-green-600/20 hover:border-green-600/40">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="p-3 bg-green-600/10 rounded-2xl">
              <TrophyIcon className="w-7 h-7 text-green-600" />
            </div>
          </div>
          <div className="text-4xl font-black mb-1">{recentSessionsCount}</div>
          <div className="text-sm opacity-60">Total Sessions</div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
