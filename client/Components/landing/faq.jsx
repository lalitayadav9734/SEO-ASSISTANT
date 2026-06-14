const FAQS = [
  {
    q: "How accurate is the AI search density volume?",
    a: "Our parsing engines evaluate historical indexing loops mixed with real-time semantic API sweeps to map predictive accuracy down to a 98% confidence score standard."
  },
  {
    q: "Can I connect custom domains to the verification middleware?",
    a: "Yes. The system architecture supports simple OAuth paths and TXT records to safely connect any structural web framework seamlessly."
  },
  {
    q: "Is there an agency layout for multiple clients?",
    a: "Enterprise teams can access specialized multi-tenant dashboard profiles inside the settings config panel on our production plans."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#fafafa] px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center text-black mb-16">
          Frequently asked questions
        </h3>

        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-200/60 rounded-xl shadow-sm">
              <h4 className="text-sm font-semibold text-black">{faq.q}</h4>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}