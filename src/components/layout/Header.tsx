import { ShoppingBag, Menu, X } from 'lucide-react'; // <-- Instagram removido daqui
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useScroll } from '../../hooks/useScroll';

// Importação direta do SVG.
import logoImg from '../../assets/logo.svg';

const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Acessórios', href: '#acessorios' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
];

export function Header() {
  const isScrolled = useScroll(100);
  
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para travar o scroll da página quando o menu estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-brand-light/95 backdrop-blur-xl py-3 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 md:h-24 relative z-10">
          
          {/* Botão do Menu Mobile (Hambúrguer) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-brand-dark hover:text-brand-gold transition-colors p-2 -ml-2"
            aria-label="Abrir menu"
          >
            <Menu size={24} strokeWidth={1.2} />
          </button>

          {/* Links da Esquerda (Desktop) */}
          <nav className="hidden md:flex items-center justify-start gap-12 w-1/3">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-dark/80 hover:text-brand-dark transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Logo Centralizada */}
          <a href="#" className="w-1/3 flex justify-center items-center h-full">
            <motion.div
              className={`flex items-center justify-center ${isScrolled ? 'pointer-events-auto' : 'pointer-events-none'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolled ? 1 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <img 
                src={logoImg} 
                alt="Raiz & Luz" 
                className="h-14 md:h-16 w-auto object-contain drop-shadow-sm" 
              />
            </motion.div>
          </a>

          {/* Links da Direita & Carrinho (Desktop) */}
          <div className="flex items-center justify-end gap-12 w-1/3">
            <nav className="hidden md:flex items-center gap-12">
              {NAV_LINKS.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-dark/80 hover:text-brand-dark transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            <button className="text-brand-dark hover:text-brand-gold transition-colors relative group flex items-center p-2 -mr-2">
              <ShoppingBag size={22} strokeWidth={1.2} />
              <span className="absolute top-0 right-0 bg-brand-dark text-brand-light text-[8px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          MODAL DO MENU MOBILE (GAVETA / DRAWER)
          ========================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Escuro (Fundo) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[60] md:hidden"
              aria-hidden="true"
            />

            {/* A Gaveta (Drawer) deslizando da esquerda */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="fixed top-0 left-0 w-[85%] max-w-sm h-[100dvh] bg-brand-light z-[70] shadow-2xl flex flex-col md:hidden overflow-y-auto"
            >
              {/* Cabeçalho da Gaveta */}
              <div className="flex items-center justify-between p-6 border-b border-brand-dark/10">
                <img src={logoImg} alt="Raiz & Luz" className="h-10 w-auto" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-brand-dark hover:text-brand-gold transition-colors bg-brand-dark/5 rounded-full"
                  aria-label="Fechar menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links de Navegação Mobile */}
              <nav className="flex flex-col py-8 px-6 gap-6 flex-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-lg font-serif text-brand-dark hover:text-brand-gold transition-colors border-b border-brand-dark/5 pb-4"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Rodapé do Menu Mobile (Redes Sociais e Contato) com SVG Nativo */}
              <div className="p-6 bg-brand-dark/5 mt-auto">
                <p className="text-[10px] font-sans tracking-widest uppercase text-brand-dark/50 mb-4">
                  Conecte-se
                </p>
                <a 
                  href="https://www.instagram.com/raizeluzacessorios/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-dark hover:text-brand-gold transition-colors w-max"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span className="text-xs tracking-wider">@raizeluzacessorios</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}