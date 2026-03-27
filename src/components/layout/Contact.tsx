import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contato" className="relative py-32 md:py-48 bg-brand-dark overflow-hidden flex items-center justify-center border-t border-brand-light/5">
      
      {/* Background Noise global para eliminar o "chapado" digital */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Indicador de Status (A vibe "Tech/Clinical") */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-brand-light/10 bg-brand-light/5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
          <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-brand-light/80 font-medium">
            Atendimento VIP Disponível
          </span>
        </motion.div>

        {/* Título Monumental */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8 tracking-tight"
        >
          Revele a sua <span className="italic text-brand-gold">verdadeira luz.</span>
        </motion.h2>

        {/* Subtítulo Clean */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-sm md:text-base font-sans text-brand-light/60 max-w-xl mx-auto mb-14 leading-relaxed font-light"
        >
          Acreditamos em uma curadoria exclusiva e em um relacionamento próximo. Como nosso portfólio de alta joalheria é dinâmico, centralizamos nosso atendimento premium em nosso canal oficial.
        </motion.p>

        {/* Botão Call-to-Action Magnético (Micro-Interação de Luxo) */}
        <motion.a 
          href="https://www.instagram.com/raizeluzacessorios/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-4 px-8 py-5 bg-brand-light text-brand-dark rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
        >
          {/* Camada que desliza no Hover (O segredo do botão de grife) */}
          <div className="absolute inset-0 bg-brand-gold transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-x-100"></div>
          
          {/* Ícone Instagram SVG Nativo */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-colors duration-500 group-hover:text-white">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          
          <span className="relative z-10 text-[10px] md:text-xs font-sans tracking-[0.25em] uppercase font-bold transition-colors duration-500 group-hover:text-white">
            Falar com uma Especialista
          </span>
          
          {/* Ícone de Seta animado */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </motion.a>

      </div>
    </section>
  );
}