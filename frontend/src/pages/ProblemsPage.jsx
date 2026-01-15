import React from "react";
import Navbar from "../components/common/Navbar";
import { problems } from "../data/problems.js";
import ProblemCard from "../components/ui/cards/ProblemCard";

const ProblemsPage = () => {
  const problemList = Object.values(problems);
  console.log(problemList);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>
        <div className="space-y-4">
          {problemList.map((ele) => {
            return (
              <ProblemCard
                key={ele.id}
                id={ele.id}
                title={ele.title}
                difficulty={ele.difficulty}
                category={ele.category}
                description={ele.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
