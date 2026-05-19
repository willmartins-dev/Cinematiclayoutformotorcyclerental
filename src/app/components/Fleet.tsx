import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gauge, Calendar, Banknote } from "lucide-react";
import planoSeminova from "@/assets/plano-seminova.jpg";
import planoZeroKm from "@/assets/plano-zero-km.jpg";
import planoSeminovaPlus from "@/assets/plano-seminova-plus.jpg";

const plans = [
  {
    name: "AQUISIÇÃO SEMINOVA",
    category: "SEMINOVA",
    image: planoSeminova,
    km: "Moto de 5 a 32 mil km",
    contract: "26 meses de contrato",
    price: "R$ 419,23/semana",
    featured: false,
  },
  {
    name: "AQUISIÇÃO ZERO KM",
    category: "ZERO KM",
    image: planoZeroKm,
    km: "Moto de 0 a 5 mil km",
    contract: "30 meses de contrato",
    price: "R$ 436,66/semana",
    featured: true,
  },
  {
    name: "AQUISIÇÃO SEMINOVA +32MIL",
    category: "SEMINOVA +",
    image: planoSeminovaPlus,
    km: "Moto acima de 32 mil km",
    contract: "24 meses de contrato",
    price: "R$ 419,23/semana",
    featured: false,
  },
];

export function Fleet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="fleet" className="relative py-24 md:py-36 bg-[#243347]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#22c55e] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nossos Planos
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            ESCOLHA SEU
            <br />
            <span className="text-[#22c55e]">PLANO</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Opções flexíveis para você começar a trabalhar hoje mesmo com a moto ideal para o seu perfil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative bg-[#1e2d42] border overflow-hidden transition-all duration-500 rounded-sm
                ${plan.featured
                  ? "border-[#22c55e] scale-105 shadow-[0_0_40px_rgba(34,197,94,0.25)] z-10"
                  : "border-white/5 hover:border-[#22c55e]"
                }`}
            >
              {/* Most Popular Badge */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 bg-[#22c55e] text-white text-center text-xs font-bold uppercase tracking-widest py-2 z-20" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Mais Popular
                </div>
              )}

              {/* Image Container */}
              <div className={`relative overflow-hidden ${plan.featured ? "h-56 mt-8" : "h-56"}`}>
                <ImageWithFallback
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2d42] via-[#192334]/60 to-transparent"></div>

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm ${plan.featured ? "bg-[#22c55e]" : "bg-[#22c55e]/80"}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {plan.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`font-black text-white mb-5 leading-tight ${plan.featured ? "text-xl" : "text-lg"}`} style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.01em' }}>
                  {plan.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white/70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Gauge className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                    <span>{plan.km}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Calendar className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                    <span>{plan.contract}</span>
                  </div>
                  <div className="flex items-center gap-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Banknote className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                    <span className="text-[#22c55e] text-lg">{plan.price}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <button
                    className={`w-full font-bold uppercase text-sm tracking-wider transition-all rounded-sm py-3 px-6
                      ${plan.featured
                        ? "bg-[#22c55e] hover:bg-[#16a34a] text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                        : "border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-white"
                      }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Contratar Agora
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
