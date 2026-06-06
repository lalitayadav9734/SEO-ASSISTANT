"use client";

import { useState } from "react";

export default function MetaPage() {
  const [pageName, setPageName] =
    useState("");

  const [keyword, setKeyword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  const generateMeta = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/meta",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            pageName,
            keyword,
          }),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        setResult(data.data);
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
        Meta Generator
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Page Name"
            value={pageName}
            onChange={(e) =>
              setPageName(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Target Keyword"
            value={keyword}
            onChange={(e) =>
              setKeyword(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={generateMeta}
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            {loading
              ? "Generating..."
              : "Generate Meta"}
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-white mt-6 p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl mb-4">
            Result
          </h2>

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}