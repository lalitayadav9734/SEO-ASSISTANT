export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="flex items-center justify-between px-8 py-5 border-b bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight">
          AI SEO Assistant
        </h1>

        <nav className="hidden md:flex gap-6 text-gray-600">
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#how" className="hover:text-black">How it works</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
        </nav>

        <div className="space-x-3">
          <a href="/login" className="text-gray-600 hover:text-black">
            Login
          </a>
          <a
            href="/register"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 py-28 text-center bg-gradient-to-b from-slate-50 to-white">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Rank higher on Google using <br />
          <span className="text-gray-500">AI-powered SEO intelligence</span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Generate keywords, audit websites, create SEO blogs, and optimize
          your content automatically — all in one AI platform built for modern startups.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/register"
            className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            Start Free
          </a>

          <a
            href="/dashboard"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50"
          >
            View Dashboard
          </a>
        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-3 max-w-3xl mx-auto text-center">
          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-500 text-sm">Keywords Generated</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">5K+</h3>
            <p className="text-gray-500 text-sm">Websites Optimized</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-gray-500 text-sm">Accuracy Score</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-8 py-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          Powerful AI SEO Toolkit
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <h4 className="text-lg font-semibold mb-2">
              AI Keyword Engine
            </h4>
            <p className="text-gray-600">
              Discover low-competition, high-ranking keywords tailored to your niche.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <h4 className="text-lg font-semibold mb-2">
              Content Generator
            </h4>
            <p className="text-gray-600">
              Generate SEO-optimized blogs, titles, and meta descriptions instantly.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <h4 className="text-lg font-semibold mb-2">
              SEO Website Audit
            </h4>
            <p className="text-gray-600">
              Get a full breakdown of SEO issues and actionable improvements.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50 py-24 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          How it works
        </h3>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div>
            <div className="text-2xl font-bold mb-2">1</div>
            <h4 className="font-semibold">Add Your Website</h4>
            <p className="text-gray-600 text-sm mt-2">
              Enter your site details and target audience.
            </p>
          </div>

          <div>
            <div className="text-2xl font-bold mb-2">2</div>
            <h4 className="font-semibold">AI Analysis</h4>
            <p className="text-gray-600 text-sm mt-2">
              Our AI analyzes your SEO structure and keywords.
            </p>
          </div>

          <div>
            <div className="text-2xl font-bold mb-2">3</div>
            <h4 className="font-semibold">Get Results</h4>
            <p className="text-gray-600 text-sm mt-2">
              Receive optimized SEO strategies instantly.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h3 className="text-3xl md:text-4xl font-bold">
          Start ranking higher with AI today
        </h3>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Join thousands of creators and businesses improving their SEO performance.
        </p>

        <a
          href="/register"
          className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Get Started Free
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AI SEO Assistant. Built for modern growth.
      </footer>
    </div>
  );
}