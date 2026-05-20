import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const motorcycles = [
  {
    name: "Honda-cg-160-start",
    description: "Moto confiável, econômica e perfeita para o dia a dia.",
    image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features: ["Baixo consumo", "Manutenção facilitada", "Conforto garantido"],
    cta: "Whatsapp"
  },
  {
    name: "Honda-cg-160-fan",
    description: "Mais conforto e desempenho para quem roda muito.",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features: ["Alta durabilidade", "Econômica", "Perfeita para trabalho"],
    cta: "Whatsapp"
  },
  {
    name: "Suzuki-DK160",
    description: "Autonomia de sobra e confiabilidade pra qualquer rota.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features: ["Motor potente", "Tanque grande", "Confortável"],
    cta: "Whatsapp"
  }
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
          className="text-center mb-20"
        >
          <p className="text-[#00d563] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Escolha Sua Moto
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            Motos Perfeitas Para
            <br />
            <span className="text-[#00d563]">Trabalhar Todo Dia</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Honda e Suzuki: confiáveis, econômicas e preparadas para longas jornadas de trabalho. Escolha a ideal para você!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motorcycles.map((bike, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#1f2827] border border-[#00d563]/20 overflow-hidden hover:border-[#00d563] transition-all duration-500 rounded-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2827] via-[#1a1f1e]/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.01em' }}>{bike.name}</h3>
                <p className="text-white/60 mb-5 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {bike.description}
                </p>

                <div className="space-y-2 mb-6">
                  {bike.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/70 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d563]"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5515998224881?text=Olá!%20Tenho%20interesse%20na%20moto%20${bike.name.replace(/ /g, '%20')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-[#333] hover:border-[#00d563] text-[#333] hover:text-[#00d563] bg-white hover:bg-transparent px-6 py-3 font-semibold text-sm tracking-wider transition-all hover:scale-[1.02] rounded-lg text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {bike.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
