import React from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import ProblemsPage from "./pages/ProblemsPage";
import Dashboard from "./pages/Dashboard";
import { useUser } from "@clerk/clerk-react";
import ProblemPage from "./pages/ProblemPage";
import { Toaster } from "react-hot-toast";
import Session from "./pages/Session";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;
  return (
    <div>
      <Toaster />
      <Analytics />
      <SpeedInsights />
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? <Navigate to={"/dashboard"} /> : <Home />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/problem/:id"
          element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <Dashboard /> : <Navigate to={"/"} />}
        />
        <Route path="/session/:id" element={<Session />} />
      </Routes>
    </div>
  );
};

export default App;
