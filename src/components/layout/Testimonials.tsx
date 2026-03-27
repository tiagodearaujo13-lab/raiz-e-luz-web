import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

// 1. Definição estrita de tipos (TypeScript) para garantir segurança de dados
interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  // Usaremos iniciais se não houver avatar para manter o look limpo
  avatar?: string; 
}

// 2. Mock Data (Dados simulados baseados na estética da marca)
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Alessandra Souza',
    location: 'São Paulo, SP',
    quote: 'A delicadeza do Colar Coração superou minhas expectativas. O brilho do banho de ouro é impressionante e a embalagem demonstra todo o carinho da marca. Sinto-me iluminada!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Beatriz Oliveira',
    location: 'Rio de Janeiro, RJ',
    quote: 'Minha primeira compra de muitas. Os brincos são hipoalergênicos de verdade, não tive nenhuma reação. Acabamento impecável e design super moderno. Amei!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Carla Dias',
    location: 'Belo Horizonte, MG',
    quote: 'Peças atemporais que elevam qualquer look básico. Atendimento excelente e entrega rápida. Recomendo a Raiz & Luz para todas as minhas amigas que buscam sofisticação.',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica de navegação do Slider (Clean Code)
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-brand-light w-full overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Título da Sessão (Estilo Editorial) */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-brand-gold mb-4 font-semibold">
            Brilho Compartilhado
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight max-w-2xl">
            O que dizem as mulheres que escolheram iluminar-se
          </h3>
        </div>

        {/* Container do Slider com AnimatePresence para transições suaves */}
        <div className="relative w-full max-w-5xl bg-white p-10 md:p-16 shadow-sm border border-gray-100 rounded-sm">
          
          {/* Ícone de Aspas Gigante (Decoração de Luxo) */}
          <span className="absolute top-8 left-8 text-8xl font-serif text-brand-gold opacity-10 leading-none">
            “
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col items-center text-center relative z-10"
            >
              {/* Avaliação em Estrelas (Minimalista e Dourada) */}
              <div className="flex gap-1 mb-8 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < current.rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
                ))}
              </div>

              {/* O Depoimento (Destaque em Fonte Serifada Grande) */}
              <blockquote className="text-2xl md:text-3xl font-serif text-brand-dark/90 leading-relaxed mb-10 italic">
                “{current.quote}”
              </blockquote>

              {/* Identificação da Cliente (Avatar/Iniciais e Nome) */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-8 w-full justify-center">
                {current.avatar ? (
                  <img src={current.avatar} alt={current.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-light" />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-brand-gold font-semibold text-xl font-sans border-2 border-gray-100">
                    {current.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                )}
                <div className="text-left">
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-brand-dark font-semibold">
                    {current.name}
                  </p>
                  <p className="text-xs font-sans text-brand-dark/60 tracking-wide mt-1">
                    {current.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botões de Navegação (Minimalistas e Flutuantes) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-8 z-20">
            <button 
              onClick={prevTestimonial}
              className="p-3 bg-white text-brand-dark rounded-full shadow-md border border-gray-100 hover:text-brand-gold hover:scale-110 transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={20} strokeWidth={1.2} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-8 z-20">
            <button 
              onClick={nextTestimonial}
              className="p-3 bg-white text-brand-dark rounded-full shadow-md border border-gray-100 hover:text-brand-gold hover:scale-110 transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={20} strokeWidth={1.2} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}