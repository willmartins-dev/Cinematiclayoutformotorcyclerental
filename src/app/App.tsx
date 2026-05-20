import { Hero } from "./components/Hero";
import { AcquisitionPlan } from "./components/AcquisitionPlan";
import { Services } from "./components/Services";
import { Fleet } from "./components/Fleet";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1f1e]">
      <Hero />
      <AcquisitionPlan />
      <Fleet />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
