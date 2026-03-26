import { Header } from '../components/layout/Header';
import { Hero } from '../components/layout/Hero';

export function Home() {
  return (
    <>
      {/* O Header fica fixo por cima de tudo */}
      <Header />
      
      <main>
        {/* A sessão do Hero com o efeito do mouse */}
        <Hero />
        
        {/* Adicionei uma div vazia com altura grande só para você conseguir fazer scroll 
            e testar a mudança de cor do Header. Removeremos isso no próximo passo. */}
        <div className="h-screen bg-brand-light flex items-center justify-center">
          <p className="text-brand-dark/50 font-sans tracking-widest uppercase">Próxima sessão em breve</p>
        </div>
      </main>
    </>
  );
}