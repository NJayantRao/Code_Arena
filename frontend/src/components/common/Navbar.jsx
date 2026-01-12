import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between ">
        {/* LOGO */}
        <div
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="size-10 rounded-xl bg-gradient-to-br from-green-300 via-green-400 to-green-500 flex items-center justify-center shadow-lg">
            <Sparkles className="size-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent font-mono tracking-wider">
              Code Arena
            </span>
            <span className="text-sm text-base-content/60 font-medium">
              Let's Code Together
            </span>
          </div>
        </div>
        {/* SIGNUP BUTTONS */}
        <SignInButton mode="modal">
          <button className="group px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
            <span className="text-sm">Get Started</span>
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Navbar;
