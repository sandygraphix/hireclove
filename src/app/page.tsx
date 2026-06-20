import Hero from "@/components/hero/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import IndustriesTab from "@/components/sections/IndustriesTab";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Careers from "@/components/sections/Careers";
import Contact from "@/features/contact/Contact";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Process />
      <Services />
      <IndustriesTab />
      {/* Metrics are integrated directly into Hero and About blocks per the HTML logic */}
      <WhyUs />
      <Testimonials />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}