import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { problems } from "../data/problems";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import Navbar from "../components/common/Navbar";
import OutputPanel from "../components/OutputPanel";
import CodeEditor from "../components/CodeEditor";
import ProblemDescription from "../components/ProblemDescription";
import { executeCode } from "../lib/piston";
import { toast } from "react-hot-toast";
import confetti from "canvas-confetti"

const ProblemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProblemId, setCurrentProblemId] = useState(id);
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [code, setCode] = useState(
    problems[currentProblemId].starterCode[selectedLanguage]
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isTestPassed, setIsTestPassed] = useState(false);

  const currentProblem = problems[currentProblemId];
  const handleProblemChange = (newId) => {
    setCurrentProblemId(newId);
    navigate(`/problem/${newId}`);
    console.log(id);
  };

  const normalizedOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

    const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  }

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActualOutput = normalizedOutput(actualOutput);
    const normalizedExpectedOutput = normalizedOutput(expectedOutput);
    return normalizedActualOutput === normalizedExpectedOutput;
  };
  const handelLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };
  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    const result = await executeCode(selectedLanguage, code);
console.log("Result:", result.success, result.output || result.error);
    
    setOutput(result);
    setIsRunning(false);

    if (result.success) {
  const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
  const passed = checkIfTestsPassed(result.output, expectedOutput);
  setIsTestPassed(passed);

  if (passed) {
    triggerConfetti()
    toast.success("All tests Passed");
  } else {
    setOutput({
      success: false,
      output: result.output,
      error: `Expected:\n${expectedOutput}\n\nGot:\n${result.output}`
    });
    setIsRunning(false);
    toast.error("Error");
    return;
  }
} else{
  toast.error("code execution failed")
}

  };

  useEffect(() => {
  setCode(problems[currentProblemId].starterCode[selectedLanguage]);
}, [currentProblemId, selectedLanguage]);


  return (
    <div className="h-screen w-full bg-base-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={40} minSize={30}>
            <div className="h-screen overflow-y-auto">
              <ProblemDescription
                problem={currentProblem}
                currentProblemId={currentProblemId}
                onProblemChange={handleProblemChange}
                allProblems={Object.values(problems)}
              />
            </div>
          </Panel>
          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction="vertical">
              {/* code editor */}
              <Panel defaultSize={60} minSize={30}>
                <CodeEditor
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handelLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>
              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />
              {/* output */}
              <Panel defaultSize={40} minSize={30}>
                <OutputPanel output={output}/>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default ProblemPage;
