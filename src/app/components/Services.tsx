import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Clock, Shield, Award, Headphones } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Alugue e devolva a qualquer hora. Estamos sempre prontos para você."
  },
  {
    icon: Shield,
    title: "Seguro Completo",
    description: "Todas as motos incluem seguro total para sua tranquilidade."
  },
  {
    icon: Award,
    title: "Frota Premium",
    description: "Motos de última geração, revisadas e em perfeito estado."
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Equipe especializada pronta para te ajudar em qualquer momento."
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#ff2a2a] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nossos Diferenciais
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            POR QUE ESCOLHER A
            <br />
            <span className="text-[#ff2a2a]">MODO CORRE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#141414] border border-white/5 p-8 hover:border-[#ff2a2a] transition-all duration-500 rounded-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/0 to-[#ff2a2a]/0 group-hover:from-[#ff2a2a]/5 group-hover:to-[#ff2a2a]/0 transition-all duration-500"></div>
                <div className="relative">
                  <div className="mb-6 relative">
                    <Icon className="w-14 h-14 text-[#ff2a2a] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    <div className="absolute -inset-4 bg-[#ff2a2a]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{service.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
