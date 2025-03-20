import { useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAThR2xsb5E_ra5OfeWhqsBy3wiJZch-so"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const [prompt, setPrompt] = useState("");
  const [promptResult, setPromptResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onParaphrase = () => {
    const getParaphrasingData = async () => {
      if (!prompt.trim()) return;

      try {
        setIsLoading(true);
        const instructionsForAi = "Paraphrase this text: ";
        const newPrompt = instructionsForAi + prompt;
        console.log(newPrompt);
        const result = await model.generateContent(newPrompt);
        setPromptResult(result.response.text());
        console.log(result.response.text());
      } catch (err) {
        console.log(err);
        setPromptResult("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    getParaphrasingData();
  };

  const clearAll = () => {
    setPrompt("");
    setPromptResult("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white py-4 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Paraphraser Tool</h1>
          <a
            className="text-teal-100 hover:text-white text-sm underline"
            href="https://www.joaoportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            by João Silva
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Controls */}
        <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 p-4 flex flex-wrap gap-3 items-center">
          <button
            onClick={onParaphrase}
            disabled={isLoading || !prompt.trim()}
            className={`px-6 py-2 rounded font-medium text-white ${
              isLoading || !prompt.trim()
                ? "bg-gray-400"
                : "bg-teal-600 hover:bg-teal-700"
            } transition-colors flex items-center`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Paraphrase"
            )}
          </button>

          <button
            onClick={clearAll}
            className="px-6 py-2 rounded font-medium border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Clear All
          </button>

          <div className="ml-auto text-sm text-gray-500">
            {prompt.length} characters
          </div>
        </div>

        {/* Two-column editor */}
        <div className="flex flex-col md:flex-row border-x border-b border-gray-200 bg-white rounded-b-lg shadow-sm">
          {/* Left column - Input */}
          <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <h2 className="font-medium text-gray-700">Original Text</h2>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-64 md:h-96 p-4 focus:outline-none resize-none"
              placeholder="Enter your text here to paraphrase..."
            />
          </div>

          {/* Right column - Output */}
          <div className="flex-1">
            <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-center items-center">
              <h2 className="font-medium text-gray-700">Paraphrased Text</h2>
              {promptResult && (
                <button
                  onClick={() => navigator.clipboard.writeText(promptResult)}
                  className="text-sm text-teal-700 hover:text-teal-900 flex items-center ml-1 justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  Copy
                </button>
              )}
            </div>
            <div className="w-full h-64 md:h-96 p-4 bg-gray-50">
              {isLoading ? (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <svg
                      className="animate-spin h-8 w-8 mx-auto mb-4 text-teal-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating paraphrase...
                  </div>
                </div>
              ) : promptResult ? (
                <div className="h-full overflow-auto">{promptResult}</div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  Your paraphrased text will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <span className="text-xs font-bold text-center">
        I can process very long texts, even tens of thousands of words — but
        extremely lengthy inputs may reduce the quality of my response because I
        might lose focus. There's no official word limit.
      </span>
    </div>
  );
}

export default App;
