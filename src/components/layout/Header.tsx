import { ShoppingBag, Menu, X } from 'lucide-react';
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
  
  // Estados para controlar as Gavetas (Drawers)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Efeito para travar o scroll da página se QUALQUER menu estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isCartOpen]);

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
          
          {/* Botão do Menu Mobile */}
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

          {/* Links da Direita & Carrinho (Desktop & Mobile) */}
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
            
            {/* Botão para abrir o Carrinho (Funciona no Mobile e no Desktop) */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-brand-dark hover:text-brand-gold transition-colors relative group flex items-center p-2 -mr-2 cursor-pointer"
            >
              <ShoppingBag size={22} strokeWidth={1.2} />
              <span className="absolute top-0 right-0 bg-brand-dark text-brand-light text-[8px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          MODAL DO MENU MOBILE (GAVETA ESQUERDA)
          ========================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="fixed top-0 left-0 w-[85%] max-w-sm h-[100dvh] bg-brand-light z-[70] shadow-2xl flex flex-col md:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-brand-dark/10">
                <img src={logoImg} alt="Raiz & Luz" className="h-10 w-auto" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-brand-dark hover:text-brand-gold transition-colors bg-brand-dark/5 rounded-full"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

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

      {/* ==========================================
          MODAL DO CARRINHO (GAVETA DIREITA)
          ========================================== */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop Escuro para o Carrinho */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[60]"
            />
            
            {/* Gaveta do Carrinho (desliza da DIREITA para a ESQUERDA) */}
            <motion.aside
              initial={{ x: '100%' }} // Começa fora da tela pela direita
              animate={{ x: 0 }}
              exit={{ x: '100%' }} // Volta para a direita ao fechar
              transition={{ type: 'tween', ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="fixed top-0 right-0 w-[90%] max-w-md h-[100dvh] bg-brand-light z-[70] shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Cabeçalho do Carrinho */}
              <div className="flex items-center justify-between p-6 border-b border-brand-dark/10">
                <h2 className="text-[11px] font-sans tracking-[0.25em] uppercase text-brand-dark font-semibold">
                  Sua Sacola
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-brand-dark hover:text-brand-gold transition-colors bg-brand-dark/5 rounded-full"
                  aria-label="Fechar carrinho"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Corpo do Carrinho - Estado Vazio (Empty State Elegante) */}
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark/20 mb-8">
                  <ShoppingBag size={32} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif text-brand-dark mb-4">
                  Sua sacola está vazia
                </h3>
                <p className="text-xs font-sans text-brand-dark/60 tracking-wide mb-10 leading-relaxed max-w-[250px]">
                  Explore nossa coleção exclusiva e encontre a peça perfeita para iluminar sua essência.
                </p>
                
                {/* Botão para continuar comprando */}
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="px-8 py-4 bg-brand-dark text-brand-light text-[10px] font-sans tracking-[0.25em] uppercase hover:bg-brand-gold transition-colors duration-300 w-full"
                >
                  Continuar Explorando
                </button>
              </div>

              {/* Rodapé Fixo do Carrinho (Resumo de valores) */}
              <div className="p-6 border-t border-brand-dark/10 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-brand-dark/60 uppercase tracking-widest text-[10px] font-semibold">
                    Subtotal
                  </span>
                  <span className="text-brand-dark font-serif text-xl">
                    R$ 0,00
                  </span>
                </div>
                <button className="w-full py-4 bg-brand-dark/20 text-brand-dark/50 text-[10px] font-sans tracking-[0.25em] uppercase cursor-not-allowed">
                  Finalizar Compra
                </button>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}