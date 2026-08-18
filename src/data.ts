import { 
  FAQItem, 
  Testimonial, 
  BonusItem, 
  ProblemCard, 
  SolutionCard, 
  PricingPlan,
  InteractiveMaterial
} from './types';

export const problems: ProblemCard[] = [
  {
    id: 'p1',
    iconName: 'Clock',
    title: 'Sem tempo para preparar',
    description: 'Você passa horas montando atividades de Geografia do zero, toda semana, e ainda assim não dá conta de tudo.'
  },
  {
    id: 'p2',
    iconName: 'Frown',
    title: 'Alunos desmotivados',
    description: 'A turma não engaja com aulas expositivas teóricas e o celular vence a atenção a cada minuto.'
  },
  {
    id: 'p3',
    iconName: 'AlertTriangle',
    title: 'Cobrança da BNCC',
    description: 'Cada nova habilidade de Geografia exige adaptar materiais e provar alinhamento — uma carga extra silenciosa.'
  }
];

export const solutions: SolutionCard[] = [
  {
    id: 's1',
    iconName: 'Sparkles',
    title: 'Engajamento real',
    description: 'Dinâmicas que prendem a atenção e transformam os conceitos geográficos em experiência viva.'
  },
  {
    id: 's2',
    iconName: 'Map',
    title: 'Geografia prática',
    description: 'Jogos, mapas interativos e dinâmicas que tornam fácil o que antes era abstrato.'
  },
  {
    id: 's3',
    iconName: 'Users',
    title: 'Em grupo ou individual',
    description: 'Atividades pensadas para diferentes tamanhos de turma e níveis de habilidade.'
  },
  {
    id: 's4',
    iconName: 'BookOpen',
    title: '100% BNCC',
    description: 'Cada dinâmica vem com a competência e habilidade da BNCC de Geografia já mapeadas.'
  },
  {
    id: 's5',
    iconName: 'Download',
    title: 'Pronto para imprimir',
    description: 'PDFs editáveis, em alta qualidade, prontos para a fotocopiadora ou para o projetor.'
  },
  {
    id: 's6',
    iconName: 'RefreshCw',
    title: 'Atualizações vitalícias',
    description: 'Receba todas as novas dinâmicas que adicionarmos, sem pagar nada a mais. Para sempre.'
  }
];

export const bonuses: BonusItem[] = [
  {
    id: 'b1',
    title: 'Coleção com 30 Planos de Aula Prontos de Geografia (BNCC)',
    description: 'Aulas 100% planejadas passo a passo alinhadas à BNCC. Chega de perder o domingo à noite criando planos do zero.',
    originalPrice: 0.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Planos de Aula Prontos de Geografia',
    illustrationType: 'plans'
  },
  {
    id: 'b2',
    title: '50 Atividades Prontas de Geografia para Imprimir (Word & PDF)',
    description: 'Atividades de fixação e exercícios formatados prontos para fotocopiadora. Economize dezenas de horas de formatação.',
    originalPrice: 0.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Atividades Prontas para Imprimir',
    illustrationType: 'guide'
  },
  {
    id: 'b3',
    title: 'Pacote Completo com 100 Avaliações de Geografia',
    description: 'Provas bimestrais, diagnósticas e atividades avaliativas com critérios de correção e gabaritos oficiais inclusos.',
    originalPrice: 0.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Kit 100 Avaliações de Geografia',
    illustrationType: 'evaluation'
  },
  {
    id: 'b4',
    title: 'Guia do Professor & Planejamento Anual de Geografia BNCC',
    description: 'Planejamento anual estruturado com todas as competências e habilidades de Geografia mapeadas. Cale qualquer cobrança pedagógica com facilidade.',
    originalPrice: 0.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Planejamento de Aulas BNCC',
    illustrationType: 'planning'
  },
  {
    id: 'b5',
    title: 'Coletânea de Jogos Geográficos e Mapas Interativos',
    description: 'Dinâmicas de alto impacto com materiais simples sobre geopolítica, meio ambiente, cartografia e urbanização para encantar seus alunos.',
    originalPrice: 0.00,
    currentPrice: 0.00,
    badge: 'GRÁTIS HOJE',
    imageAlt: 'Jogos Geográficos e Mapas Interativos',
    illustrationType: 'experiments'
  }
];

export const plans: PricingPlan[] = [
  {
    id: 'essencial',
    name: 'Plano Básico',
    badge: '',
    description: 'Acesso básico contendo apenas as 150 dinâmicas de Geografia.',
    originalPrice: 29.90,
    promoPrice: 10,
    cents: '90',
    features: [
      { text: '150 Dinâmicas de Geografia Prontas', included: true },
      { text: 'Conteúdo separado por temas (Cartografia, Biomas, Geopolítica, etc.)', included: true },
      { text: 'Acesso vitalício sem mensalidades', included: true },
      { text: 'Garantia incondicional de 7 dias', included: true },
      { text: '❌ Não inclui +100 avaliações prontas', included: false },
      { text: '❌ Não inclui +30 planos de aula completos', included: false },
      { text: '❌ Não inclui bônus premium exclusivos', included: false }
    ],
    buttonText: 'QUERO O PLANO BÁSICO',
    isPopular: false
  },
  {
    id: 'premium',
    name: 'Plano Completo',
    badge: 'MELHOR OPÇÃO • RECOMENDADO',
    description: 'Acesso total a todo o material + 100 avaliações de Geografia + 30 planos de aula + TODOS os bônus!',
    originalPrice: 79.90,
    promoPrice: 27,
    cents: '90',
    features: [
      { text: '150 Dinâmicas de Geografia Prontas', included: true },
      { text: '+100 Avaliações Prontas (com Gabarito Oficial)', included: true },
      { text: '+30 Planos de Aula Completos (Alinhados à BNCC)', included: true },
      { text: '🎁 Jogos Cartográficos e Mapas Interativos Extras', included: true },
      { text: '🎁 Todos os 5 Bônus Premium Inclusos', included: true },
      { text: '🎁 Atualizações Vitalícias Gratuitas', included: true },
      { text: '🎁 Suporte VIP Prioritário 24/7', included: true },
      { text: 'Acesso imediato e vitalício', included: true },
      { text: 'Garantia incondicional de 7 dias', included: true }
    ],
    buttonText: 'QUERO O PLANO COMPLETO AGORA',
    isPopular: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    stars: 5,
    quote: 'Minhas aulas de Geografia ficaram muito mais organizadas e os alunos começaram a participar muito mais das dinâmicas. Valeu demais.',
    name: 'Prof. Carlos M.',
    role: 'Ensino Fundamental II — SP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80'
  },
  {
    id: 't2',
    stars: 5,
    quote: 'Eu economizo várias horas por semana porque agora tenho dinâmicas e mapas prontos para aplicar em sala.',
    name: 'Profª Juliana A.',
    role: 'Ensino Médio — MG',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80'
  },
  {
    id: 't3',
    stars: 5,
    quote: 'As aulas ficaram muito mais divertidas e interativas. Meus alunos passaram a amar Geografia.',
    name: 'Prof. André S.',
    role: 'Fundamental I e II — BA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'O acesso chega na hora?',
    answer: 'Sim, o acesso é 100% imediato e automático! Assim que a confirmação do pagamento for concluída, você receberá um e-mail com seus dados de acesso exclusivos para baixar todos os arquivos organizados em PDF.'
  },
  {
    id: 'f2',
    question: 'Serve para quais níveis e idades?',
    answer: 'O material foi desenvolvido especificamente para aulas de Geografia do 6º ao 9º ano (Ensino Fundamental II) e Ensino Médio. Todas as dinâmicas, avaliações e jogos são 100% alinhados às diretrizes e competências da BNCC.'
  },
  {
    id: 'f3',
    question: 'É pagamento único ou mensalidade?',
    answer: 'É pagamento único! Você investe apenas uma vez e tem acesso vitalício a todo o conteúdo contratado, incluindo atualizações. Não há nenhuma taxa mensal, anuidade ou cobranças recorrentes adicionais.'
  },
  {
    id: 'f4',
    question: 'Qual a diferença entre o Pacote Básico e o Completo?',
    answer: 'O Pacote Básico inclui o pacote de 150 dinâmicas de Geografia. Já o Pacote Completo (mais recomendado) inclui todas as 150 dinâmicas e adiciona mais 5 bônus premium exclusivos: jogos e mapas extras, 100 avaliações prontas de Geografia, coleções de planos de aula completos, guias de planejamento prático e atividades de fixação.'
  },
  {
    id: 'f5',
    question: 'E se eu não gostar do material?',
    answer: 'Oferecemos uma Garantia Incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o material, basta enviar um e-mail em até 7 dias da sua compra que devolveremos 100% do seu dinheiro investido. Sem burocracia e sem perguntas.'
  }
];

export const materials: InteractiveMaterial[] = [
  {
    id: 'm1',
    title: 'Mapa Mundi em Quebra-Cabeça (Geopolítica)',
    category: 'Cartografia & Geopolítica',
    description: 'Dinâmica interativa de recortar e montar os continentes e fronteiras, identificando blocos econômicos e fusos horários.',
    ageGroup: '6º ao 9º ano',
    bnccCode: 'EF06GE01',
    previewType: 'cell'
  },
  {
    id: 'm2',
    title: 'Jogo dos Biomas e Climas do Brasil',
    category: 'Geografia Física',
    description: 'Jogo de cartas ilustradas com flora, fauna, clima e relevo de cada bioma brasileiro onde os alunos associam e analisam os impactos ambientais.',
    ageGroup: '6º ao 8º ano',
    bnccCode: 'EF07GE11',
    previewType: 'foodchain'
  },
  {
    id: 'm3',
    title: 'Simulador de Relevo e Placas Tectônicas',
    category: 'Geomorfologia',
    description: 'Atividade prática de montagem de curvas de nível, falhas tectônicas e agentes do relevo com maquetes simplificadas.',
    ageGroup: '6º ao 9º ano',
    bnccCode: 'EF06GE05',
    previewType: 'solarsystem'
  },
  {
    id: 'm4',
    title: 'Desafio das Cidades e Urbanização',
    category: 'Geografia Humana',
    description: 'Jogo de planejamento urbano onde os alunos solucionam problemas de mobilidade, sustentabilidade e êxodo rural nas metrópoles.',
    ageGroup: '7º ano ao Ensino Médio',
    bnccCode: 'EF07GE08',
    previewType: 'volcano'
  }
];
