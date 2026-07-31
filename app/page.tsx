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
      </main>
      <Footer />
    </>
  );
}
