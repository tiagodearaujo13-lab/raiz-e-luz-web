import { ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';

// Importação direta do SVG. O Vite otimiza isso perfeitamente no build.
import logoImg from '../../assets/logo.svg';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Acessórios', href: '#acessorios' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
];

export function Header() {
  // Aumentei o limite do scroll para 100px para garantir que o logo suma
  // completamente enquanto estiver no Hero.
  const isScrolled = useScroll(100);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-brand-light/95 backdrop-blur-xl py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 md:h-24 relative z-10">
        {/* Adicionei h-20 md:h-24 para garantir um contêiner alto e estável para o logo maior */}
        
        {/* Menu Mobile */}
        <button className="md:hidden text-brand-dark hover:text-brand-gold transition-colors">
          <Menu size={24} strokeWidth={1.2} />
        </button>

        {/* Links da Esquerda */}
        <nav className="hidden md:flex items-center justify-start gap-12 w-1/3">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              // Aumentei a fonte para text-[11px] e tracking-[0.3em]
              className="group relative text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-dark/80 hover:text-brand-dark transition-colors"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Logo Centralizada (Pura e Limpa, com Visibilidade Condicional via Framer Motion) */}
        <a href="#" className="w-1/3 flex justify-center items-center h-full">
          {/* Envolvi em motion.div para a animação suave de opacidade */}
          <motion.div
            className={`flex items-center justify-center ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Aumentei o tamanho do logo para h-14 md:h-16 */}
            <img 
              src={logoImg} 
              alt="Raiz & Luz" 
              className="h-14 md:h-16 w-auto object-contain drop-shadow-sm" 
            />
          </motion.div>
        </a>

        {/* Links da Direita & Carrinho */}
        <div className="flex items-center justify-end gap-12 w-1/3">
          <nav className="hidden md:flex items-center gap-12">
            {NAV_LINKS.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Aumentei a fonte para text-[11px] e tracking-[0.3em]
                className="group relative text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-dark/80 hover:text-brand-dark transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <button className="text-brand-dark hover:text-brand-gold transition-colors relative group flex items-center">
            <ShoppingBag size={22} strokeWidth={1.2} />
            <span className="absolute -top-1.5 -right-2 bg-brand-dark text-brand-light text-[8px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}