import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Importação das suas imagens
import grid0 from '../../assets/grid-0.png';
import grid2 from '../../assets/grid-2.png';
import grid3 from '../../assets/grid-3.png';
import grid4 from '../../assets/grid-4.png';

// Dados das categorias com diferentes tipos de animação
const COLLECTIONS = [
  {
    id: 1,
    title: 'Texturas',
    subtitle: 'A arte do detalhe',
    image: grid0, 
    hoverImage: grid3, // <-- IMAGEM 2 DO CARROSSEL: Troque para a imagem que deseja revelar no hover
    span: 'md:col-span-2 md:row-span-2', // Card Principal (Gigante)
    effect: 'carousel', // Alterado para o novo efeito de rolagem
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

// NOVO COMPONENTE: Card com efeito de Carrossel ao passar o mouse
function HoverCarouselCard({ collection }: { collection: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`#${collection.title.toLowerCase()}`}
      className={`group relative overflow-hidden bg-brand-dark flex items-end ${collection.span}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contêiner das Imagens com Animação de Deslizamento */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Imagem 1 (Original) - Desliza para a esquerda e some */}
        <motion.img
          src={collection.image}
          alt={collection.title}
          initial={{ x: '0%' }}
          animate={{ x: isHovered ? '-100%' : '0%' }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Curva de aceleração luxuosa (EaseOut)
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Imagem 2 (Hover) - Vem da direita para o centro */}
        <motion.img
          src={collection.hoverImage || collection.image}
          alt={`${collection.title} detalhe`}
          initial={{ x: '100%' }}
          animate={{ x: isHovered ? '0%' : '100%' }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Gradiente escuro sutil para garantir leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Textos do Card */}
      <div className="relative z-10 p-8 md:p-12 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {collection.subtitle}
        </p>
        <h4 className="text-2xl md:text-4xl font-serif text-white">
          {collection.title}
        </h4>
      </div>
    </a>
  );
}

export function FeaturedGrid() {
  return (
    <section id="acessorios" className="py-24 md:py-32 bg-brand-light w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Sessão */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-brand-gold mb-4 font-semibold">
              Coleção Exclusiva
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
              Elegância nos detalhes para o seu dia a dia.
            </h3>
          </div>
          <a 
            href="#todas-as-pecas" 
            className="group flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-brand-dark hover:text-brand-gold transition-colors pb-2"
          >
            Ver todas as peças
            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>

        {/* Grid Editorial Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {COLLECTIONS.map((collection) => {
            
            // Renderiza o novo card com efeito de carrossel
            if (collection.effect === 'carousel') {
              return <HoverCarouselCard key={collection.id} collection={collection} />;
            }

            // Renderiza os outros cards
            const isBrighten = collection.effect === 'brighten';
            
            return (
              <a 
                key={collection.id}
                href={`#${collection.title.toLowerCase()}`}
                className={`group relative overflow-hidden bg-brand-dark flex items-end ${collection.span}`}
              >
                {/* Imagem Padrão com CSS Dinâmico */}
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
                    ${isBrighten ? 'opacity-50 grayscale-[30%] group-hover:opacity-100 group-hover:grayscale-0' : 'group-hover:scale-105'}
                  `}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Conteúdo (Texto) que desliza para cima */}
                <div className="relative z-10 p-8 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-brand-gold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {collection.subtitle}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-serif text-brand-light">
                    {collection.title}
                  </h4>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}