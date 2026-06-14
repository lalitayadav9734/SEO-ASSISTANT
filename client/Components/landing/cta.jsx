import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Start ranking higher with AI today
        </h3>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Join thousands of modern creators and high-velocity engineering teams upgrading their visibility metrics.
        </p>

        <div className="pt-4">
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-medium text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-white/5"
          >
            Get Started Free
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}