import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for testing performance indicators.",
    features: ["3 Website Audits/mo", "50 Keyword Suggestions", "Basic AI Content Outline"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    desc: "For fast-growing builders and content teams.",
    features: ["Unlimited System Audits", "5,000 Keyword Generations", "Full AI Article Writer", "API Access Layer", "Dedicated Slack Support"],
    cta: "Upgrade to Pro",
    popular: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
            Predictable billing structure
          </h3>
          <p className="mt-3 text-gray-500 text-sm">
            Cancel, upgrade, or downgrade your processing nodes at any stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {TIERS.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 border ${
                tier.popular 
                  ? "border-black bg-white shadow-xl relative" 
                  : "border-gray-200/80 bg-gray-50/30"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-6 bg-black text-white px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase">
                  Most Popular
                </span>
              )}
              
              <div>
                <h4 className="text-base font-semibold text-black">{tier.name}</h4>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-black">{tier.price}</span>
                  <span className="text-xs font-medium text-gray-400">/ month</span>
                </div>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">{tier.desc}</p>
                
                <hr className="my-6 border-gray-100" />
                
                <ul className="space-y-3">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-gray-600 font-medium">
                      <Check className="h-3.5 w-3.5 text-black shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button className={`w-full font-medium text-xs py-3 rounded-xl transition-all ${
                  tier.popular 
                    ? "bg-black hover:bg-gray-900 text-white shadow-sm" 
                    : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
                }`}>
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}