import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

// Importando as imagens (garantindo que estão como .jpg conforme os seus arquivos)
import grid0 from '../assets/grid-0.png';
import grid2 from '../assets/grid-2.png';
import grid3 from '../assets/grid-3.png';
import grid4 from '../assets/grid-4.png';

// Mock do nosso Acervo (Produtos)
const PRODUCTS = [
  { id: 1, sku: 'RL-TXT-01', name: 'Gargantilha Essência', category: 'Texturas', image: grid0 },
  { id: 2, sku: 'RL-PRL-02', name: 'Brinco Gota Dourada', category: 'Pérolas', image: grid2 },
  { id: 3, sku: 'RL-CRT-03', name: 'Corrente Elo Infinito', category: 'Correntes', image: grid3 },
  { id: 4, sku: 'RL-DRD-04', name: 'Anel Solitário', category: 'Dourado', image: grid4 },
];

export function Collections() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-brand-light text-brand-dark pt-32 pb-24 selection:bg-brand-gold selection:text-white">
        {/* Background Noise global (Estética Organic Tech) */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Cabeçalho Cinematográfico */}
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="px-4 py-1 border border-brand-dark/10 rounded-full mb-8"
            >
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-brand-dark/60">
                Portfólio Ativo
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="text-6xl md:text-8xl font-serif tracking-tighter text-brand-dark mb-6"
            >
              O <span className="italic text-brand-gold">Acervo.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="text-sm font-sans font-light tracking-wide text-brand-dark/60 max-w-md"
            >
              Explore nossos artefatos funcionais. Cada peça é curada clinicamente para realçar a sua identidade através do atendimento exclusivo.
            </motion.p>
          </div>

          {/* Grid de Produtos (O "Instrumento Digital") */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PRODUCTS.map((product, index) => (
              <motion.article 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="group relative flex flex-col"
              >
                {/* Janela do Produto (Glassmorphism sutil) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-dark/5 rounded-sm mb-6 border border-brand-dark/5">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  />
                  
                  {/* Overlay Escuro Inferior para garantir leitura */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Botão Magnético de Ação (Instagram) - Aparece no Hover no Desktop, sempre visível no Mobile */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:translate-y-4 md:opacity-0 transition-all duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <a 
                      href="https://www.instagram.com/raizeluzacessorios/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center gap-3 w-full py-4 bg-brand-light text-brand-dark rounded-sm overflow-hidden"
                    >
                      {/* O Hover Magnético Dourado */}
                      <div className="absolute inset-0 bg-brand-gold transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-y-100"></div>
                      
                      {/* Ícone Instagram Nativo (Fim do bug) */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-colors duration-500 group-hover:text-white">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>

                      <span className="relative z-10 text-[10px] font-sans tracking-[0.2em] uppercase font-bold transition-colors duration-500 group-hover:text-white">
                        Solicitar no Instagram
                      </span>
                    </a>
                  </div>
                </div>

                {/* Dados do Produto (Estética Clinical Telemetry) */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-brand-dark/40">
                      {product.sku}
                    </span>
                    <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-brand-gold font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif text-brand-dark">
                    {product.name}
                  </h2>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}