
import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Comments from "@/components/Comments";
import TrustedCompanies from "@/components/TrustedCompanies";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Stats />
        <Testimonials />
        <Comments />
        <TrustedCompanies />
        <Blog />
        <CTA />
        <Contact />
        <a
  href="https://wa.me/923024800571"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform"
>
  <FaWhatsapp size={38} />
</a>
      </main>
      <Footer />
    </>
  );
}
