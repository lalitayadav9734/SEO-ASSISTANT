const STEPS = [
  {
    step: "01",
    title: "Add Your Website",
    description: "Enter your site details, technical parameters, and your targeted search audience."
  },
  {
    step: "02",
    title: "AI Analysis",
    description: "Our models process your system architecture, metadata layouts, and keyword density mapping."
  },
  {
    step: "03",
    title: "Get Results",
    description: "Receive fully actionable SEO optimization strategies and deployment steps instantly."
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#fcfcfc] border-y border-gray-200/60 py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center text-black mb-16">
          Engineered for rapid growth
        </h3>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {STEPS.map((item, idx) => (
            <div key={idx} className="relative space-y-4">
              <div className="text-xs font-bold tracking-widest text-gray-400 bg-white border border-gray-200/60 shadow-sm w-8 h-8 rounded-full flex items-center justify-center">
                {item.step}
              </div>
              <h4 className="font-semibold text-black text-base">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}