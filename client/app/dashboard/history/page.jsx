"use client";

import { useEffect, useState } from "react";
import { History, Search, FileText, Bot, Network, Calendar, Terminal } from "lucide-react";

export default function HistoryPage() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        const response = await fetch(`https://seo-backend-9783.onrender.com/api/assets/${userId}`);
        const data = await response.json();

        if (data.success) {
          setAssets(data.assets);
        }
      } catch (error) {
        console.error("Error reading log stream telemetry:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  const getIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "keyword": return <Search className="h-3.5 w-3.5 text-blue-500" />;
      case "meta": return <FileText className="h-3.5 w-3.5 text-amber-500" />;
      case "robots": return <Bot className="h-3.5 w-3.5 text-indigo-500" />;
      case "sitemap": return <Network className="h-3.5 w-3.5 text-emerald-500" />;
      default: return <Terminal className="h-3.5 w-3.5 text-gray-500" />;
    }
  };

  // Premium Skeleton Loading Blocks
  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded-lg w-1/4" />
        <div className="space-y-3">
          <div className="h-20 bg-gray-200 rounded-2xl" />
          <div className="h-20 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      
      {/* View Header Info Panel */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <History className="h-3 w-3 text-black" /> Event Logging
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black">
          Generation History
        </h1>
        <p className="text-xs text-gray-500">
          Review your historically synchronized asset runs compiled directly through your engine clusters.
        </p>
      </div>

      {/* Main Structural Asset Activity Log Stack */}
      <div className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden">
        {assets.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <p className="text-xs font-semibold text-gray-400">No logs found in the index</p>
            <p className="text-[11px] text-gray-400">Generate keywords, metatags, or structural config profiles to populate rows here.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 font-medium">
            {assets.map((asset) => (
              <div 
                key={asset._id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-gray-50/60 transition-colors gap-4"
              >
                {/* Profile Meta Cluster Block */}
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="h-8 w-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    {getIcon(asset.type)}
                  </div>
                  
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-black uppercase tracking-tight">
                        {asset.type || "unknown_node"}
                      </span>
                      <span className="text-gray-200 text-[10px] hidden sm:inline">|</span>
                      <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Node Registered
                      </span>
                    </div>
                    
                    {/* Input Vector Value Element */}
                    <p className="text-xs text-gray-500 font-mono bg-gray-50/70 border border-gray-100/80 px-3 py-2 rounded-xl whitespace-pre-wrap leading-relaxed max-w-2xl">
                      {asset.input}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}