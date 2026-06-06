"use client";

import { useState } from "react";

export default function RobotsPage() {
  const [sitemapUrl, setSitemapUrl] =
    useState("");

  const [blockedPages, setBlockedPages] =
    useState("");

  const [result, setResult] =
    useState("");

  const generateRobots = () => {
    const pages = blockedPages
      .split(",")
      .map((page) => page.trim())
      .filter(Boolean);

    let robots = `User-agent: *\n`;

    pages.forEach((page) => {
      robots += `Disallow: ${page}\n`;
    });

    robots += `\nSitemap: ${sitemapUrl}`;

    setResult(robots);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Robots.txt Generator
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          placeholder="Sitemap URL"
          value={sitemapUrl}
          onChange={(e) =>
            setSitemapUrl(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          rows={4}
          placeholder="/admin,/dashboard,/private"
          value={blockedPages}
          onChange={(e) =>
            setBlockedPages(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={generateRobots}
          className="mt-4 bg-black text-white px-6 py-3 rounded-lg"
        >
          Generate Robots.txt
        </button>
      </div>

      {result && (
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}