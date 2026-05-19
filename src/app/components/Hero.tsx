import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "@/assets/logo.png";

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1591259966748-4e4b9916858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmFjaW5nJTIwZGFyayUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzkyMDAwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Motorcycle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#192334]/80 via-[#192334]/60 to-[#192334]"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 backdrop-blur-sm"
      >
        <a href="#">
          <img src={logo} alt="Modo Corre" className="h-10 md:h-12 w-auto object-contain" />
        </a>
        <div className="hidden md:flex gap-8 text-white/80 font-medium">
          <a href="#services" className="hover:text-[#22c55e] transition-all duration-300 relative group">
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22c55e] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#fleet" className="hover:text-[#22c55e] transition-all duration-300 relative group">
            Frota
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22c55e] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-[#22c55e] transition-all duration-300 relative group">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22c55e] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-[#22c55e] transition-all duration-300 relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22c55e] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100vh-100px)] flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#22c55e] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Locadora de Motos Premium
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.03em' }}>
            COMECE A TRABALHAR
            <br />
            <span className="text-[#22c55e]">HOJE MESMO!</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Experimente a adrenalina de pilotar as melhores motos do mercado.
            Segurança, qualidade e liberdade em cada quilômetro.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] rounded-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Alugue Agora
            </a>
            <a
              href="#fleet"
              className="border-2 border-white/30 hover:border-[#22c55e] text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition-all hover:bg-[#22c55e]/10 rounded-sm backdrop-blur-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ver Frota
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.5 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={40} />
        </motion.button>
      </div>
    </section>
  );
}
