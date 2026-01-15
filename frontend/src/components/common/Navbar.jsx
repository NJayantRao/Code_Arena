import { UserButton } from "@clerk/clerk-react";
import { BookOpen, LayoutDashboard, Sparkles } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <nav className="bg-base-100/60 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto p-3 flex items-center justify-between">
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
        {/* right section */}
        <div className="flex items-center gap-1">
          <div
            className={`px-4 py-2.5  rounded-lg transition-all duration-200 cursor-pointer ${
              isActive("/problems")
                ? "bg-green-600 text-black"
                : "hover:bg-base-200 text-base-content/60 hover:text-base-content"
            }`}
            onClick={() => {
              navigate("/problems");
            }}
          >
            <div className="flex items-center gap-1">
              <BookOpen className="size-6" />
              <span className="font-medium hidden sm:inline">Problems</span>
            </div>
          </div>
          <div
            className={`px-4 py-2.5  rounded-lg transition-all duration-200 cursor-pointer ${
              isActive("/dashboard")
                ? "bg-green-600 text-black"
                : "hover-bg-base-200 text-base-content/60 hover:text-base-content"
            }`}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <div className="flex items-center gap-1">
              <LayoutDashboard className="size-6" />
              <span className="font-medium hidden sm:inline">Dashboard</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
