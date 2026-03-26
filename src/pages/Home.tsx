import { Header } from '../components/layout/Header';
import { Hero } from '../components/layout/Hero';
import { FeaturedGrid } from '../components/layout/FeaturedGrid';

export function Home() {
  return (
    <>
      {/* O Header fica fixo por cima de tudo */}
      <Header />
      
      <main>
        {/* A sessão do Hero com o efeito do mouse */}
        <Hero />
        <FeaturedGrid />
        
      </main>
    </>
  );
}