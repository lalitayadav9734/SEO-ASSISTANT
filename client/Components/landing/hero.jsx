import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 pt-24 pb-20 text-center bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-800 mb-6 border border-gray-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Next-Gen AI SEO Insights
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-[1.1] max-w-4xl mx-auto">
          Rank higher on Google using <br />
          <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-transparent">
            AI-powered SEO intelligence
          </span>
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Generate keywords, audit websites, create SEO blogs, and optimize
          your content automatically — all in one AI platform built for modern startups.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/register"
            className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Start Free
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="/dashboard"
            className="w-full sm:w-auto border border-gray-200 bg-white font-medium text-gray-700 px-8 py-3.5 rounded-xl hover:bg-gray-50 hover:text-black transition-all duration-200 flex items-center justify-center"
          >
            View Dashboard
          </a>
        </div>

        {/* STATS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto border border-gray-100 rounded-2xl p-6 bg-gray-50/50 backdrop-blur-sm">
          <div className="space-y-1">
            <h3 className="text-3xl font-bold tracking-tight text-black">10K+</h3>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Keywords Generated</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-x border-gray-200/60 pt-4 md:pt-0">
            <h3 className="text-3xl font-bold tracking-tight text-black">5K+</h3>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Websites Optimized</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 pt-4 md:pt-0">
            <h3 className="text-3xl font-bold tracking-tight text-black">98%</h3>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Accuracy Score</p>
          </div>
        </div>
      </div>
    </section>
  );
}