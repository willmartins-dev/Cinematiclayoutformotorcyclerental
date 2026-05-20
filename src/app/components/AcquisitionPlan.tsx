import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Clock, Wrench, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    text: "Ao final do contrato, a moto é sua — sem burocracia.",
  },
  {
    icon: Wrench,
    text: "Manutenção preventiva por nossa conta durante todo o período.",
  },
  {
    icon: ShieldCheck,
    text: "Sem consulta ao SPC/SERASA. Sem entrada. Sem surpresas.",
  },
];

export function AcquisitionPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0f1513] to-[#1a1f1e]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#1f2827] border-2 border-[#00d563] rounded-2xl shadow-[0_0_40px_rgba(0,213,99,0.2)] overflow-hidden">

            {/* Topo */}
            <div className="px-10 md:px-16 pt-12 pb-10 text-center border-b border-[#00d563]/20">
              <p className="text-[#00d563] uppercase tracking-[0.35em] text-xs font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Seu Objetivo É Nosso Compromisso
              </p>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
                Plano De Aquisição <span className="text-[#00d563]">Modo Corre</span>
              </h2>
              <p className="text-white/60 text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Alugue sua moto para trabalhar e, ao final do contrato, ela é sua.
                Parcelas acessíveis, suporte completo e zero burocracia.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#00d563]/20">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="flex items-start gap-4 px-8 py-8"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00d563]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00d563]" strokeWidth={1.5} />
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="px-10 md:px-16 py-10 text-center border-t border-[#00d563]/20">
              <motion.a
                href="https://wa.me/5515998224881?text=Olá!%20Quero%20falar%20com%20o%20Consultor%20Lucas"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="inline-flex items-center gap-3 bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,213,99,0.5)] rounded-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Falar com Consultor Lucas
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
