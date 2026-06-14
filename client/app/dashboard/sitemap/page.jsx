"use client";

import { useState } from "react";
import { Network, Code, Sparkles, Clipboard, Check, HelpCircle } from "lucide-react";

export default function SitemapPage() {
  const [urls, setUrls] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false); // State for clipboard confirmation UX

  const generateSitemap = () => {
    const pages = urls.split("\n").filter(Boolean);

    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (url) => `  <url>
    <loc>${url.trim()}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

    setResult(sitemap);
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* View Header Info Panel */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <Network className="h-3 w-3 text-black" /> Index Configuration
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black">
          XML Sitemap Generator
        </h1>
        <p className="text-xs text-gray-500">
          Structure clean navigation schema files instantly to help search engine spiders map your content layouts safely.
        </p>
      </div>

      {/* Main Structural Control Layout Workspace Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        
        {/* Left Interactive Entry Panel (3/5 Columns) */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Target URL Registry (One per line)
            </label>
            <span className="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
              <HelpCircle className="h-3 w-3" /> Use complete HTTPS prefixes
            </span>
          </div>

          <textarea
            rows={8}
            placeholder={`https://mysite.com\nhttps://mysite.com/about\nhttps://mysite.com/features`}
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 leading-relaxed resize-none"
          />

          <button
            onClick={generateSitemap}
            className="w-full bg-black hover:bg-gray-900 text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400 fill-amber-400/10" />
            Compile XML Document Structure
          </button>
        </div>

        {/* Right Dynamic Informational Sidebar Panel (2/5 Columns) */}
        <div className="lg:col-span-2 p-6 bg-gray-50/60 border border-gray-200/60 rounded-2xl space-y-4">
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-black flex items-center gap-2">
              <Code className="h-4 w-4 text-gray-400" />
              Sitemap Utility Rules
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Sitemaps notify index controllers which target resources are verified for discoverability. Place your final compiled output file route straight into your web root directory context as <code className="bg-gray-200/60 px-1 py-0.5 rounded text-black">sitemap.xml</code>.
            </p>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
            <span>Target Protocol:</span>
            <span className="text-black font-semibold">XML v0.9 (Standard)</span>
          </div>
        </div>

      </div>

      {/* Conditional Output Generation Terminal Card */}
      {result && (
        <div className="bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden shadow-gray-100/40 space-y-0">
          
          {/* Terminal File Header bar */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 pt-4 px-5 bg-gray-50/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-bold text-gray-700">sitemap.xml</span>
            </div>
            
            {/* Action Copy Command Anchor */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-black border border-gray-200/60 bg-white shadow-sm px-2.5 py-1 rounded-lg transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  Copied Node!
                </>
              ) : (
                <>
                  <Clipboard className="h-3.5 w-3.5" />
                  Copy To Clipboard
                </>
              )}
            </button>
          </div>

          {/* Code Body Interface Block */}
          <div className="p-5 max-h-[340px] overflow-auto bg-white">
            <pre className="text-xs font-mono text-gray-600 leading-relaxed whitespace-pre-wrap selection:bg-black selection:text-white">
              {result}
            </pre>
          </div>
        </div>
      )}

    </div>
  );
}