import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Bike, Award, ShieldCheck, Phone, FileCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: Bike,
    title: "Planos De Locação",
    description: "SEM CONSULTA A SPC E SERASA, negociação facilitada."
  },
  {
    icon: Award,
    title: "Planos De Aquisição",
    description: "você aluga por um tempo e ao final do contrato a moto é sua. Sem burocracia."
  },
  {
    icon: ShieldCheck,
    title: "Proteção Para Você",
    description: "Proteção para sua moto e segurança para sua família."
  },
  {
    icon: Phone,
    title: "Assistência Via Central De Atendimento",
    description: "Fale com nossa central pelo WhatsApp ou 0800 065 0101."
  },
  {
    icon: FileCheck,
    title: "Sem Impostos",
    description: "Durante o contrato, nada de IPVA ou licenciamento."
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Foque no trabalho, a manutenção preventiva é por nossa conta. Incluso trocas de óleo e revisão do motor."
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            Mais Do Que Aluguel: <span className="text-[#00d563]">Suporte Completo</span>
            <br />
            Para Quem Vive Sobre Duas Rodas.
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-4xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Na Modo Corre você não aluga apenas uma moto. Junto com o aluguel você usufrui de amplos benefícios que te trazem conforto e segurança para trabalhar. Além disso, temos planos onde você pode se tornar dono da motocicleta sem burocracia e sem precisar ter o nome limpo. Nós cuidamos de <span className="text-[#00d563]">tudo pra você!</span>
          </p>
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

        <div className="text-center mt-16">
          <a
            href="https://wa.me/5515998224881?text=Olá!%20Quero%20falar%20com%20um%20consultor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-12 py-5 text-lg font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,213,99,0.6)] rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Falar Com Um Consultor
          </a>
        </div>
      </div>
    </section>
  );
}
