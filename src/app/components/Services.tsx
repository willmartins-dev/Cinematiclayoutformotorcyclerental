import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Shield, Headphones, Phone, FileCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Rastreamento",
    description: "24H CORRENDO A CIDADE, 24H MONITORADA E SEGURA."
  },
  {
    icon: Shield,
    title: "Seguro SP Seguros",
    description: "Não se preocupe com nada. Nós cuidamos de tudo."
  },
  {
    icon: Headphones,
    title: "Suporte Para Você",
    description: "ESTAMOS SEMPRE AQUI PARA AJUDAR NO QUE PRECISAR."
  },
  {
    icon: Phone,
    title: "Assistência via Central De Atendimento",
    description: "Suporte completo para qualquer situação."
  },
  {
    icon: FileCheck,
    title: "Sem Impostos",
    description: "Alugue sem se preocupar com burocracia e taxas."
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Motos sempre revisadas e prontas para rodar."
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#0f1513]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#00d563] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Suporte Completo
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            Mais Do Que Aluguel: <span className="text-[#00d563]">Suporte Completo</span>
            <br />
            Para Quem Vive Sobre Duas Rodas
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#1f2827] border border-[#00d563]/20 p-8 hover:border-[#00d563] transition-all duration-500 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d563]/0 to-[#00d563]/0 group-hover:from-[#00d563]/5 group-hover:to-[#00d563]/0 transition-all duration-500"></div>
                <div className="relative">
                  <div className="mb-6 relative">
                    <Icon className="w-14 h-14 text-[#00d563] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    <div className="absolute -inset-4 bg-[#00d563]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{service.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
