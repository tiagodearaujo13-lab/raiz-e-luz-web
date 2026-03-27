import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Importação das suas imagens
import grid0 from '../../assets/grid-0.png'; // Ajustado para .jpg com base nos seus uploads recentes
import grid2 from '../../assets/grid-2.png';
import grid3 from '../../assets/grid-3.png';
import grid4 from '../../assets/grid-4.png';

// Array de imagens para o Carrossel Automático
const CAROUSEL_IMAGES = [grid0, grid2, grid3, grid4];

const COLLECTIONS = [
  {
    id: 1,
    title: 'Texturas',
    subtitle: 'A arte do detalhe',
    span: 'md:col-span-2 md:row-span-2',
    effect: 'auto-carousel', 
  },
  {
    id: 2,
    title: 'Pérolas',
    subtitle: 'Brilho acetinado',
    image: grid2,
    span: 'md:col-span-1 md:row-span-1',
    effect: 'brighten',
  },
  {
    id: 3,
    title: 'Correntes',
    subtitle: 'Presença e força',
    image: grid3,
    span: 'md:col-span-1 md:row-span-1',
    effect: 'zoom',
  },
  {
    id: 4,
    title: 'Dourado',
    subtitle: 'O clássico atemporal',
    image: grid4,
    span: 'md:col-span-2 md:row-span-1',
    effect: 'brighten',
  },
];

// O Novo Card Automático (Funciona perfeitamente em Mobile e Desktop)
function AutoCarouselCard({ collection }: { collection: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica do Carrossel Automático (Troca a cada 3.5 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.a
      // ATUALIZAÇÃO DO LINK: Agora aponta para a página de coleções!
      href={`/colecoes#${collection.title.toLowerCase()}`}
      className={`group relative overflow-hidden bg-brand-dark flex items-end ${collection.span}`}
      // Animação de entrada na rolagem da tela (ScrollTrigger)
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }} // Curva de inércia premium
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-brand-dark">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={CAROUSEL_IMAGES[currentIndex]}
            alt={`${collection.title} detalhe`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

      <div className="relative z-10 p-8 md:p-12 w-full">
        {/* Indicadores do Carrossel (Pequenos traços mostrando qual imagem está ativa) */}
        <div className="flex gap-2 mb-4 absolute top-8 left-8">
            {CAROUSEL_IMAGES.map((_, idx) => (
                <div key={idx} className={`h-[2px] w-6 transition-all duration-500 ${idx === currentIndex ? 'bg-brand-gold' : 'bg-white/30'}`} />
            ))}
        </div>

        <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2">
          {collection.subtitle}
        </p>
        <h4 className="text-2xl md:text-4xl font-serif text-white">
          {collection.title}
        </h4>
      </div>
    </motion.a>
  );
}

export function FeaturedGrid() {
  return (
    <section id="acessorios" className="py-24 md:py-32 bg-brand-light w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-brand-gold mb-4 font-semibold">
              Coleção Exclusiva
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
              Elegância nos detalhes para o seu dia a dia.
            </h3>
          </motion.div>
          <a 
            // ATUALIZAÇÃO DO LINK PRINCIPAL: Direciona para o roteador
            href="/colecoes" 
            className="group flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-brand-dark hover:text-brand-gold transition-colors pb-2"
          >
            Ver todas as peças
            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {COLLECTIONS.map((collection, index) => {
            if (collection.effect === 'auto-carousel') {
              return <AutoCarouselCard key={collection.id} collection={collection} />;
            }

            const isBrighten = collection.effect === 'brighten';
            
            return (
              <motion.a 
                key={collection.id}
                // ATUALIZAÇÃO DOS LINKS INDIVIDUAIS: Apontando para o Acervo
                href={`/colecoes#${collection.title.toLowerCase()}`}
                className={`group relative overflow-hidden bg-brand-dark flex items-end ${collection.span}`}
                // Efeito ScrollTrigger em todos os cards
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
              >
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
                    ${isBrighten ? 'opacity-50 grayscale-[30%] group-hover:opacity-100 group-hover:grayscale-0' : 'group-hover:scale-105'}
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="relative z-10 p-8 w-full transform transition-transform duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                  <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                    {collection.subtitle}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-serif text-brand-light">
                    {collection.title}
                  </h4>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}