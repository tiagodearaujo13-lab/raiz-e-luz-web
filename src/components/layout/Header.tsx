import { ShoppingBag, Menu } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

// Como você salvou como logo, certifique-se da extensão (aqui assumi .jpg, mude se for .png)
import logoImg from '../../assets/logo.webp'; 

// Centralizar as rotas em uma constante facilita a manutenção (Clean Code)
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-light/90 backdrop-blur-md py-4 shadow-sm' // Efeito de vidro (Glassmorphism) no scroll
          : 'bg-transparent py-6' // Transparente e um pouco maior no topo
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Menu Mobile (Hamburger) */}
        <button className="md:hidden text-brand-dark hover:text-brand-gold transition-colors">
          <Menu size={24} strokeWidth={1.5} />
        </button>

        {/* Links da Esquerda (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 w-1/3">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-dark hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Logo Centralizada */}
        <a href="#" className="w-1/3 flex justify-center items-center">
          <img 
            src={logoImg} 
            alt="Raiz & Luz" 
            className="h-14 md:h-20 w-auto object-contain mix-blend-multiply" 
            /* mix-blend-multiply esconde fundos brancos/cinzas em logos não transparentes */
          />
        </a>

        {/* Links da Direita & Carrinho (Desktop) */}
        <div className="flex items-center justify-end gap-8 w-1/3">
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-dark hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Ícone de Carrinho Minimalista */}
          <button className="text-brand-dark hover:text-brand-gold transition-colors relative group">
            <ShoppingBag size={22} strokeWidth={1.2} />
            <span className="absolute -top-1 -right-2 bg-brand-green text-brand-light text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-colors">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}