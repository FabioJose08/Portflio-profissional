import type { Achievement, ContactConfig, Project, Skill } from '../types'

export const profile = {
  name: 'Fábio José',
  age: 18,
  location: 'Pernambuco, Brasil',
  degree: 'Ciência da Computação',
  institution: 'UNIFG',
  period: '3º período',
  status: 'Em busca de oportunidades de estágio',
  interest: 'Desenvolvimento de software e soluções digitais',
  goal: 'Desenvolver software, construir projetos e evoluir como desenvolvedor.',
  about: 'Sou estudante de Ciência da Computação na UNIFG e estou construindo minha trajetória na área de desenvolvimento de software. Busco transformar o conhecimento adquirido na faculdade em projetos práticos e experiências que contribuam para minha evolução como desenvolvedor. Tenho interesse em desenvolver soluções digitais, explorar novas tecnologias e aprimorar constantemente minhas habilidades por meio de projetos e aprendizado contínuo. Atualmente, estou em busca de uma oportunidade de estágio na área de tecnologia, onde possa contribuir, aprender e ganhar experiência profissional.',
}

export const contacts: ContactConfig = {
  github: 'https://github.com/FabioJose08',
  linkedin: 'https://www.linkedin.com/in/f%C3%A1bio-jos%C3%A9-aa9693370/',
  instagram: 'https://www.instagram.com/fabinho8_/',
  email: 'fabinho0802@gmail.com',
}

export const projects: Project[] = [
  {
    id: 'lagoaeletros', name: 'LAGOA ELETROS', category: 'E-commerce · Projeto real',
    summary: 'Aplicação de e-commerce desenvolvida para uma loja real de eletrônicos, com catálogo de produtos, área do cliente e painel administrativo integrado ao Firebase.',
    description: 'O Lagoa Eletros é uma aplicação web completa desenvolvida para uma loja de eletrônicos de Lagoa do Carro, Pernambuco. O sistema oferece uma experiência para os clientes consultarem produtos, categorias, marcas e promoções, além de disponibilizar uma área administrativa independente para gerenciar o funcionamento da loja. A aplicação conta com integração ao Firebase para autenticação, armazenamento e gerenciamento dos dados, permitindo que as informações administradas sejam refletidas na experiência dos clientes.',
    objective: 'Desenvolver uma solução digital para modernizar a apresentação da loja e facilitar o gerenciamento de produtos, estoque, promoções e pedidos.',
    features: [
      'Catálogo dinâmico de produtos',
      'Pesquisa, filtros e navegação por categorias',
      'Cadastro, autenticação e área do cliente',
      'Carrinho de compras e favoritos',
      'Painel administrativo independente',
      'Gerenciamento de produtos, preços, imagens e estoque',
      'Gerenciamento de categorias e marcas',
      'Cadastro e controle de promoções',
      'Gerenciamento e acompanhamento de pedidos',
      'Integração com Firebase e atualização dos dados da aplicação',
    ],
    technologies: [
      'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase Authentication',
      'Cloud Firestore', 'Firebase Storage', 'React Router', 'Firebase Hosting',
    ],
    role: 'Desenvolvimento de uma aplicação web para uma loja real, trabalhando na construção das interfaces, organização da experiência do cliente, painel administrativo e integração dos serviços Firebase.',
    status: 'Concluído',
    github: 'https://github.com/FabioJose08/Lagoa-eletros',
    demo: 'https://lagoaeletros.web.app',
  },
  {
    id: 'metrorec', name: 'METROREC', category: 'Simulação · Projeto acadêmico',
    summary: 'Uma simulação de transporte ferroviário inspirada na região metropolitana do Recife.',
    description: 'Projeto acadêmico em Python com interface gráfica em Tkinter. Apresenta linhas, estações e simulação de trens, explorando conceitos de programação e sistemas de transporte.',
    objective: 'Representar visualmente elementos do funcionamento do transporte ferroviário metropolitano.',
    features: ['Visualização de linhas e estações', 'Simulação de trens'],
    technologies: ['Python', 'Tkinter', 'threading', 'urllib'],
    role: 'Projeto acadêmico', status: 'Acadêmico',
    github: 'https://github.com/FabioJose08/Metrorec',
  },
  {
    id: 'frotarec', name: 'FROTAREC', category: 'Logística · Projeto acadêmico',
    summary: 'Planejamento e comparação de rotas para apoiar decisões logísticas.',
    description: 'Projeto acadêmico com proposta de comparar uma rota convencional a uma rota otimizada, usando lógica relacionada ao problema do caixeiro-viajante (TSP).',
    objective: 'Explorar planejamento de percursos e estimativas relacionadas a distância e combustível.',
    features: ['Comparação entre rotas', 'Estimativas de percurso e combustível'],
    technologies: [], role: 'Projeto acadêmico', status: 'Acadêmico',
    github: 'https://github.com/FabioJose08/FrotaRec',
  },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'Programação', description: 'Utilizado em projetos acadêmicos e simulações.' },
  { name: 'Java', category: 'Programação', familiarity: 'Em aprendizado', description: 'Estudando os fundamentos da linguagem.' },
  { name: 'HTML', category: 'Web', description: 'Estruturação de interfaces web.' },
  { name: 'CSS', category: 'Web', description: 'Estilização e apresentação de interfaces.' },
  { name: 'Git & GitHub', category: 'Ferramentas', description: 'Versionamento e organização de código.' },
  { name: 'Lógica de programação', category: 'Fundamentos', description: 'Base para decompor problemas e construir soluções.' },
  { name: 'Desenvolvimento de software', category: 'Fundamentos', description: 'Construção de projetos e soluções digitais.' },
  { name: 'Desenvolvimento de interfaces', category: 'Web', description: 'Criação de interfaces para aplicações.' },
  { name: 'UX Design', category: 'Disciplina da faculdade', description: 'Disciplina cursada na graduação.', icon: 'palette' },
  { name: 'Matemática Computacional Aplicada', category: 'Disciplina da faculdade', description: 'Disciplina cursada na graduação.', icon: 'math' },
  { name: 'Engenharia e Projeto de Software', category: 'Disciplina da faculdade', description: 'Disciplina cursada na graduação.', icon: 'engineering' },
]

export const achievements: Achievement[] = [
  { title: 'Ciência da Computação', description: 'Graduação em andamento na UNIFG · 3º período.', kind: 'education' },
  { title: 'Projetos acadêmicos', description: 'Explorando simulação e planejamento logístico em projetos práticos.', kind: 'project' },
]
