import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gauge, Zap, Calendar } from "lucide-react";

const motorcycles = [
  {
    name: "Sport 1000",
    category: "Esportiva",
    image: "https://images.unsplash.com/photo-1600497934947-23786a93f382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMG1vdG9yY3ljbGUlMjBzdHJlZXQlMjBjaXR5fGVufDF8fHx8MTc3OTIwMDAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    power: "150 HP",
    type: "Alta Performance",
    price: "R$ 450/dia"
  },
  {
    name: "Adventure 800",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1550149550-33b46c745e03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwYWR2ZW50dXJlJTIwdG91cmluZ3xlbnwxfHx8fDE3NzkyMDAwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    power: "95 HP",
    type: "Touring",
    price: "R$ 380/dia"
  },
  {
    name: "Racing Pro",
    category: "Racing",
    image: "https://images.unsplash.com/photo-1758887699085-df8ced535b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0JTIwZ2VhciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzkyMDAwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    power: "180 HP",
    type: "Pista",
    price: "R$ 650/dia"
  }
];

export function Fleet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="fleet" className="relative py-24 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#ff2a2a] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nossa Frota
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            ESCOLHA SUA
            <br />
            <span className="text-[#ff2a2a]">MÁQUINA</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Motos de alta performance, cuidadosamente selecionadas e mantidas
            para oferecer a melhor experiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motorcycles.map((bike, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#141414] border border-white/5 overflow-hidden hover:border-[#ff2a2a] transition-all duration-500 rounded-sm"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/60 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[#ff2a2a] px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {bike.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-5" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.01em' }}>{bike.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Gauge className="w-5 h-5 text-[#ff2a2a]" />
                    <span>{bike.power}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Zap className="w-5 h-5 text-[#ff2a2a]" />
                    <span>{bike.type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Calendar className="w-5 h-5 text-[#ff2a2a]" />
                    <span>Disponível Agora</span>
                  </div>
                </div>

                <div className="flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-white/40 text-sm mb-1 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>A partir de</p>
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{bike.price}</p>
                  </div>
                  <button className="bg-[#ff2a2a] hover:bg-[#ff1a1a] text-white px-6 py-3 font-bold uppercase text-sm tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] rounded-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Reservar
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
