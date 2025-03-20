import { useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAThR2xsb5E_ra5OfeWhqsBy3wiJZch-so"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const [prompt, setPrompt] = useState<string>("");
  const [promptResult, setPromptResult] = useState<any>("");

  const onParaphrase = () => {
    const getParaphrasingData = async () => {
      try {
        const intructionsForAi = "Paraphrase this text: ";
        const newPrompt = intructionsForAi + prompt;
        setPrompt(newPrompt);
        console.log(newPrompt);

        const result = await model.generateContent(newPrompt);
        setPromptResult(result.response.text());
        console.log(result.response.text());

        setPrompt("");
      } catch (err) {
        console.log(err);
      }
    };

    getParaphrasingData();
  };

  return (
    <div>
      <h1 className="text-lg">
        Paraphraser tool built by{" "}
        <a
          className="text-orange-300"
          href="https://www.joaoportfolio.com/"
          target="_blank"
        >
          João Silva
        </a>
      </h1>
      <div className="flex flex-col">
        <button onClick={onParaphrase}>Paraphrase</button>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-fit"
          placeholder="Write your text..."
        ></input>
        {promptResult}
      </div>
    </div>
  );
}

export default App;
