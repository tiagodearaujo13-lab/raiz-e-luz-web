# 🌿 Raiz & Luz - Luxury E-commerce Web Application

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-success)
![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

## 📖 Sobre o Projeto

**Raiz & Luz** é uma plataforma de e-commerce de alto padrão desenvolvida para uma joalheria especializada em semijoias de luxo. O projeto foi arquitetado com foco obsessivo em **Performance, UX/UI (User Experience/Interface)** e **Clean Code**.

A interface foi projetada para transmitir elegância e sofisticação, utilizando um design minimalista, paleta de cores orgânicas (Verde Sálvia, Dourado e Off-white) e micro-interações fluidas (como o efeito _Mask Reveal_ a 60 FPS) que engajam o usuário desde o primeiro segundo.

> **Nota:** Este repositório reflete a arquitetura de frontend e melhores práticas de engenharia de software utilizadas no projeto. Dados sensíveis da cliente, chaves de API e lógicas de negócios privadas estão omitidas e devidamente protegidas em variáveis de ambiente `.env` não versionadas.

## 🚀 Tecnologias e Arquitetura

Este projeto utiliza um ecossistema moderno de desenvolvimento web, garantindo manutenibilidade, escalabilidade e segurança de tipos (Type Safety).

### Frontend Stack

- **Framework:** React.js
- **Build Tool:** Vite (Para Hot Module Replacement instantâneo e build otimizado)
- **Linguagem:** TypeScript (Strict Mode ativado para zero-runtime errors)
- **Estilização:** Tailwind CSS (Utility-first CSS para bundles minúsculos)
- **Animações:** Framer Motion (Animações performáticas baseadas em GPU)
- **Ícones:** Lucide React

### Padrões de Engenharia Aplicados

- **Clean Architecture & Domain-Driven Structure:** Organização de pastas por contexto (Feature-based).
- **Componentização:** Componentes "Burros" (UI Pura) separados de Componentes "Inteligentes" (Lógica/Estado).
- **Performance:** Renderização otimizada, lazy loading (planejado) e controle rígido de re-renders.

## 📂 Estrutura de Diretórios

````text
src/
 ├── assets/        # Mídias estáticas (Imagens editoriais, SVG, Logos)
 ├── components/    # Componentes reutilizáveis isolados
 │    ├── ui/       # Botões, Inputs, Typography (Agnósticos a estado global)
 │    └── layout/   # Header, Footer, Grids de layout
 ├── hooks/         # Custom React Hooks (Encapsulamento de lógica)
 ├── pages/         # Views principais da aplicação (Home, Checkout, Produtos)
 ├── utils/         # Funções puras de formatação e validação
 ├── App.tsx        # Entry point de roteamento e providers
 └── main.tsx       # Root renderer

 Como Executar o Projeto Localmente
Clone o repositório:

Bash
git clone [https://github.com/tiagodearaujo13-lab/raiz-e-luz-web.git](https://github.com/tiagodearaujo13-lab/raiz-e-luz-web.git)
Entre no diretório:

Bash
cd raiz-e-luz-web
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse http://localhost:5173 no seu navegador.

Desenvolvido com excelência técnica por Tiago de Araújo Francisco.


---

### 2. Commitando a Documentação

Agora que temos nossa "vitrine" pronta, vamos salvar e enviar para o repositório. No seu terminal, execute os comandos:

```bash
git add README.md
git commit -m "docs: add professional README with architecture and project scope"
git push origin develop
````
