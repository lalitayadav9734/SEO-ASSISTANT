"use client";

import { useState } from "react";
import { BarChart3, Globe, Sparkles, Loader2, Clipboard, Check, Activity } from "lucide-react";

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const runAudit = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://seo-backend-9783.onrender.com/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.audit);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* View Page Content Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <BarChart3 className="h-3 w-3 text-black" /> System Diagnostics
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black">
          Structural SEO Audit
        </h1>
        <p className="text-xs text-gray-500">
          Scan and unpack live codebases to review structural parameters against standard algorithmic ranking checks.
        </p>
      </div>

      {/* Target entry block card field */}
      <div className="max-w-3xl bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-5">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Target Domain Location URL
          </label>
          <div className="relative">
            <Globe className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="https://mysite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        <button
          onClick={runAudit}
          disabled={loading || !url.trim()}
          className="w-full sm:w-auto px-6 bg-black hover:bg-gray-900 disabled:bg-gray-100 disabled:text-gray-400 text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
        >
          {loading ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Crawling Node Parameters...
            </>
          ) : (
            <>
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              Execute Structural Audit
            </>
          )}
        </button>
      </div>

      {/* Generated Response Terminal Block Grid layout section */}
      {result && (
        <div className="max-w-3xl bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden shadow-gray-100/40">
          
          {/* Terminal Controls Shell Frame */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 pt-4 px-5 bg-gray-50/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-gray-700">audit_telemetry.json</span>
            </div>
            
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-black border border-gray-200/60 bg-white shadow-sm px-2.5 py-1 rounded-lg transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  Copied Manifest!
                </>
              ) : (
                <>
                  <Clipboard className="h-3.5 w-3.5" />
                  Copy Manifest JSON
                </>
              )}
            </button>
          </div>

          {/* Interactive Structured Code Window */}
          <div className="p-5 bg-white">
            <pre className="text-xs font-mono text-gray-600 leading-relaxed max-h-[400px] overflow-auto bg-gray-50 p-4 rounded-xl border border-gray-100 selection:bg-black selection:text-white">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </div>
      )}

    </div>
  );
}