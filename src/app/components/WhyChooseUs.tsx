import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Renato",
    age: "32 anos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    text: "\"A Modo Corre facilitou meu trabalho! Agora tenho uma moto sempre revisada e segura para rodar.\""
  },
  {
    name: "Rafael M",
    age: "32 anos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    text: "\"O atendimento é rápido e transparente. Consegui alugar sem burocracia e comecei a trabalhar no mesmo dia!\""
  },
  {
    name: "João Paulo",
    age: "28 anos",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150",
    text: "\"Fechei o plano de aquisição e, em poucos meses, já estou perto de ter minha própria moto. Recomendo!\""
  }
];

const locations = [
  {
    name: "Mato Grosso",
    cities: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
    featured: false
  },
  {
    name: "São Paulo",
    cities: ["Campinas", "Sorocaba", "São José do Rio Preto"],
    featured: true
  }
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
            <p className="text-white/60 uppercase tracking-[0.3em] text-xs md:text-sm mb-4 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Veja O Que Nossos Membros Dizem
            </p>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              Depoimentos De Quem Já <span className="text-[#00d563]">Confia Na Modo Corre</span>
            </h2>
            <p className="text-white/50 text-base font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Histórias inspiradoras de membros que transformaram suas vidas na Modo Corre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#1f2827] border border-[#00d563]/20 p-8 rounded-lg hover:border-[#00d563] transition-all duration-300"
              >
                <p className="text-white/80 italic leading-relaxed font-light mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00d563]"
                  />
                  <div>
                    <h4 className="text-white font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>{testimonial.name}</h4>
                    <p className="text-white/50 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{testimonial.age}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5515998224881?text=Olá!%20Quero%20fazer%20parte%20da%20Modo%20Corre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-12 py-5 text-lg font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,213,99,0.6)] rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Seja Você O Próximo!
            </a>
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
            <p className="text-white/60 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Onde Estamos Presentes
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
              Encontre Uma <span className="text-[#00d563]">Modo Corre</span> Perto De Você!
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Atuamos em diversas regiões, com expansão contínua para novos estados e cidades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border p-8 rounded-lg transition-all duration-300 text-center ${
                  location.featured
                    ? "bg-[#252c2b] border-[#00d563] shadow-[0_0_30px_rgba(0,213,99,0.2)]"
                    : "bg-[#1f2827] border-[#00d563]/20 hover:border-[#00d563]"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-5" style={{ fontFamily: 'Orbitron, sans-serif' }}>{location.name}</h3>
                <ul className="space-y-2 mb-6 text-left">
                  {location.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="flex items-center gap-2 text-white/80 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Check className="w-4 h-4 text-[#00d563] flex-shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
                <p className="text-white font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Ver Detalhes!</p>
                <a
                  href="https://wa.me/5515998224881?text=Olá!%20Quero%20falar%20com%20um%20consultor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all hover:scale-[1.02] rounded-lg text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Falar Com Um Consultor
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
