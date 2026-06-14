import { Layers, Terminal, LineChart } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fafafa] px-6 md:px-12 border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
            Built for modern engineering & content teams
          </h3>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Say goodbye to clunky spreadsheet trackers. Get visual charts, clean workspaces, and systemic code recommendations.
          </p>
        </div>

        {/* Premium Dashboard Shell Mockup */}
        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden p-2 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2 px-4 bg-gray-50/80 rounded-t-xl h-10">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div className="bg-white border border-gray-200/60 rounded-md text-[11px] font-medium text-gray-400 px-12 py-0.5 shadow-sm">
              app.aiseoassistant.com/dashboard
            </div>
            <div className="w-12" />
          </div>

          <div className="bg-white p-4 md:p-8 min-h-[300px] md:min-h-[400px] grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Mock Sidebar */}
            <div className="hidden lg:flex flex-col gap-2 border-r border-gray-100 pr-4">
              <div className="h-8 bg-gray-900 rounded-lg flex items-center px-3 gap-2 text-white text-xs font-medium">
                <LineChart className="h-3.5 w-3.5" /> Overview
              </div>
              <div className="h-8 hover:bg-gray-50 rounded-lg flex items-center px-3 gap-2 text-gray-500 text-xs font-medium cursor-pointer">
                <Layers className="h-3.5 w-3.5" /> Keyword Engine
              </div>
              <div className="h-8 hover:bg-gray-50 rounded-lg flex items-center px-3 gap-2 text-gray-500 text-xs font-medium cursor-pointer">
                <Terminal className="h-3.5 w-3.5" /> System Audits
              </div>
            </div>
            
            {/* Mock Chart Content Space */}
            <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-emerald-100 bg-emerald-50/30 rounded-xl">
                  <span className="text-xs font-semibold text-gray-400 uppercase">Health Score</span>
                  <p className="text-2xl font-bold text-emerald-600 mt-1">94%</p>
                </div>
                <div className="p-4 border border-gray-100 bg-gray-50/20 rounded-xl">
                  <span className="text-xs font-semibold text-gray-400 uppercase">Organic Clicks</span>
                  <p className="text-2xl font-bold text-black mt-1">14.2K</p>
                </div>
                <div className="p-4 border border-gray-100 bg-gray-50/20 rounded-xl">
                  <span className="text-xs font-semibold text-gray-400 uppercase">Top Position</span>
                  <p className="text-2xl font-bold text-black mt-1">#3</p>
                </div>
              </div>
              
              {/* Fake visual bar chart display */}
              <div className="h-44 border border-gray-100 bg-gray-50/30 rounded-xl p-4 flex items-end gap-3 justify-between">
                <div className="w-full bg-gray-200 rounded-t h-[30%] animate-pulse" />
                <div className="w-full bg-gray-200 rounded-t h-[45%]" />
                <div className="w-full bg-gray-200 rounded-t h-[20%]" />
                <div className="w-full bg-black rounded-t h-[75%]" />
                <div className="w-full bg-gray-200 rounded-t h-[60%]" />
                <div className="w-full bg-gray-200 rounded-t h-[90%]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}