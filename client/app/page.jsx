import Navbar from "../components/landing/navbar";
import Hero from "../components/landing/hero";
import LogoCloud from "../components/landing/logo-cloud";
import ProductShowcase from "../components/landing/product-showcase";
import Features from "../components/landing/features";
import HowItWorks from "../components/landing/how-it-works";
import Pricing from "../components/landing/pricing";
import FAQ from "../Components/landing/faq";
import CTA from "../Components/landing/cta";
import Footer from "../Components/landing/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 antialiased selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}