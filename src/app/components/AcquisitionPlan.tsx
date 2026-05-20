import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";

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
          className="text-center"
        >
          <div className="bg-[#1f2827] border-2 border-[#00d563] p-10 md:p-14 rounded-2xl shadow-[0_0_40px_rgba(0,213,99,0.2)]">
            <p className="text-white font-semibold text-lg md:text-xl mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Seu Objetivo É Nosso Compromisso.
            </p>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              Plano De Aquisição <span className="text-[#00d563]">Modo Corre</span>
            </h2>
            <div className="max-w-3xl mx-auto mb-10 space-y-3 text-lg md:text-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="text-yellow-400 font-semibold">
                Alugue sua moto para trabalhar e, no final do plano, ela será sua!
              </p>
              <p className="text-white/80 font-light">
                Sem burocracia, com parcelas acessíveis e toda a manutenção por nossa conta.
              </p>
              <p className="text-white/80 font-light">
                👉 Trabalhe, pague o aluguel e conquiste sua moto sem dar entrada.
              </p>
            </div>

            <motion.a
              href="https://wa.me/5515998224881?text=Olá!%20Quero%20falar%20com%20o%20Consultor%20Lucas"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-12 py-5 text-lg font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,213,99,0.6)] rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Falar Com Consultor Lucas
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
