import { Search, FileText, BarChart3 } from "lucide-react";

const FEATURES_DATA = [
  {
    icon: Search,
    title: "AI Keyword Engine",
    description: "Discover low-competition, high-ranking keywords tailored to your specific niche market."
  },
  {
    icon: FileText,
    title: "Content Generator",
    description: "Generate highly optimized blogs, modern titles, and clean meta descriptions instantly."
  },
  {
    icon: BarChart3,
    title: "SEO Website Audit",
    description: "Get an exhaustive, real-time breakdown of SEO structural issues and actionable updates."
  }
];

export default function Features() {
  return (
    <section id="features" className="px-6 md:px-12 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
            Powerful AI SEO Toolkit
          </h3>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Everything you need to outperform your competitors and dominate search layouts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="group p-8 bg-white border border-gray-200/70 rounded-2xl hover:border-black transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="h-10 w-10 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-5 group-hover:bg-black group-hover:border-black transition-colors duration-300">
                  <Icon className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-base font-semibold text-black mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}