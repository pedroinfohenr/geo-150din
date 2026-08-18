import { ShieldCheck, Lock, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 px-6 border-t border-slate-800 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-bold">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#00A82D]" />
            <span>Ambiente 100% Seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00A82D]" />
            <span>Garantia de 7 Dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#00A82D]" />
            <span>Acesso Imediato</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] leading-relaxed text-slate-400 max-w-2xl mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.
        </p>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; {currentYear} Dinâmicas de Geografia. Todos os direitos reservados.</span>
        </div>

      </div>
    </footer>
  );
}
