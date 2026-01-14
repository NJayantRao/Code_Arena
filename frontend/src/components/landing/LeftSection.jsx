import React from "react";
import { ArrowRight, Check, Play, Video, Zap } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

const LeftSection = () => {
  return (
    <div className="space-y-8">
      <div className="badge badge-lg bg-gradient-to-br from-green-500 to-green-600 text-black font-semibold rounded-xl py-4">
        <Zap />
        Real-time Collaboration
      </div>
      <h1 className="text-5xl lg:text-7xl font-black leading-tight">
        <span className=" bg-gradient-to-r from-green-400 via-green-500  to-green-600 bg-clip-text text-transparent">
          Code Together,
        </span>
        <br />
        <span className="text-[#cfcccd]">Learn Together</span>
      </h1>
      <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
        The ultimate platform for collaborative coding interviews and pair
        programming. Connect face-to-face, code in real-time, and ace your
        technical interviews.
      </p>
      {/* features */}
      <div className="flex flex-wrap gap-3">
        <div className="badge badge-lg badge-outline rounded-lg">
          <Check className="size-4 text-success" />
          Live video chat
        </div>
        <div className="badge badge-lg badge-outline rounded-lg">
          <Check className="size-4 text-success" />
          Code Editor
        </div>
        <div className="badge badge-lg badge-outline rounded-lg">
          <Check className="size-4 text-success" />
          Multi-language
        </div>
      </div>
      {/* cta */}
      <div className="flex flex-wrap gap-4 ">
        <SignInButton mode="modal">
          <button className="btn btn-lg bg-green-600 text-black font-semibold rounded-full">
            Start Coding Now
            <ArrowRight className="size-5" />
          </button>
        </SignInButton>
        <div>
          <button className="btn btn-lg font-semibold rounded-full">
            <Play className="size-5" />
            Watch Demo
          </button>
        </div>
      </div>
      {/* stats */}
      <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
        <div className="stat ">
          <div className="stat-value text-green-500">10K+</div>
          <div className="stat-title">sessions</div>
        </div>
        <div className="stat ">
          <div className="stat-value text-green-500">10K+</div>
          <div className="stat-title">sessions</div>
        </div>
        <div className="stat ">
          <div className="stat-value text-green-500">10K+</div>
          <div className="stat-title">sessions</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
