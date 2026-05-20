import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5515998224881?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20aluguel%20de%20motos"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1f2827] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#00d563]/20">
        Fale Conosco!
      </span>
    </a>
  );
}
