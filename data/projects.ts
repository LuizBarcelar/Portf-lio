export type Project = {
  title: string;
  role: string;
  context: string;
  problem: string;
  solution: string;
  architecture: string;
  impact: string;
  stack: string[];
  type: "Web App" | "Data Product" | "Landing" | "Automation" | "SaaS";
  status: "In Progress" | "Completed" | "Production";
  highlights: string[];
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Chronos Pomodoro",
    role: "Full Stack Developer",

    context:
      "Profissionais de tecnologia enfrentam dificuldades para manter foco contínuo durante longas sessões de desenvolvimento",

    problem:
      "Falta de controle estruturado de tempo gera fadiga mental, perda de produtividade e interrupções frequentes",

    solution:
      "Desenvolvi uma aplicação baseada na técnica Pomodoro para gerenciamento de ciclos de foco e pausas inteligentes",

    architecture:
      "Aplicação Web construída em Next.js com gerenciamento de estado, timers reativos e interface animada orientada à experiência do usuário",

    impact:
      "Melhoria na consistência de foco e organização de rotinas de trabalho profundo (Deep Work)",

    stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],

    type: "Web App",
    status: "In Progress",

    highlights: [
      "Gráficos dinâmicos",
      "Filtros inteligentes",
      "Arquitetura escalável",
    ],

    link: "https://chronos-pomodoro-gamma-one.vercel.app",
    repo: "https://github.com/LuizBarcelar/chronos-pomodoro",
    image: "/projects/chronos-pomodoro.png",
  },

  {
    title: "Arquiteto Premium Portfolio",
    role: "Front-End Developer & UX Designer",

    context:
      "Escritórios de arquitetura de luxo precisam de uma presença digital que transmita exclusividade e profissionalismo imediato.",

    problem:
      "Portfólios genéricos falham em reter a atenção do cliente e não oferecem uma experiência personalizada para mercados internacionais.",

    solution:
      "Desenvolvi um ecossistema bilingue com 'experience loading' de 5 segundos, garantindo que o usuário perceba o valor da marca enquanto os dados são processados.",

    architecture:
      "SPA (Single Page Application) construída com React, utilizando Context API para gerenciamento de estado global de idiomas e hooks customizados para persistência de dados.",

    impact:
      "Navegação fluida entre idiomas (PT/EN) e aumento do engajamento através de sistema de favoritos e interface responsiva de alto padrão.",

    stack: ["React", "JavaScript", "Context API", "CSS3", "React Router"],

    type: "Landing",
    status: "Completed",

    highlights: [
      "Sistema Bilingue Dinâmico",
      "Persistência com SessionStorage",
      "Loading Experience Customizado",
    ],

    link: "https://dnc-luiz-p3hm.vercel.app/",
    repo: "https://github.com/LuizBarcelar/dnc-luiz",
    image: "/projects/portfolio-arquitetura.png", // Lembre de tirar um print e salvar na pasta
  },
];