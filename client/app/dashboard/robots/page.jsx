"use client";

import { useState } from "react";
import { Bot, HelpCircle, Code, Sparkles, Clipboard, Check } from "lucide-react";

export default function RobotsPage() {
  const [sitemapUrl, setSitemapUrl] = useState("");
  const [blockedPages, setBlockedPages] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

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
          <Bot className="h-3 w-3 text-black" /> Crawl Management
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black">
          Robots.txt Control File
        </h1>
        <p className="text-xs text-gray-500">
          Establish processing restrictions for public data aggregators and search engine automated crawlers.
        </p>
      </div>

      {/* Input Configuration Grid Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        
        {/* Interactive Workspace Area (3/5 Columns) */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-5">
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Primary Sitemap Link Reference
            </label>
            <input
              type="text"
              placeholder="https://mysite.com/sitemap.xml"
              value={sitemapUrl}
              onChange={(e) => setSitemapUrl(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Exclusion Rules Registry (Disallow)
              </label>
              <span className="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
                <HelpCircle className="h-3 w-3" /> Separate with commas
              </span>
            </div>
            <textarea
              rows={4}
              placeholder="/admin, /dashboard, /private-routes"
              value={blockedPages}
              onChange={(e) => setBlockedPages(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 leading-relaxed resize-none"
            />
          </div>

          <button
            onClick={generateRobots}
            className="w-full bg-black hover:bg-gray-900 text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400 fill-amber-400/10" />
            Compile Robots Directives
          </button>
        </div>

        {/* Informational Guidance Sidebar (2/5 Columns) */}
        <div className="lg:col-span-2 p-6 bg-gray-50/60 border border-gray-200/60 rounded-2xl space-y-4">
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-black flex items-center gap-2">
              <Code className="h-4 w-4 text-gray-400" />
              Directives Protocol
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              The <code className="bg-gray-200/60 px-1 py-0.5 rounded text-black">robots.txt</code> asset serves as a roadmap suggestion for ethical scripts. It does not hard-lock access, but handles directory navigation index patterns for Google or Bing perfectly.
            </p>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
            <span>Root Match Scope:</span>
            <span className="text-black font-semibold">User-agent: * (All Agents)</span>
          </div>
        </div>

      </div>

      {/* Output Console Display Layout Component */}
      {result && (
        <div className="bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden shadow-gray-100/40">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 pt-4 px-5 bg-gray-50/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-xs font-mono font-bold text-gray-700">robots.txt</span>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-black border border-gray-200/60 bg-white shadow-sm px-2.5 py-1 rounded-lg transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  Copied File!
                </>
              ) : (
                <>
                  <Clipboard className="h-3.5 w-3.5" />
                  Copy Directives
                </>
              )}
            </button>
          </div>
          <div className="p-5 bg-white">
            <pre className="text-xs font-mono text-gray-600 leading-relaxed whitespace-pre-wrap selection:bg-black selection:text-white">
              {result}
            </pre>
          </div>
        </div>
      )}

    </div>
  );
}