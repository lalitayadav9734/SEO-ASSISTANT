"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  Building2, 
  Flag, 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  Compass, 
  ArrowRight, 
  Search, 
  FileText, 
  Bot, 
  Network 
} from "lucide-react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      const response = await fetch(`https://seo-backend-9783.onrender.com/api/user/${userId}`);
      const data = await response.json();

      if (data.success) {
        setUser(data.user);
      }
    };

    getUser();
  }, []);

  if (!user) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded-lg w-1/3" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="h-32 bg-gray-200 rounded-2xl" />
          <div className="h-32 bg-gray-200 rounded-2xl" />
          <div className="h-32 bg-gray-200 rounded-2xl" />
        </div>
        <div className="h-48 bg-gray-200 rounded-2xl w-full" />
      </div>
    );
  }

  // Workspace Nav shortcuts matrix map
  const quickActions = [
    { title: "Extract Keywords", desc: "Scan context search volume densities.", href: "/dashboard/keywords", icon: Search, color: "text-blue-500 bg-blue-50" },
    { title: "Generate Metatags", desc: "Synthesize header structural rules.", href: "/dashboard/meta", icon: FileText, color: "text-amber-500 bg-amber-50" },
    { title: "Configure Crawlers", desc: "Manage robots instruction routing.", href: "/dashboard/robots", icon: Bot, color: "text-indigo-500 bg-indigo-50" },
    { title: "Compile Sitemaps", desc: "Rebuild structural directory matrices.", href: "/dashboard/sitemap", icon: Network, color: "text-emerald-500 bg-emerald-50" },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* View Header Meta Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 bg-white border border-gray-200 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            <ShieldCheck className="h-3 w-3 text-emerald-500" /> Active Session Node
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-black">
            Welcome Back, {user.name}
          </h1>
        </div>

        {/* Decorative sync pill button */}
        <div className="self-start sm:self-center inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium bg-white border border-gray-200/60 shadow-sm px-3 py-1.5 rounded-xl">
          <RefreshCw className="h-3.5 w-3.5 text-gray-300" />
          Live Metrics Synchronized
        </div>
      </div>

      {/* Upgraded Functional Parameter Data Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card Field: Target Domain */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Configured Domain</span>
            <div className="h-7 w-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
              <Globe className="h-3.5 w-3.5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-0.5">
            <p className="text-base font-bold text-black truncate">
              {user.websiteName || "Not Provided"}
            </p>
            <p className="text-[11px] text-gray-400">Primary domain validation route.</p>
          </div>
        </div>

        {/* Card Field: Sector Profile Placement */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Market Vertical</span>
            <div className="h-7 w-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
              <Building2 className="h-3.5 w-3.5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-0.5">
            <p className="text-base font-bold text-black truncate">
              {user.industry || "Not Provided"}
            </p>
            <p className="text-[11px] text-gray-400">Categorized parsing parameters.</p>
          </div>
        </div>

        {/* Card Field: Location Targeting Zone */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Geographic Zone</span>
            <div className="h-7 w-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
              <Flag className="h-3.5 w-3.5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-0.5">
            <p className="text-base font-bold text-black truncate">
              {user.targetCountry || "Not Provided"}
            </p>
            <p className="text-[11px] text-gray-400">Target search pipeline indexer.</p>
          </div>
        </div>

      </div>

      {/* Quick Launch Shortcuts Grid Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
          <Compass className="h-3.5 w-3.5" /> Workspace Shortcuts
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link 
                key={action.title} 
                href={action.href}
                className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-sm hover:border-black transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className={`h-8 w-8 rounded-lg ${action.color} flex items-center justify-center shadow-inner`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-black group-hover:underline">{action.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-normal">{action.desc}</p>
                  </div>
                </div>
                <div className="text-[10px] font-bold text-gray-900 flex items-center gap-1 pt-1">
                  Open Engine <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Interactive Operational Workspace Board Section */}
      <div className="p-6 bg-white border border-gray-200/70 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center gap-2 font-bold text-xs text-black border-b border-gray-100 pb-3">
          <Sparkles className="h-4 w-4 text-amber-500 fill-amber-500/10" />
          Core Engine Action Guide
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-gray-500 leading-relaxed font-medium">
          <div className="space-y-1">
            <h5 className="text-black font-bold text-xs">1. Discover Key Vectors</h5>
            <p>Utilize the Keywords Module to find optimal high-intent search volumes mapped safely to your selected business vertical.</p>
          </div>
          <div className="space-y-1">
            <h5 className="text-black font-bold text-xs">2. Formulate Layout Meta</h5>
            <p>Deploy the header tag code builder and directory routers to instruct crawling spiders exactly how to index page objects.</p>
          </div>
          <div className="space-y-1">
            <h5 className="text-black font-bold text-xs">3. Track Historical Scans</h5>
            <p>Access the persistent generation logs array to download, audit, or cross-verify previously exported metadata script bundles.</p>
          </div>
        </div>
      </div>

    </div>
  );
}