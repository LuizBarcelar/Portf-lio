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
    title: "Sales Analytics Dashboard",
    role: "Full Stack Developer",

    context:
      "Empresas possuem dificuldade em visualizar performance comercial em tempo real",

    problem:
      "Análises manuais em planilhas causavam atraso na tomada de decisão",

    solution:
      "Desenvolvi um dashboard interativo com visualização de KPIs em tempo real",

    architecture:
      "Aplicação construída com Next.js consumindo API REST e renderização otimizada",

    impact:
      "Maior visibilidade sobre métricas de vendas",

    stack: ["Next.js", "Recharts", "Tailwind"],

    type: "Data Product",
    status: "In Progress",

    highlights: [
      "Gráficos dinâmicos",
      "Filtros inteligentes",
      "Arquitetura escalável",
    ],

    link: "#",
    repo: "#",
    image: "/projects/dashboard.jpg",
  },
];