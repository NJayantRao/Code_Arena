import React from "react";
import Editor from "@monaco-editor/react";
import { languageConfig } from "../utils/languageConfig";
import { Loader2, Play } from "lucide-react";
const CodeEditor = ({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) => {
  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 bg-base-100 border-t">
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={`${languageConfig[selectedLanguage].image}`}
            alt={`${languageConfig[selectedLanguage].name}`}
            className="size-6 object-contain"
          />
          <select
            className="select select-sm"
            value={selectedLanguage}
            onChange={(e) => {
              onLanguageChange(e);
            }}
          >
            {Object.entries(languageConfig).map(([key, lang]) => {
              return (
                <option key={key} value={key}>
                  {lang.name}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="btn text-green-600 btn-sm  rounded-xl"
          disabled={isRunning}
          onClick={() => {
            onRunCode();
          }}
        >
          {isRunning ? (
            <div className="flex gap-2">
              <Loader2 className="size-4 animate-spin" />
              Running...
            </div>
          ) : (
            <div className="flex gap-2">
              <Play className="size-4" />
              Run Code
            </div>
          )}
        </button>
      </div>
      <div className="flex-1">
        <Editor
          height={"100%"}
          language={languageConfig[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: "true",
            automaticLayout: "true",
            minimap: { enabled: false },
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
