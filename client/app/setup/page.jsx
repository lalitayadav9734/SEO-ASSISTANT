"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Globe, Building2, Flag, Users, KeyRound, Sparkles, ArrowRight, LayoutGrid } from "lucide-react";

export default function SetupPage() {
  const [formData, setFormData] = useState({
    websiteName: "",
    websiteUrl: "",
    industry: "",
    targetCountry: "",
    targetAudience: "",
    primaryKeywords: "",
  });
  
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Custom Form Validation Strategy Check
  const validateForm = () => {
    if (!formData.websiteName.trim()) {
      alert("Please enter your Website Name.");
      return false;
    }
    if (!formData.websiteUrl.trim()) {
      alert("Please enter your Target Domain URL.");
      return false;
    }
    if (!formData.websiteUrl.includes(".")) {
      alert("Please enter a valid URL location structure (e.g., domain.com).");
      return false;
    }
    if (!formData.industry.trim()) {
      alert("Please enter an Industry Vertical.");
      return false;
    }
    return true; // Form is perfectly filled out!
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Executes validation helper smoothly to avoid runtime component crashes
    if (!validateForm()) return;

    setLoading(true);

    try {
      const payload = {
        websiteName: formData.websiteName.trim(),
        websiteUrl: formData.websiteUrl.trim(),
        industry: formData.industry.trim(),
        targetCountry: formData.targetCountry.trim(),
        targetAudience: formData.targetAudience.trim(),
        primaryKeywords: formData.primaryKeywords.trim(),
      };

      const res = await fetch("https://seo-backend-9783.onrender.com/api/setup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save configuration data");
      }

      console.log("Server response:", data);
      alert("Setup saved successfully!");
      
      router.push("/dashboard");

    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong connecting to Render backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] text-gray-900 antialiased selection:bg-black selection:text-white p-6 relative overflow-hidden">
      
      {/* Background Matrix Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Primary Setup Workspace Card Container */}
      <div className="bg-white w-full max-w-2xl rounded-2xl border border-gray-200/80 shadow-2xl shadow-gray-100/50 p-8 md:p-10 relative z-10 space-y-8">
        
        {/* Core Header Identity Area */}
        <div className="space-y-2">
          <div className="h-9 w-9 bg-black rounded-xl flex items-center justify-center shadow-md mb-3">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-black">
            Configure Your Target Node
          </h1>
          <p className="text-xs text-gray-500 max-w-lg">
            Map your domain attributes directly into the optimization pipeline to coordinate your structural engine.
          </p>
        </div>

        {/* Structured Configuration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Two-Column Form Field Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Input Element: Website Identity */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Website Name</label>
              <div className="relative">
                <LayoutGrid className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="websiteName"
                  placeholder="e.g., Enterprise SaaS Portal"
                  value={formData.websiteName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
                />
              </div>
            </div>

            {/* Input Element: Target Production URL */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Target Domain URL</label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="websiteUrl"
                  placeholder="https://example.com"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
                />
              </div>
            </div>

            {/* Input Element: Sector Vertical Core */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Industry Vertical</label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="industry"
                  placeholder="e.g., B2B FinTech Architecture"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
                />
              </div>
            </div>

            {/* Input Element: Target Geolocation Region */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Target Country Zone</label>
              <div className="relative">
                <Flag className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="targetCountry"
                  placeholder="e.g., United States"
                  value={formData.targetCountry}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Full-Width Core Input Element: Intended Demographic Persona */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Target Demographic Audience</label>
            <div className="relative">
              <Users className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                name="targetAudience"
                placeholder="e.g., DevOps Engineers and IT Infrastructure Administrators"
                value={formData.targetAudience}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Full-Width Complex Area Field: Seed Root Keywords */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Seed Keywords Clusters</label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <textarea
                name="primaryKeywords"
                placeholder="List your core parameters separated by commas (e.g., server monitoring tools, infrastructure health logs)"
                value={formData.primaryKeywords}
                onChange={handleChange}
                rows={3}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-black focus:bg-white transition-all shadow-sm placeholder:text-gray-400 font-medium resize-none min-h-[90px]"
              />
            </div>
          </div>

          {/* Form Action Controls Trigger Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-gray-900 disabled:bg-gray-400 text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group mt-2"
          >
            {loading ? "Synchronizing Configuration..." : "Commit Environment & Continue"}
            {!loading && <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  );
}