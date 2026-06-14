"use client";

import { useState, useEffect } from "react";
import { Settings, Save, Shield, Sliders, Globe, RefreshCw, AlertCircle } from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({
    apiEngine: "gpt-4o-mini",
    autoSync: true,
    crawlFrequency: "weekly",
    telemetryLogging: true
  });

  const handleUpdate = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate active serialization sync rules pipeline
    setTimeout(() => {
      setLoading(false);
      alert("System parameter controls successfully committed!");
    }, 1000);
  };

  return (
    <div className="space-y-8">
      
      {/* View Page Context Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <Settings className="h-3 w-3 text-black" /> Configuration Management
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-black">
          System Settings
        </h1>
        <p className="text-xs text-gray-500">
          Adjust the operation thresholds, target models, and background sync logic constraints of your engine instance.
        </p>
      </div>

      {/* Main Configurations Board Layout Block */}
      <form onSubmit={handleSaveSettings} className="max-w-3xl space-y-6">
        
        {/* Module Section One: Core AI Engine Routing */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-wider flex items-center gap-2 border-b border-gray-50 pb-2.5">
            <Sliders className="h-4 w-4 text-gray-400" /> Model Processing Cluster
          </h3>
          
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-gray-500">Autonomous Core Processing Engine</label>
            <select 
              name="apiEngine"
              value={config.apiEngine}
              onChange={handleUpdate}
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-black focus:bg-white transition-all cursor-pointer"
            >
              <option value="gpt-4o-mini">AI Core: Optimized Turbo Pipeline (Fast)</option>
              <option value="gpt-4o">AI Core: High-Density Analytics Matrix (Detailed)</option>
              <option value="claude-3-5-sonnet">AI Core: Semantic Vector Reasoning Model</option>
            </select>
          </div>
        </div>

        {/* Module Section Two: Crawl Automation Thresholds */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-5">
          <h3 className="text-xs font-bold text-black uppercase tracking-wider flex items-center gap-2 border-b border-gray-50 pb-2.5">
            <Globe className="h-4 w-4 text-gray-400" /> Automation Synchronizations
          </h3>

          {/* Inline Selection Select Row */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-gray-500">Scheduled Tracking Frequency</label>
            <select 
              name="crawlFrequency"
              value={config.crawlFrequency}
              onChange={handleUpdate}
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-black focus:bg-white transition-all cursor-pointer"
            >
              <option value="daily">Every 24 Hours (Realtime Loops)</option>
              <option value="weekly">Standard Run (Every 7 Calendar Days)</option>
              <option value="monthly">Bi-Annual Compression Cycle (Passive Monitoring)</option>
            </select>
          </div>

          {/* Toggle Block Checkbox: Auto-save Logs */}
          <div className="flex items-start justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100">
            <div className="space-y-0.5 max-w-xl">
              <p className="text-xs font-bold text-black">Store Pipeline Log History</p>
              <p className="text-[11px] text-gray-400 leading-normal">
                Persist metadata arrays permanently within local cache stores for later metrics aggregation retrieval.
              </p>
            </div>
            <input 
              type="checkbox"
              name="telemetryLogging"
              checked={config.telemetryLogging}
              onChange={handleUpdate}
              className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer accent-black mt-1"
            />
          </div>
        </div>

        {/* Safety Warning Info Box */}
        <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-xl flex gap-3">
          <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-700 leading-normal font-medium">
            Alterations to core tracking variables can result in a momentary delay while target indexes wipe historical node metrics and run clean schema alignment scans.
          </p>
        </div>

        {/* Form Global Form Submission Trigger Control */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 bg-black hover:bg-gray-900 disabled:bg-gray-400 text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group"
        >
          {loading ? (
            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Save className="h-3.5 w-3.5" />
          )}
          {loading ? "Syncing Clusters..." : "Commit Parameter Updates"}
        </button>

      </form>

    </div>
  );
}