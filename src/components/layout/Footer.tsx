import logoImg from '../../assets/logo.svg';

export function Footer() {
  return (
    <footer className="bg-brand-light border-t border-gray-200 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Principal do Rodapé (Agora com 4 colunas bem distribuídas) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Coluna 1: Marca e Sobre (Ocupa 4 colunas no desktop) */}
          <div className="flex flex-col items-start md:col-span-4 pr-0 md:pr-12">
            <img src={logoImg} alt="Raiz & Luz" className="h-12 w-auto mb-8 drop-shadow-sm" />
            <p className="text-brand-dark/70 text-xs font-sans font-light leading-relaxed mb-6">
              Pequenos detalhes, grande presença. Descubra a elegância que ilumina a sua verdadeira essência através de nossas peças exclusivas, feitas para brilhar com você.
            </p>
          </div>

          {/* Coluna 2: Navegação (Ocupa 2 colunas) */}
          <div className="flex flex-col items-start md:col-span-2">
            <h4 className="text-[10px] font-sans tracking-[0.25em] uppercase text-brand-gold font-semibold mb-6">
              Navegação
            </h4>
            <nav className="flex flex-col gap-4">
              {['Home', 'Acessórios', 'Sobre', 'Depoimentos'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[11px] font-sans tracking-widest uppercase text-brand-dark/70 hover:text-brand-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Atendimento (Ocupa 2 colunas) */}
          <div className="flex flex-col items-start md:col-span-2">
            <h4 className="text-[10px] font-sans tracking-[0.25em] uppercase text-brand-gold font-semibold mb-6">
              Suporte
            </h4>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-[11px] font-sans tracking-widest uppercase text-brand-dark/70 hover:text-brand-gold transition-colors">FAQ</a>
              <a href="#" className="text-[11px] font-sans tracking-widest uppercase text-brand-dark/70 hover:text-brand-gold transition-colors">Entregas</a>
              <a href="#" className="text-[11px] font-sans tracking-widest uppercase text-brand-dark/70 hover:text-brand-gold transition-colors">Devoluções</a>
              <a href="#" className="text-[11px] font-sans tracking-widest uppercase text-brand-dark/70 hover:text-brand-gold transition-colors">Garantia</a>
            </nav>
          </div>

          {/* Coluna 4: Contato e Newsletter (Ocupa 4 colunas) */}
          <div className="flex flex-col items-start md:col-span-4">
            <h4 className="text-[10px] font-sans tracking-[0.25em] uppercase text-brand-gold font-semibold mb-6">
              Mantenha-se Iluminada
            </h4>
            <p className="text-brand-dark/70 text-xs font-sans font-light mb-4">
              Assine nossa newsletter para receber novidades e coleções exclusivas.
            </p>
            
            {/* Input Minimalista de Newsletter */}
            <form className="w-full flex items-center border-b border-brand-dark/20 pb-2 mb-8 group focus-within:border-brand-gold transition-colors">
              <input 
                type="email" 
                placeholder="Seu endereço de e-mail" 
                className="w-full bg-transparent text-xs outline-none font-sans placeholder:text-brand-dark/40 text-brand-dark"
              />
              <button type="button" className="text-[10px] font-semibold uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors">
                Assinar
              </button>
            </form>

            {/* Redes Sociais com SVGs Nativos (Fim do bug!) */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/raizeluzacessorios/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-brand-dark/10 rounded-full flex items-center justify-center text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="mailto:contato@raizeluz.com.br" 
                className="w-10 h-10 border border-brand-dark/10 rounded-full flex items-center justify-center text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Linha de Direitos Autorais (Copyright) */}
        <div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-sans tracking-widest uppercase text-brand-dark/50">
            &copy; {new Date().getFullYear()} Raiz & Luz Acessórios. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[9px] font-sans tracking-widest uppercase text-brand-dark/50 hover:text-brand-gold transition-colors">
              Políticas de Privacidade
            </a>
            <a href="#" className="text-[9px] font-sans tracking-widest uppercase text-brand-dark/50 hover:text-brand-gold transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}