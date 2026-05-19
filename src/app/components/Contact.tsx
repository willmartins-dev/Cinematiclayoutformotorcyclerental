import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#ff2a2a] uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Fale Conosco
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            PRONTO PARA
            <br />
            <span className="text-[#ff2a2a]">ACELERAR?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Entre em contato conosco e reserve sua moto. Nossa equipe está pronta
            para te atender.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-5 group bg-[#141414] border border-white/5 p-6 hover:border-[#ff2a2a] transition-all duration-300 rounded-sm">
              <div className="bg-[#ff2a2a] p-4 group-hover:scale-110 transition-transform rounded-sm">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Telefone</h3>
                <p className="text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>+55 (11) 9 9999-9999</p>
                <p className="text-white/40 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Seg - Dom: 24h</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group bg-[#141414] border border-white/5 p-6 hover:border-[#ff2a2a] transition-all duration-300 rounded-sm">
              <div className="bg-[#ff2a2a] p-4 group-hover:scale-110 transition-transform rounded-sm">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>E-mail</h3>
                <p className="text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>contato@modocorre.com.br</p>
                <p className="text-white/40 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Resposta em até 2h</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group bg-[#141414] border border-white/5 p-6 hover:border-[#ff2a2a] transition-all duration-300 rounded-sm">
              <div className="bg-[#ff2a2a] p-4 group-hover:scale-110 transition-transform rounded-sm">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Endereço</h3>
                <p className="text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Av. Paulista, 1000</p>
                <p className="text-white/40 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>São Paulo - SP, 01310-100</p>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/5 p-8 mt-6 rounded-sm">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Horário de Funcionamento</h3>
              <div className="space-y-3 text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="text-[#ff2a2a] font-semibold">24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado - Domingo</span>
                  <span className="text-[#ff2a2a] font-semibold">24 horas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#141414] border border-white/5 p-8 rounded-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#ff2a2a] transition-colors rounded-sm font-light placeholder:text-white/30"
                  placeholder="Seu nome"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#ff2a2a] transition-colors rounded-sm font-light placeholder:text-white/30"
                  placeholder="seu@email.com"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#ff2a2a] transition-colors rounded-sm font-light placeholder:text-white/30"
                  placeholder="(11) 99999-9999"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#ff2a2a] transition-colors resize-none rounded-sm font-light placeholder:text-white/30"
                  placeholder="Conte-nos sobre sua necessidade..."
                  style={{ fontFamily: 'Inter, sans-serif' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff2a2a] hover:bg-[#ff1a1a] text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,42,42,0.4)] rounded-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
