"use client";

import { useState } from "react";

export default function KeywordsPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generateKeywords = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/keywords",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            topic,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        const userId =
  localStorage.getItem("userId");

await fetch(
  "/assets/save",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      userId,
      type: "keyword",
      input: topic,
      output: data.data,
    }),
  }
);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Keyword Generator
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Enter Topic..."
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={generateKeywords}
          disabled={loading}
          className="mt-4 bg-black text-white px-6 py-3 rounded-lg"
        >
          {loading
            ? "Generating..."
            : "Generate Keywords"}
        </button>
      </div>

      {result && (
        <div className="bg-white mt-6 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Results
          </h2>

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}