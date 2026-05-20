import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpeg";
import card3 from "../../assets/card3.webp";

const plans = [
  {
    image: card1,
    tag: "Seminova",
    title: "AQUISIÇÃO SEMINOVA + 32 MIL",
    details: [
      "Moto acima de 32 mil km",
      "24 meses de contrato",
    ],
    price: "R$ 419,23",
    period: "por semana",
  },
  {
    image: card2,
    tag: "Zero KM",
    title: "AQUISIÇÃO ZERO KM",
    details: [
      "Moto de 0 a 5 mil km",
      "30 meses de contrato",
    ],
    price: "R$ 436,66",
    period: "por semana",
    featured: true,
  },
  {
    image: card3,
    tag: "Seminova",
    title: "AQUISIÇÃO SEMINOVA + 32 MIL",
    details: [
      "Moto acima de 32 mil km",
      "24 meses de contrato",
    ],
    price: "R$ 419,23",
    period: "por semana",
  },
];

export function Fleet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="fleet" className="relative py-24 md:py-36 bg-[#1a1f1e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#00d563] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nossos Planos
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            Escolha o Plano
            <br />
            <span className="text-[#00d563]">Ideal Para Você</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Planos de aquisição com parcelas acessíveis. Trabalhe, pague e a moto é sua!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative flex flex-col overflow-hidden rounded-lg transition-all duration-500 ${
                plan.featured
                  ? "border-2 border-[#00d563] shadow-[0_0_30px_rgba(0,213,99,0.25)]"
                  : "border border-[#00d563]/20 hover:border-[#00d563]"
              } bg-[#1f2827]`}
            >
              {plan.featured && (
                <div className="bg-[#00d563] text-[#0a0a0a] text-xs font-black uppercase tracking-widest text-center py-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Mais Popular
                </div>
              )}

              {/* Imagem */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2827] via-[#1f2827]/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#00d563] text-[#0a0a0a] text-xs font-bold uppercase px-3 py-1 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {plan.tag}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-base font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {plan.title}
                </h3>

                <div className="space-y-2 mb-6 flex-1">
                  {plan.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/70 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d563] flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>

                {/* Preço */}
                <div className="border-t border-[#00d563]/20 pt-4 mb-5">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>A partir de</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#00d563] text-3xl font-black" style={{ fontFamily: 'Orbitron, sans-serif' }}>{plan.price}</span>
                    <span className="text-white/50 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{plan.period}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5515998224881?text=Olá!%20Tenho%20interesse%20no%20plano:%20${encodeURIComponent(plan.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full px-6 py-3 font-bold text-sm tracking-wider transition-all hover:scale-[1.02] rounded-lg text-center ${
                    plan.featured
                      ? "bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a]"
                      : "border-2 border-[#00d563] text-[#00d563] hover:bg-[#00d563] hover:text-[#0a0a0a]"
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Falar com Consultor
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
