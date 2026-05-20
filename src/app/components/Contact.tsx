import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Phone, Clock, MapPin, Mail } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-[#1a1f1e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '-0.02em' }}>
            COMERCIAL PARA INVESTIDORES
            <br />
            <span className="text-[#00d563]">E FRANQUIAS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#1f2827] border border-[#00d563]/20 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-6 h-6 text-[#00d563]" />
                <div>
                  <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Website</h3>
                  <a href="https://investfleet.com.br" className="text-[#00d563] hover:underline font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    https://investfleet.com.br/
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-6 h-6 text-[#00d563]" />
                <div>
                  <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Telefone</h3>
                  <p className="text-white/70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>15-99822-4881</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-[#00d563]" />
                <div>
                  <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Horário</h3>
                  <p className="text-white/70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>De segunda a sexta das 08h as 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-[#00d563]" />
                <div>
                  <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Endereço</h3>
                  <p className="text-white/70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Avenida doutor Julio Prestes, 688, Centro, Itapetininga-SP CEP 18200100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#00d563]" />
                <div>
                  <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>E-mail</h3>
                  <a href="mailto:contato@investfleet.com.br" className="text-[#00d563] hover:underline font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    contato@investfleet.com.br
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#00d563]/20">
                <p className="text-white/60 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Instagram: @investfleet
                </p>
              </div>
            </div>


          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1f2827] border border-[#00d563]/20 p-4 rounded-lg h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123456789!2d-47.9876543!3d-23.5912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzI4LjQiUyA0N8KwNTknMTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Modo Corre"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
