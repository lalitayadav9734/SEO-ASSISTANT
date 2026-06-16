"use client";

import { useState } from "react";
import { FileText, Sparkles, Loader2, Clipboard, Check, Terminal } from "lucide-react";

export default function MetaPage() {
  const [pageName, setPageName] = useState("");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generateMeta = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://seo-backend-9783.onrender.com/api/meta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageName,
          keyword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* View Header Meta Row */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <FileText className="h-3 w-3 text-black" /> Document Header Optimization
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black">
          Meta Tag Generator
        </h1>
        <p className="text-xs text-gray-500">
          Synthesize high-relevance header metadata tags calibrated directly to contextual target search intent rules.
        </p>
      </div>

      {/* Left Input Configuration Shell Module */}
      <div className="max-w-3xl bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Target View/Page Context
            </label>
            <input
              type="text"
              placeholder="e.g., Enterprise E-Commerce Checkout"
              value={pageName}
              onChange={(e) => setPageName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Primary Index Keyword Element
            </label>
            <input
              type="text"
              placeholder="e.g., affordable tracking software"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        <button
          onClick={generateMeta}
          disabled={loading || !pageName || !keyword}
          className="w-full sm:w-auto px-6 bg-black hover:bg-gray-900 disabled:bg-gray-100 disabled:text-gray-400 text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
        >
          {loading ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Parsing Model Context Vectors...
            </>
          ) : (
            <>
              <Sparkles className="h-3.5 w-3.5 text-amber-400 group-disabled:text-gray-400 fill-amber-400/10" />
              Generate Meta Assets
            </>
          )}
        </button>
      </div>

      {/* Generated Response Terminal Display */}
      {result && (
        <div className="max-w-3xl bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden shadow-gray-100/40">
          
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 pt-4 px-5 bg-gray-50/50">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-xs font-mono font-bold text-gray-700">document.head.html</span>
            </div>
            
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 hover:text-black border border-gray-200/60 bg-white shadow-sm px-2.5 py-1 rounded-lg transition-all"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  Copied Script Block!
                </>
              ) : (
                <>
                  <Clipboard className="h-3.5 w-3.5" />
                  Copy Elements
                </>
              )}
            </button>
          </div>

          <div className="p-5 bg-white">
            <pre className="text-xs font-mono text-gray-600 leading-relaxed whitespace-pre-wrap bg-gray-50 p-4 rounded-xl border border-gray-100 selection:bg-black selection:text-white">
              {result}
            </pre>
          </div>
        </div>
      )}

    </div>
  );
}