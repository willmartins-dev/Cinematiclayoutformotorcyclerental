import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              MODO <span className="text-[#ff2a2a]">CORRE</span>
            </div>
            <p className="text-white/50 mb-8 max-w-md font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              A melhor locadora de motos premium do Brasil. Liberdade, segurança
              e adrenalina em cada viagem.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-[#141414] hover:bg-[#ff2a2a] p-3 transition-all duration-300 rounded-sm border border-white/5 hover:border-[#ff2a2a] group">
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-[#141414] hover:bg-[#ff2a2a] p-3 transition-all duration-300 rounded-sm border border-white/5 hover:border-[#ff2a2a] group">
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-[#141414] hover:bg-[#ff2a2a] p-3 transition-all duration-300 rounded-sm border border-white/5 hover:border-[#ff2a2a] group">
                <Youtube className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-[#141414] hover:bg-[#ff2a2a] p-3 transition-all duration-300 rounded-sm border border-white/5 hover:border-[#ff2a2a] group">
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Serviços</a></li>
              <li><a href="#fleet" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Frota</a></li>
              <li><a href="#about" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Sobre Nós</a></li>
              <li><a href="#contact" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Informações</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Termos de Uso</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Política de Privacidade</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>FAQ</a></li>
              <li><a href="#" className="text-white/50 hover:text-[#ff2a2a] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white/30 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 Modo Corre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
