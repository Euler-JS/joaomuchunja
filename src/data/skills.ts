export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'backend' | 'frontend' | 'mobile' | 'database' | 'tools' | 'specialty';
}

export const skills: Skill[] = [
  // Backend
  { name: 'Node.js', level: 95, category: 'backend' },
  { name: 'Express.js', level: 95, category: 'backend' },
  { name: 'Laravel', level: 90, category: 'backend' },
  { name: 'PHP', level: 85, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'FastAPI', level: 70, category: 'backend' },
  
  // Frontend
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Angular', level: 85, category: 'frontend' },
  
  // Mobile
  { name: 'Flutter', level: 90, category: 'mobile' },
  { name: 'React Native', level: 85, category: 'mobile' },
  { name: 'Ionic', level: 90, category: 'mobile' },
  { name: 'Capacitor', level: 85, category: 'mobile' },
  { name: 'Expo', level: 80, category: 'mobile' },
  
  // Database
  { name: 'MongoDB', level: 90, category: 'database' },
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'Supabase', level: 80, category: 'database' },
  { name: 'SQLite', level: 80, category: 'database' },
  
  // Tools & Others
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'Firebase', level: 80, category: 'tools' },
  { name: 'Vercel', level: 85, category: 'tools' },
  
  // Specialty
  { name: 'AI/ML (TensorFlow, Claude, RAG)', level: 80, category: 'specialty' },
  { name: 'AR (ViroAR)', level: 75, category: 'specialty' },
  { name: 'WhatsApp Bots (Twilio)', level: 85, category: 'specialty' },
  { name: 'Socket.io / WebSockets', level: 85, category: 'specialty' },
  { name: 'RESTful APIs', level: 95, category: 'specialty' },
  { name: 'Game Development (Flame)', level: 70, category: 'specialty' },
];

export const skillCategories = {
  backend: 'Backend',
  frontend: 'Frontend',
  mobile: 'Mobile',
  database: 'Database',
  tools: 'Tools & DevOps',
  specialty: 'Especialidades',
};
