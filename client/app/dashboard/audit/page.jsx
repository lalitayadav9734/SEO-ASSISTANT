"use client";

import { useState } from "react";

export default function AuditPage() {
  const [url, setUrl] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const runAudit = async () => {
    try {
      setLoading(true);

      const response =
        await fetch(
          "/api/audit",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              url,
            }),
          }
        );

      const data =
        await response.json();

      if (data.success) {
        setResult(data.audit);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        SEO Audit
      </h1>

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
        className="w-full border p-3 rounded-lg"
      />

      <button
        onClick={runAudit}
        className="mt-4 bg-black text-white px-6 py-3 rounded-lg"
      >
        {loading
          ? "Auditing..."
          : "Run Audit"}
      </button>

      {result && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <pre>
            {JSON.stringify(
              result,
              null,
              2
            )}
          </pre>
        </div>
      )}
    </div>
  );
}