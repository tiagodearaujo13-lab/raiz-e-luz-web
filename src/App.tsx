import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function App() {
  // Estado para armazenar a posição x e y do mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Estado para saber se o mouse está sobre o texto (para aumentar o círculo)
  const [isHovered, setIsHovered] = useState(false);

  // Hook nativo do React para "ouvir" o movimento do mouse na tela
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Clean up: boa prática de Clean Code para evitar memory leaks
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Tamanho do círculo: 400px se o mouse estiver no texto, 40px caso contrário
  const maskSize = isHovered ? 400 : 40;

  return (
    <main className="h-screen w-full relative bg-brand-light flex items-center justify-center overflow-hidden cursor-default">
      
      {/* CAMADA DE FUNDO (Background Off-white, Texto Escuro) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-dark px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">
          Raiz & Luz
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-sans font-light tracking-wide">
          Pequenos detalhes, <span className="font-semibold text-brand-green">grande presença.</span>
        </p>
      </div>

      {/* CAMADA DE MÁSCARA (Background Verde, Texto Claro) */}
      {/* Utilizamos framer-motion para animar a propriedade CSS clip-path de forma suave e otimizada via GPU */}
      <motion.div
        className="absolute inset-0 bg-brand-green flex flex-col items-center justify-center text-brand-light px-4 text-center"
        animate={{
          clipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
      >
        <h1 
          className="text-6xl md:text-8xl font-serif font-bold tracking-tighter cursor-pointer hover:scale-105 transition-transform duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Raiz & Luz
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-sans font-light tracking-wide">
          Descubra a sua <span className="font-semibold text-brand-gold">verdadeira essência.</span>
        </p>
      </motion.div>

    </main>
  );
}