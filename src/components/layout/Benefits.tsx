import { motion } from 'framer-motion';

// Extraímos apenas os "caminhos" (paths) dos SVGs para podermos animá-los como se estivessem sendo desenhados à mão.
const BENEFITS = [
  {
    id: 1,
    title: 'Banho de Ouro 18k',
    description: 'Acabamento premium com multicamadas de ouro para brilho duradouro.',
    paths: [
      "M6 3h12l4 6-10 13L2 9Z",
      "M11 3 8 9l4 13 4-13-3-6",
      "M2 9h20"
    ]
  },
  {
    id: 2,
    title: 'Hipoalergênico',
    description: 'Peças livres de níquel, pensadas para o conforto e saúde da sua pele.',
    paths: [
      "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
    ]
  },
  {
    id: 3,
    title: 'Garantia de 1 Ano',
    description: 'Qualidade atestada com garantia total contra defeitos de fabricação.',
    paths: [
      "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    ]
  },
  {
    id: 4,
    title: 'Compra Segura',
    description: 'Ambiente 100% criptografado e primeira troca garantida pela loja.',
    paths: [
      "M7 11V7a5 5 0 0 1 10 0v4",
      "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
    ]
  }
];

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32 w-full overflow-hidden bg-brand-light">
      
      {/* Efeito de Iluminação de Vitrine: Foco de luz dourada suave ao fundo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Sessão: Tipografia alinhada com o FeaturedGrid */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-sans tracking-[0.3em] uppercase text-brand-gold mb-4 font-semibold">
            Padrão de Excelência
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
            A Arte da Joalheria
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div 
              key={benefit.id} 
              initial="rest"
              whileHover="hover"
              animate="rest"
              // Cards com Efeito Vidro Fosco (Glassmorphism Premium)
              className="relative flex flex-col items-center text-center p-10 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-white/60 cursor-default rounded-sm group"
            >
              
              {/* Ícone Animado usando Framer Motion (Line Drawing) */}
              <div className="w-20 h-20 mb-8 flex items-center justify-center relative">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" height="40" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="1" 
                  strokeLinecap="round" strokeLinejoin="round"
                  className="text-brand-gold"
                >
                  {benefit.paths.map((path, i) => (
                    <motion.path
                      key={i}
                      d={path}
                      // Quando a página carrega, ele desenha. Quando passa o mouse, ele redesenha.
                      variants={{
                        rest: { pathLength: 1, opacity: 1, transition: { duration: 1.5, delay: index * 0.2 } },
                        hover: { pathLength: [0, 1], opacity: [0.2, 1], transition: { duration: 1, ease: "easeInOut" } }
                      }}
                    />
                  ))}
                </svg>
              </div>
              
              {/* Textos com a tipografia de luxo */}
              <h4 className="text-xl md:text-2xl font-serif text-brand-dark mb-4 transition-colors duration-300 group-hover:text-brand-gold">
                {benefit.title}
              </h4>
              <p className="text-xs font-sans tracking-wide text-brand-dark/70 leading-relaxed">
                {benefit.description}
              </p>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}