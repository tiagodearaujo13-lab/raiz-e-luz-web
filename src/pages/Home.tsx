import { Header } from '../components/layout/Header';
import { Hero } from '../components/layout/Hero';
import { FeaturedGrid } from '../components/layout/FeaturedGrid';
import { Testimonials } from '../components/layout/Testimonials';
import { Footer } from '../components/layout/Footer';
import { Benefits } from '../components/layout/Benefits';


export function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <FeaturedGrid />
        <Benefits />
        <Testimonials />
        
      </main>

      <Footer />
    </>
  );
}