import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Architecture from "@/components/Architecture";
import PhasedDeployment from "@/components/PhasedDeployment";
import BuiltFor from "@/components/BuiltFor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Architecture />
        <PhasedDeployment />
        <BuiltFor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
