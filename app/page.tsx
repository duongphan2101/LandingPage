import { Contact } from "@/components/Contact";
import { DemoVideo } from "@/components/DemoVideo";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Specs } from "@/components/Specs";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">

      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <DemoVideo />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      
    </div>
  );
}