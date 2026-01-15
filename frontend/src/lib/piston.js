import axios from "axios";

//piston api for code execution

const PISTON_API = "https://emkc.org/api/v2/piston";
// POST https://emkc.org/api/v2/piston/execute

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  java: { language: "java", version: "15.0.2" },
  python: { language: "python", version: "3.10.0" },
  "c++": { language: "c++", version: "10.2.0" },
  c: { language: "c", version: "10.2.0" },
};

//docs
export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return { success: false, error: `Unsupported Language: ${language}` };
    }

    const response = await axios.post(`${PISTON_API}/execute`, {
      language: languageConfig.language,
      version: languageConfig.version,
      files: [
        {
          name: `main.${getFileExtension(language)}`,
          content: code,
        },
      ],
    });

    const run = response.data.run;

    // success
    if (run.code === 0) {
      return {
        success: true,
        output: run.stdout || "",
      };
    }

    // runtime error
    return {
      success: false,
      error: run.stderr || "Runtime Error",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

const getFileExtension = (language) => {
  const extensions = {
    javascript: "js",
    java: "java",
    python: "py",
    "c++": "cpp",
    c: "c",
  };
  return extensions[language] || "txt";
};
