import Navbar from "../Components/landing/navbar";
import Hero from "../Components/landing/hero";
import LogoCloud from "../Components/landing/logo-cloud";
import ProductShowcase from "../Components/landing/product-showcase";
import Features from "../Components/landing/features";
import HowItWorks from "../Components/landing/how-it-works";
import Pricing from "../Components/landing/pricing";
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