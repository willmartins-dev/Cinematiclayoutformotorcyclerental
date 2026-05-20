import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Lucas Silva",
    location: "Moto Grosso",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    text: "A modo Corre facilitou completamente minha jornada como entregador. Com a moto que aluguei, consigo fazer mais entregas e aumentar minha renda sem me preocupar com manutenção!",
    rating: 5
  },
  {
    name: "Maria Santos",
    location: "São Paulo",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    text: "O atendimento é excelente e o processo de aluguel muito rápido. Recomendo para todos que precisam de uma moto confiável para trabalhar.",
    rating: 5
  },
  {
    name: "João Pedro",
    location: "Brasília",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    text: "Trabalho com entregas há 3 anos e a Modo Corre oferece as melhores condições. Moto sempre em dia e suporte quando preciso!",
    rating: 5
  }
];

const locations = [
  { name: "Mato Grosso", available: true },
  { name: "São Paulo", available: true },
  { name: "Brasília", available: true },
  { name: "Outros", link: "Ver Detalhes" }
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* Depoimentos */}
      <section id="about" className="relative py-24 md:py-36 bg-[#1a1f1e]">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              Veja O Que Nossos Membros Dizem
              <br />
              <span className="text-[#00d563]">Depoimentos De Quem Já Confia Na Modo Corre</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#1f2827] border border-[#00d563]/20 p-8 rounded-lg hover:border-[#00d563] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#00d563]"
                  />
                  <div>
                    <h4 className="text-white font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>{testimonial.name}</h4>
                    <p className="text-white/50 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00d563] text-[#00d563]" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onde Estamos */}
      <section className="relative py-24 md:py-36 bg-[#0f1513]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[#00d563] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Onde Estamos Presentes
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              Encontre Uma <span className="text-[#00d563]">Modo Corre</span> Perto De Você!
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Fique atento as diversas regiões, com internet confirma sobre retorno e locais no momento!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1f2827] border border-[#00d563]/20 p-8 rounded-lg hover:border-[#00d563] transition-all duration-300 text-center"
              >
                <MapPin className="w-12 h-12 text-[#00d563] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{location.name}</h3>
                {location.link && (
                  <button className="mt-4 text-[#00d563] font-semibold hover:underline" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {location.link}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
