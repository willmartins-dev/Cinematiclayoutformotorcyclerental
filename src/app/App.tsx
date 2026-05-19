import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Fleet } from "./components/Fleet";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
