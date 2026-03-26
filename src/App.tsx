import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const maskSize = isHovered ? 400 : 40;

  return (
    <>
      {/* O Header foi adicionado aqui. Ele tem z-50, então ficará acima do Hero */}
      <Header />

      <main className="h-[150vh] w-full relative bg-brand-light overflow-hidden cursor-default">
        {/* Usamos h-[150vh] temporariamente apenas para ter rolagem na tela e testarmos o header mudando de cor */}

        {/* EFEITO HERO: Ficará fixo na parte visível enquanto a página rola */}
        <div className="sticky top-0 h-screen w-full">
          {/* CAMADA DE FUNDO */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-dark px-4 text-center">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">
              Raiz & Luz
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-sans font-light tracking-wide">
              Pequenos detalhes, <span className="font-semibold text-brand-green">grande presença.</span>
            </p>
          </div>

          {/* CAMADA DE MÁSCARA */}
          <motion.div
            className="absolute inset-0 bg-brand-green flex flex-col items-center justify-center text-brand-light px-4 text-center pointer-events-none"
            animate={{
              clipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
          >
            {/* Adicionamos pointer-events-auto ao h1 para garantir que o hover funcione mesmo com a máscara não interferindo nos links do header */}
            <h1 
              className="text-6xl md:text-8xl font-serif font-bold tracking-tighter cursor-pointer hover:scale-105 transition-transform duration-500 pointer-events-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Raiz & Luz
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-sans font-light tracking-wide">
              Descubra a sua <span className="font-semibold text-brand-gold">verdadeira essência.</span>
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}