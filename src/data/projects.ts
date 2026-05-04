export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'passebem',
    title: 'PasseBem',
    description: 'Plataforma educacional completa com API REST, aplicativo móvel e integração de pagamentos. Sistema de chat em tempo real, vídeos educacionais e acompanhamento de progresso do aluno.',
    category: 'Educação',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React Native', 'Flutter', 'Socket.io', 'Paystack'],
    features: [
      'API REST com autenticação JWT',
      'Chat em tempo real com WebSocket',
      'Gestão de conteúdos educacionais',
      'Integração com Paystack',
      'Notificações push',
      'Acompanhamento de progresso'
    ],
  },
  {
    id: 'chatmaza',
    title: 'chatMAZA',
    description: 'Assistente de estudo com Inteligência Artificial para ensino secundário moçambicano. Utiliza RAG (Retrieval-Augmented Generation) e Claude AI para fornecer respostas contextualizadas.',
    category: 'IA/Educação',
    technologies: ['Next.js 14', 'MongoDB Atlas', 'Claude AI', 'Python FastAPI', 'RAG', 'OCR'],
    features: [
      'IA conversacional com Claude',
      'Vector Search para busca semântica',
      'Processamento de PDFs e OCR',
      'Autenticação NextAuth',
      'PWA para uso offline',
      'Interface moderna e responsiva'
    ],
  },
  {
    id: 'fams',
    title: 'FAMS - Sistema de Gestão Agrícola',
    description: 'Sistema completo de gestão para agricultores e agronegócios desenvolvido sob iniciativa GIZ. Backend robusto com multi-tenancy e aplicativo mobile offline-first.',
    category: 'Gestão/Agricultura',
    technologies: ['Laravel 8', 'MySQL', 'Ionic', 'Angular', 'Capacitor'],
    features: [
      'Multi-tenancy para múltiplas organizações',
      'Gestão de produtores e compras',
      'Sistema de crédito e controle de stock',
      'App móvel com modo offline',
      'Scanner de código de barras',
      'Geolocalização e mapas',
      'Integração com impressoras Bluetooth',
      'Relatórios Excel e PDF',
      'Dashboards analíticos'
    ],
  },
  {
    id: 'juris',
    title: 'Juris - Legislação Acessível',
    description: 'Plataforma que democratiza o acesso às leis moçambicanas com API Laravel, aplicativo móvel e bot WhatsApp. Torna a legislação compreensível para todos.',
    category: 'Legal/Jurídico',
    technologies: ['Laravel', 'PHP', 'Ionic', 'Angular', 'Node.js', 'Twilio', 'WhatsApp API'],
    features: [
      'Base de dados de leis simplificadas',
      'Sistema de busca avançado',
      'Categorização de legislação',
      'App móvel multiplataforma',
      'Bot WhatsApp para consultas',
      'Partilha social',
      'Analytics de uso'
    ],
  },
  {
    id: 'ecoarbeira',
    title: 'EcoARBeira',
    description: 'Aplicativo educativo de Realidade Aumentada focado em sustentabilidade ambiental na cidade da Beira, Moçambique. Combina tecnologia AR com gamificação.',
    category: 'AR/Educação Ambiental',
    technologies: ['React Native', 'Expo', 'TypeScript', 'React ViroAR'],
    features: [
      'Realidade Aumentada (AR)',
      'Identificação de plantas nativas',
      'Scanner de QR Code',
      'Sistema de gamificação',
      'Badges e conquistas',
      'Mapas interativos',
      'Educação ambiental'
    ],
  },
  {
    id: 'oraculo',
    title: 'Oraculo - Controle de Ponto Facial',
    description: 'Sistema de controle de ponto biométrico gratuito com reconhecimento facial usando TensorFlow.js e face-api.js. Alternativa open-source para sistemas caros.',
    category: 'IA/RH',
    technologies: ['Node.js', 'Express', 'Supabase', 'TensorFlow.js', 'face-api.js'],
    features: [
      'Reconhecimento facial em tempo real',
      'Gestão de funcionários',
      'Registro de entrada/saída',
      'Relatórios de presença',
      'Dashboard administrativo',
      'Gratuito e open-source'
    ],
  },
  {
    id: 'fonte',
    title: 'Fonte - Bot Bíblia WhatsApp',
    description: 'Bot WhatsApp que fornece áudios e textos da Bíblia em múltiplos idiomas. Inclui sistema de gestão e integração com IA (Ollama).',
    category: 'Bot/Religioso',
    technologies: ['Node.js', 'Express', 'Twilio', 'WhatsApp API', 'Ollama', 'Ionic'],
    features: [
      'Bot WhatsApp automatizado',
      'Áudios da Bíblia',
      'Suporte multi-idioma',
      'Gestão de utilizadores',
      'Integração com IA (Ollama)',
      'App auxiliar de gestão'
    ],
  },
  {
    id: 'salx-pos',
    title: 'SALX POS',
    description: 'Sistema de Ponto de Venda (POS) móvel offline-first para operadores de bilheteira e validação. Arquitetura robusta com Riverpod e persistência local.',
    category: 'POS/Vendas',
    technologies: ['Flutter', 'Riverpod', 'Drift (SQLite)', 'Go Router', 'Dio'],
    features: [
      'Funcionamento offline-first',
      'Persistência local com SQLite',
      'Autenticação JWT',
      'Gestão de bilhetes',
      'Sincronização de dados',
      'Interface intuitiva',
      'Secure storage'
    ],
  },
  {
    id: 'carrental',
    title: 'CarRental - Aluguer de Scooters',
    description: 'Aplicativo para aluguel de scooters e veículos com integração IoT, geolocalização e scanner de código de barras.',
    category: 'Mobilidade/IoT',
    technologies: ['Ionic', 'Angular 16', 'Capacitor', 'Google Maps', 'IoT'],
    features: [
      'Geolocalização em tempo real',
      'Integração com Google Maps',
      'Scanner de código de barras',
      'Integração IoT com scooters',
      'Sistema de reservas',
      'Rastreamento de veículos'
    ],
  },
  {
    id: 'maranata',
    title: 'Maranata - Endless Runner',
    description: 'Jogo móvel endless runner com temática cristã desenvolvido com Flutter e Flame Engine. Inclui sistema de pontuação e monetização.',
    category: 'Game/Mobile',
    technologies: ['Flutter', 'Flame Engine', 'Firebase Analytics', 'Google Ads'],
    features: [
      'Gameplay endless runner',
      'Física de jogo com Flame',
      'Sistema de pontuação',
      'Firebase Analytics',
      'Monetização com Google Ads',
      'Áudio e efeitos sonoros'
    ],
  },
  {
    id: 'fleets',
    title: 'Fleets - Gestão de Frotas',
    description: 'Sistema multi-tenant de gestão de frotas de veículos com relatórios avançados e integração com AWS S3.',
    category: 'Gestão/Frotas',
    technologies: ['Laravel 10', 'AWS S3', 'DomPDF', 'mPDF', 'Excel'],
    features: [
      'Multi-tenancy',
      'Gestão de veículos',
      'Manutenção preventiva',
      'Controle de abastecimento',
      'Relatórios PDF e Excel',
      'Armazenamento AWS S3',
      'Dashboard analítico'
    ],
  },
  {
    id: 'trip-management',
    title: 'Trip Management',
    description: 'API de gestão e agendamento de viagens com cron jobs automatizados e integração com PostgreSQL.',
    category: 'Gestão/Viagens',
    technologies: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Cron Jobs'],
    features: [
      'Agendamento de viagens',
      'Cron jobs automatizados',
      'Gestão de timezone',
      'Notificações automáticas',
      'Relatórios de viagens',
      'API RESTful'
    ],
  },
  {
    id: 'kukura',
    title: 'Kukura App',
    description: 'Aplicativo institucional da Equip Mozambique com integração de mapas, câmera e visualização de documentos.',
    category: 'Institucional',
    technologies: ['Ionic', 'Angular 17', 'Capacitor', 'Google Maps'],
    features: [
      'Integração com Google Maps',
      'Acesso à câmera',
      'Visualizador de arquivos',
      'Design institucional',
      'Multiplataforma'
    ],
    link: 'kukuraapp.empoderandomocambique.org',
  },
  {
    id: 'consultare',
    title: 'Consultare App',
    description: 'Sistema de consultoria com quiz interativo e categorização. Desenvolvido para Equip Mozambique.',
    category: 'Consultoria/Quiz',
    technologies: ['Ionic', 'Angular 13', 'Capacitor', 'Firebase Analytics'],
    features: [
      'Sistema de perguntas/respostas',
      'Categorias organizadas',
      'Analytics com Firebase',
      'Interface intuitiva',
      'Feedback em tempo real'
    ],
  },
  {
    id: 'maticket',
    title: 'Maticket',
    description: 'Aplicativo de gestão de contactos e tickets com integração de sistema de arquivos e APIs nativas.',
    category: 'Gestão/Tickets',
    technologies: ['Ionic', 'Angular 13', 'Capacitor'],
    features: [
      'Gestão de contactos',
      'Sistema de tickets',
      'Acesso ao filesystem',
      'APIs nativas do dispositivo',
      'Sincronização de dados'
    ],
  },
  {
    id: 'inatro',
    title: 'inatro',
    description: 'Plataforma web moderna com autenticação JWT, gestão de dados e exportação para Excel.',
    category: 'Web/Gestão',
    technologies: ['Next.js 16', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Autenticação JWT',
      'Dashboard moderno',
      'Exportação Excel',
      'Design responsivo',
      'TypeScript type-safe'
    ],
  },
];

export const categories = [
  'Todos',
  'Educação',
  'IA/Educação',
  'Gestão/Agricultura',
  'Legal/Jurídico',
  'AR/Educação Ambiental',
  'IA/RH',
  'Bot/Religioso',
  'POS/Vendas',
  'Mobilidade/IoT',
  'Game/Mobile',
  'Gestão/Frotas',
  'Gestão/Viagens',
  'Institucional',
  'Consultoria/Quiz',
  'Gestão/Tickets',
  'Web/Gestão',
];
