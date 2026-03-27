import { Header } from '../components/layout/Header';
import { Hero } from '../components/layout/Hero';
import { FeaturedGrid } from '../components/layout/FeaturedGrid';
import { Testimonials } from '../components/layout/Testimonials';
import { About } from '../components/layout/About'
import { Benefits } from '../components/layout/Benefits';

import { Footer } from '../components/layout/Footer';


export function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        
        <FeaturedGrid />
        
        <About />

        <Benefits />
        
        <Testimonials />
        
      </main>

      <Footer />
    </>
  );
}