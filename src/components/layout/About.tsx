import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Importando as imagens
import sobre0 from '../../assets/sobre-0.png';
import sobre1 from '../../assets/hero-0.png';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Setup para o container principal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Lógica da Máscara (Lanterna) para as imagens
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const maskSize = isHovered ? 300 : 0;

  // Texto do Manifesto dividido para animação staggered
  const manifestoTitle = "A essência não se fabrica.".split(" ");
  const manifestoSubtitle = "Ela se ilumina.".split(" ");

  return (
    <section 
      id="sobre" 
      ref={containerRef}
      className="relative py-32 md:py-48 bg-brand-dark text-brand-light overflow-hidden"
    >
      {/* Background Noise sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Lado Esquerdo: O Manifesto (Tipografia Dramática) */}
        <motion.div 
          style={{ y: yText }}
          className="lg:w-1/2 flex flex-col"
        >
          <div className="mb-8">
            <h2 className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold mb-6 font-semibold flex items-center gap-4">
              <span className="w-12 h-[1px] bg-brand-gold/50"></span>
              Nossa História
            </h2>
            
            <h3 className="text-4xl md:text-6xl font-serif leading-tight mb-2">
              {manifestoTitle.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h3>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight italic text-brand-gold">
              {manifestoSubtitle.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: (manifestoTitle.length * 0.1) + (index * 0.1), ease: [0.33, 1, 0.68, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="space-y-6 text-sm md:text-base font-sans text-brand-light/70 font-light leading-relaxed max-w-lg"
          >
            <p>
              Nascida da visão de uma mulher trabalhadora e empreendedora, a Raiz & Luz não é apenas uma curadoria de semijoias. É a materialização de um ideal: o de que o luxo verdadeiro reside na autenticidade e nos detalhes que nos tornam únicas.
            </p>
            <p>
              Iniciamos nossa jornada com uma crença simples. Acreditamos que cada peça deve ser um artefato funcional de elegância, projetado com precisão clínica para realçar, e não ofuscar, a beleza natural de quem a usa.
            </p>
            <p className="pt-4 border-t border-brand-light/10 mt-6 font-medium text-brand-light/90">
              Mais do que acessórios. Uma extensão da sua identidade.
            </p>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Janela Cinematográfica (Máscara Dinâmica) */}
        <motion.div 
          style={{ y: yImage }}
          className="lg:w-1/2 w-full aspect-[4/5] relative rounded-sm overflow-hidden border border-brand-light/10"
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Imagem de Fundo (Escurecida e Dessaturada - sobre-0.jpg) */}
          <div className="absolute inset-0 w-full h-full bg-brand-dark">
            <img 
              src={sobre0} 
              alt="Nossa Origem" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[80%] transition-transform duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-brand-dark/30 mix-blend-multiply" />
          </div>

          {/* Máscara de Revelação (Nítida, Brilhante - sobre-1.jpg) */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              clipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.4 }}
          >
            <img 
              src={sobre1} 
              alt="Detalhes Raiz & Luz" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Badge flutuante */}
          <div className="absolute bottom-8 right-8 z-20 pointer-events-none mix-blend-difference text-white text-right">
             <p className="text-[9px] font-mono tracking-[0.3em] uppercase opacity-70 mb-1">Fundação</p>
             <p className="text-2xl font-serif italic">Est. 2025</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}