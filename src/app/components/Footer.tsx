import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f1513] border-t border-[#00d563]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              MODO <span className="text-[#00d563]">CORRE</span>
            </div>
            <p className="text-white/60 mb-8 max-w-md font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              A melhor solução de aluguel de motos para motoboys profissionais.
              Sem burocracia, com suporte completo e motos sempre prontas para trabalhar.
            </p>
            <a
              href="https://wa.me/5515998224881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00d563] hover:bg-[#00ff77] text-[#0a0a0a] px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,213,99,0.4)]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco no WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-[#00d563] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Planos</a></li>
              <li><a href="#fleet" className="text-white/60 hover:text-[#00d563] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Motos</a></li>
              <li><a href="#about" className="text-white/60 hover:text-[#00d563] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Depoimentos</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-[#00d563] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#00d563]/20 pt-8 text-center">
          <p className="text-white/40 font-light text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            BRASIL, FRANQUIAS E PARTICIPAÇÕES LTDA
          </p>
          <p className="text-white/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Copyright © 2024 Modo Corre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
