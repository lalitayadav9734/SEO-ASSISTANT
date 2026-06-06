"use client";

import { useState } from "react";

export default function SitemapPage() {
  const [urls, setUrls] =
    useState("");

  const [result, setResult] =
    useState("");

  const generateSitemap = () => {
    const pages = urls
      .split("\n")
      .filter(Boolean);

    const sitemap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
  </url>
`
  )
  .join("")}
</urlset>
`;

    setResult(sitemap);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Sitemap Generator
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <textarea
          rows={8}
          placeholder={`https://site.com
https://site.com/about
https://site.com/contact`}
          value={urls}
          onChange={(e) =>
            setUrls(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={generateSitemap}
          className="mt-4 bg-black text-white px-6 py-3 rounded-lg"
        >
          Generate Sitemap
        </button>
      </div>

      {result && (
        <div className="bg-white p-6 rounded-xl shadow mt-6 overflow-auto">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}