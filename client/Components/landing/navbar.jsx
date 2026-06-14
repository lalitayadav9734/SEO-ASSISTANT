import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <h1 className="text-lg font-semibold tracking-tight text-black">
          AI SEO Assistant
        </h1>
      </div>

      <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
        <a href="#features" className="hover:text-black transition-colors duration-200">Features</a>
        <a href="#how" className="hover:text-black transition-colors duration-200">How it works</a>
        <a href="#pricing" className="hover:text-black transition-colors duration-200">Pricing</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="/login" className="text-sm font-medium text-gray-500 hover:text-black transition-colors duration-200">
          Login
        </a>
        <a
          href="/register"
          className="bg-black hover:bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}