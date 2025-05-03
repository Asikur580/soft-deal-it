import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import Stats from "@/components/sections/stats";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8 text-center text-gray-600">
        <p>© 2024 SOFT DEAL. All rights reserved.</p>
      </footer>
    </div>
  );
}
