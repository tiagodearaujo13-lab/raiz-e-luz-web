import { ShoppingBag, Menu } from 'lucide-react';
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
  const isScrolled = useScroll(50);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-brand-light/95 backdrop-blur-xl py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Menu Mobile */}
        <button className="md:hidden text-brand-dark hover:text-brand-gold transition-colors">
          <Menu size={24} strokeWidth={1.2} />
        </button>

        {/* Links da Esquerda */}
        <nav className="hidden md:flex items-center justify-start gap-10 w-1/3">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-dark/80 hover:text-brand-dark transition-colors"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Logo Centralizada (Pura e Limpa) */}
        <a href="#" className="w-1/3 flex justify-center items-center">
          {/* Aumentei ligeiramente de h-12 para h-14 pois SVGs costumam ter margens internas menores */}
          <img 
            src={logoImg} 
            alt="Raiz & Luz" 
            className="h-12 md:h-14 w-auto object-contain drop-shadow-sm" 
          />
        </a>

        {/* Links da Direita & Carrinho */}
        <div className="flex items-center justify-end gap-10 w-1/3">
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-dark/80 hover:text-brand-dark transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <button className="text-brand-dark hover:text-brand-gold transition-colors relative group flex items-center">
            <ShoppingBag size={20} strokeWidth={1.2} />
            <span className="absolute -top-1.5 -right-2 bg-brand-dark text-brand-light text-[8px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}