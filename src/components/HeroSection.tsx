import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import mockupImg from '../assets/images/mockup_bundle_geografia.png';
import heroParchmentMapBg from '../assets/images/hero_parchment_map_1786305324448.jpg';

interface HeroSectionProps {
  onCtaClick: () => void;
  onExploreLibraryClick: () => void;
  isUnlocked: boolean;
}

export default function HeroSection({ onCtaClick, onExploreLibraryClick, isUnlocked }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center pt-8 md:pt-14 pb-12 md:pb-20 overflow-hidden bg-stone-100"
    >
      {/* Ancient Burnt Parchment Paper with World Map Silhouette Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={heroParchmentMapBg} 
          alt="Papel antigo queimado com silhueta do mapa-múndi de fundo" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-95 filter contrast-105 saturate-105 mix-blend-multiply"
        />
        {/* Subtle soft gradient overlay so text remains 100% crisp and readable */}
        <div className="absolute inset-0 bg-radial from-white/70 via-white/40 to-amber-950/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90 pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 xs:px-6 md:px-12 text-center space-y-4 xs:space-y-5 md:space-y-6 z-10 flex flex-col items-center">
        
        {/* 1. Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto px-0.5"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-display leading-[1.12] drop-shadow-xs text-slate-950">
            Dê <span className="text-[#00A82D] font-black underline decoration-[#00A82D]/30">Aulas de Geografia</span> Que <span className="text-[#00A82D] font-black underline decoration-[#00A82D]/30">Prendem os Alunos</span> do Início ao Fim.
          </h1>
        </motion.div>

        {/* 2. Mockup Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto my-2"
        >
          <img 
            src={mockupImg} 
            alt="Mockup do Material de Geografia" 
            className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* 3. Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-3xl lg:max-w-4xl mx-auto text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl text-slate-900 font-extrabold leading-relaxed px-1"
        >
          Com <span className="text-[#00A82D] font-black">mais de 150 dinâmicas interativas</span> do 6º ao 9º ano e Ensino Médio, você transforma alunos desinteressados em participantes ativos, usando <span className="text-[#00A82D] font-black">materiais simples</span> que você encontra na sua casa ou escola.
        </motion.p>

        {/* 4. Green CTA Button with bullets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px]"
        >
          <motion.button
            onClick={onCtaClick}
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 4px 14px rgba(0, 168, 45, 0.4)", 
                "0 12px 28px rgba(0, 168, 45, 0.7)", 
                "0 4px 14px rgba(0, 168, 45, 0.4)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-full py-4 md:py-5 bg-[#00A82D] hover:bg-[#008A25] text-white rounded-2xl md:rounded-[20px] font-black text-xs xs:text-sm sm:text-base md:text-lg tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 font-display relative overflow-hidden border-2 border-emerald-300/60 shadow-lg shadow-emerald-600/30"
          >
            {/* Elegant glare effect that sweeps across the button */}
            <motion.span 
              className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] filter blur-md"
              animate={{ x: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
            />
            QUERO ACESSAR AGORA
            <ArrowRight className="w-5 h-5 md:w-6 h-6 shrink-0" />
          </motion.button>
          
          <span className="text-[10px] md:text-xs text-slate-700 font-bold mt-3 block">
            ✓ Acesso imediato • Pagamento Único • Garantia de 7 dias
          </span>
        </motion.div>

        {/* 5. Stars and mini testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center gap-1.5 mt-2 select-none"
        >
          <div className="flex gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-800 text-xs sm:text-sm md:text-base font-bold max-w-lg leading-relaxed">
            Junte-se a mais de <strong className="text-[#0B4321] font-extrabold">+1.200 professores</strong> de Geografia que já transformaram suas aulas!
          </p>
        </motion.div>

      </div>
    </section>
  );
}
