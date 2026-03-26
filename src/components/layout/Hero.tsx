import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Importando as imagens maravilhosas que você adicionou
import hero0 from '../../assets/hero-0.png';
import hero1 from '../../assets/hero-1.png';

const CAROUSEL_IMAGES = [hero0, hero1];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Hook para rastrear a posição do mouse
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Hook para o Carrossel Automático (Troca a cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const maskSize = isHovered ? 450 : 40; // Aumentei um pouco o círculo para o efeito ser mais dramático

  return (
    <section className="h-screen w-full relative bg-brand-dark overflow-hidden cursor-default">
      
      {/* =========================================================
          CAMADA 1: FUNDO FOSCO (Base Layer)
          ========================================================= */}
      {/* Imagem do Carrossel Fosca */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={CAROUSEL_IMAGES[currentImage]}
          alt="Coleção Raiz & Luz"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} // Crossfade de 1.5s
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay Escuro e Fosco (Efeito matte/vidro escurecido) */}
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px] z-10" />

      {/* Texto da Camada Fosca */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-light px-4 text-center z-10 pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter drop-shadow-lg opacity-80">
          Raiz & Luz
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-sans font-light tracking-wide opacity-80">
          Pequenos detalhes, <span className="font-semibold text-white">grande presença.</span>
        </p>
      </div>

      {/* =========================================================
          CAMADA 2: MÁSCARA CLARA (Reveal Layer)
          ========================================================= */}
      <motion.div
        className="absolute inset-0 z-20 overflow-hidden pointer-events-none"
        animate={{
          clipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
      >
        {/* Imagem do Carrossel Clara e Vibrante */}
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={CAROUSEL_IMAGES[currentImage]}
            alt="Coleção Raiz & Luz Vibrante"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay ultra leve só para garantir a leitura do texto brilhante */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Texto da Camada Brilhante */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-light px-4 text-center">
          <h1 
            className="text-6xl md:text-8xl font-serif font-bold tracking-tighter cursor-pointer hover:scale-105 transition-transform duration-700 pointer-events-auto drop-shadow-2xl text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Raiz & Luz
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-sans font-light tracking-wide drop-shadow-lg text-white">
            Descubra a sua <span className="font-semibold text-brand-gold">verdadeira essência.</span>
          </p>
        </div>
      </motion.div>

    </section>
  );
}