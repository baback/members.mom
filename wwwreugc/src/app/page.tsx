import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSections from "@/components/FeatureSections";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <FeatureSections />
      <Showcase />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
