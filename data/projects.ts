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
];