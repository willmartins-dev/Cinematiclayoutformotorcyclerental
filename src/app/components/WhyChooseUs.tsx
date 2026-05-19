import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Motos revisadas e certificadas",
  "Seguro contra terceiros incluso",
  "Manutenção preventiva regular",
  "Equipamentos de segurança fornecidos",
  "Processo de locação 100% digital",
  "Sem burocracia ou taxas escondidas",
  "Entrega e retirada no local",
  "Atendimento personalizado"
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative py-24 md:py-36 bg-[#192334]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 3px)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#22c55e] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Nossa Promessa
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              COMPROMISSO COM A
              <br />
              <span className="text-[#22c55e]">EXCELÊNCIA</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Na Modo Corre, entendemos que cada viagem é única. Por isso, oferecemos
              muito mais do que apenas locação de motos - proporcionamos uma experiência
              completa de liberdade e segurança.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Nossa frota é composta por modelos premium, cuidadosamente selecionados
              e mantidos nos mais altos padrões de qualidade. Cada detalhe é pensado
              para garantir que você tenha a melhor experiência possível.
            </p>
          </motion.div>

          {/* Right Content - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-[#1e2d42] border border-white/5 p-5 hover:border-[#22c55e] transition-all duration-300 rounded-sm group"
              >
                <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-white/70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
