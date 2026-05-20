import { motion } from "motion/react";
import { ChevronDown, Facebook, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../../assets/logo.png";

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
        <img src={logo} alt="Modo Corre" className="h-12 md:h-14 w-auto object-contain" />
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#00d563] transition-colors"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#00d563] transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://wa.me/5515998224881"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#00d563] text-[#00d563] hover:bg-[#00d563] hover:text-[#0a0a0a] px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            WhatsApp
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 pt-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            Alugue uma moto e comece a trabalhar hoje mesmo!
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#00d563] mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Escolha a Modo Corre
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8"
          >
            <p className="text-white font-bold text-base md:text-lg mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              Adquira sua moto com facilidade e sem burocracia
            </p>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Com o Plano de Aquisição da <strong className="text-white">Modo Corre</strong>, você aluga e, ao final do contrato, a moto é sua. Manutenção inclusa, seguro completo e parcelas que cabem no seu bolso.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="https://wa.me/5515998224881?text=Olá!%20Quero%20falar%20com%20o%20Consultor%20Lucas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#00d563] text-white hover:bg-[#00d563] hover:text-[#0a0a0a] px-10 py-4 text-base font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,213,99,0.5)] rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Falar Com Consultor Lucas
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors z-10"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}
