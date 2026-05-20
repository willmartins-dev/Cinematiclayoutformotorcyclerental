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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              Sem Objetivo E Menos Compromisso
            </h2>
            <h3 className="text-2xl md:text-4xl text-[#00d563] font-bold mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Plano De Aquisição Modo Corre
            </h3>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Através do nosso plano, ao final de <strong className="text-[#00d563]">24 meses de aluguel</strong> você recebe a moto na sua casa! Ou escolha o momento ideal para compra com as facilidades que oferecemos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-3 bg-[#252c2b] p-5 rounded-lg border border-[#00d563]/30"
              >
                <Check className="w-6 h-6 text-[#00d563] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Sem burocracia</h4>
                  <p className="text-white/60 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Processo rápido e simples</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3 bg-[#252c2b] p-5 rounded-lg border border-[#00d563]/30"
              >
                <Check className="w-6 h-6 text-[#00d563] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Flexibilidade total</h4>
                  <p className="text-white/60 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Compre quando quiser</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-3 bg-[#252c2b] p-5 rounded-lg border border-[#00d563]/30"
              >
                <Check className="w-6 h-6 text-[#00d563] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Moto garantida</h4>
                  <p className="text-white/60 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Após 24 meses é sua!</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-12 py-5 text-lg font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,213,99,0.6)] rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Quero Saber Mais
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
