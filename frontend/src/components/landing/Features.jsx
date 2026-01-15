import { CodeXml, Users, Video } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Everything You Need to{" "}
          <span className="text-green-600 font-mono">Succeed</span>
        </h2>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Powerful features designed to make coding interviews seemless and
          productive.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="size-16 bg-green-600/10 rounded-2xl flex items-center justify-center mb-4">
              <Video className="size-8 text-green-600" />
            </div>
            <h3 className="card-title">HD Video Calling</h3>
            <p className="text-base-content/50">
              Crystal clear Video and Audio for seemless Communication during
              meet.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="size-16 bg-green-600/10 rounded-2xl flex items-center justify-center mb-4">
              <CodeXml className="size-8 text-green-600" />
            </div>
            <h3 className="card-title">Live Code Editor</h3>
            <p className="text-base-content/50">
              Collaborate in real-time syntax highlighting and multi-language
              support.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="size-16 bg-green-600/10 rounded-2xl flex items-center justify-center mb-4">
              <Users className="size-8 text-green-600" />
            </div>
            <h3 className="card-title">Easy Collaboration</h3>
            <p className="text-base-content/50">
              Share your screen, discuss solutions and learn together in
              real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
