import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Motoboy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f1e]/90 via-[#1a1f1e]/70 to-[#1a1f1e]"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 backdrop-blur-md bg-[#1a1f1e]/80 border-b border-[#00d563]/10"
      >
        <div className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          MODO <span className="text-[#00d563]">CORRE</span>
        </div>
        <div className="hidden md:flex gap-8 text-white/80 font-medium">
          <a href="#services" className="hover:text-[#00d563] transition-all duration-300 relative group">
            Planos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d563] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#fleet" className="hover:text-[#00d563] transition-all duration-300 relative group">
            Motos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d563] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-[#00d563] transition-all duration-300 relative group">
            Diferenciais
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d563] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-[#00d563] transition-all duration-300 relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d563] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            Alugue uma moto e
            <br />
            comece a <span className="text-[#00d563] relative inline-block">
              trabalhar hoje
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-2 left-0 h-1 bg-[#00d563]"
              ></motion.span>
            </span> mesmo!
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Alugue sua moto sem burocracia e sem looooonga fila de aprovação!
            <br />
            Facilitamos o acesso a motos de qualidade para que você possa se concentrar no que realmente importa: trabalhar e prosperar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-10 py-4 text-base font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,213,99,0.5)] rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Alugue Agora
            </a>
            <a
              href="#fleet"
              className="border-2 border-[#00d563]/50 hover:border-[#00d563] text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition-all hover:bg-[#00d563]/10 rounded-lg backdrop-blur-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ver Motos
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
