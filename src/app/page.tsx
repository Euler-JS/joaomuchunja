'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ProjectSlider from '@/components/ProjectSlider';
import SkillBar from '@/components/SkillBar';
import { projects, categories } from '@/data/projects';
import { skills, skillCategories } from '@/data/skills';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaDownload } from 'react-icons/fa';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const groupedSkills = Object.entries(skillCategories).map(([key, label]) => ({
    category: key,
    label,
    skills: skills.filter(s => s.category === key),
  }));

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              João Muchunja
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-8 animate-slide-up">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar soluções inovadoras usando Laravel, Node.js, 
              Flutter, React Native e Next.js. Especializado em IA, AR e desenvolvimento de aplicações complexas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Entre em Contato
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              >
                Ver Projetos
              </a>
            </div>
            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="https://https://github.com/Euler-JS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-muchunja-99b678116/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:joaoalbertojose96@gmail.com"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/258846151124"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Slider Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Projetos Recentes
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Destaque dos meus trabalhos mais recentes e impactantes
            </p>
            
            <ProjectSlider projects={projects.slice(0, 5)} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Sobre Mim
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Desenvolvedor Full Stack
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Com vasta experiência em desenvolvimento de aplicações web e móveis, tenho paixão por criar 
                  soluções que fazem a diferença na vida das pessoas. Minha jornada inclui projetos nas áreas 
                  de educação, agricultura, legal, saúde e muito mais.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Especializo-me em arquiteturas escaláveis, inteligência artificial, realidade aumentada e 
                  integração de sistemas complexos. Sempre em busca de novos desafios e aprendizados.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Destaques
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                    <span>16+ projetos em produção</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                    <span>Expertise em Backend (Laravel, Node.js) e Mobile (Flutter, React Native)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                    <span>Experiência com IA/ML (TensorFlow, Claude AI, RAG)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                    <span>Desenvolvimento de WhatsApp Bots e Realidade Aumentada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                    <span>Contribuições para projetos da GIZ e Equip Mozambique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Projetos
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais significativos em diversas áreas
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-400">
              Nenhum projeto encontrado nesta categoria.
            </p>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Habilidades
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedSkills.map(({ category, label, skills: categorySkills }) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {label}
                  </h3>
                  <div>
                    {categorySkills.map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experiência Profissional
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Desenvolvedor Full Stack Freelancer
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      Independente
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    2020 - Presente
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Desenvolvimento de 16+ aplicações em produção</li>
                  <li>Especialização em Laravel, Node.js, Flutter e React Native</li>
                  <li>Implementação de soluções com IA/ML e Realidade Aumentada</li>
                  <li>Criação de WhatsApp Bots e sistemas de automação</li>
                  <li>Gestão completa de projetos do conceito ao deployment</li>
                </ul>
              </div>

              {/* Experience Item 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Desenvolvedor - Equip Mozambique
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      Projetos Institucionais
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    2021 - 2024
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Desenvolvimento de aplicativos institucionais (Kukura App, Consultare)</li>
                  <li>Integração com Google Maps e APIs nativas</li>
                  <li>Implementação de analytics e tracking</li>
                </ul>
              </div>

              {/* Experience Item 3 */}
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Desenvolvedor Backend - Projeto FAMS
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400">
                      GIZ (Cooperação Alemã)
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    2022 - 2023
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Sistema de gestão agrícola multi-tenant com Laravel</li>
                  <li>Desenvolvimento de app móvel offline-first</li>
                  <li>Integração com scanners, GPS e impressoras Bluetooth</li>
                  <li>Dashboards analíticos e relatórios automatizados</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Interessado em trabalhar juntos? Vamos conversar!
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-primary-600 dark:text-primary-400 text-xl mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <a
                        href="mailto:joaoalbertojose96@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        joaomuchunja@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaWhatsapp className="text-primary-600 dark:text-primary-400 text-xl mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                      <a
                        href="https://wa.me/258846151124"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        +258 XX XXX XXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaLinkedin className="text-primary-600 dark:text-primary-400 text-xl mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/jo%C3%A3o-muchunja-99b678116/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        linkedin.com/in/joaomuchunja
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaGithub className="text-primary-600 dark:text-primary-400 text-xl mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                      <a
                        href="https://https://github.com/Euler-JS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        https://github.com/Euler-JS
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="Sua mensagem..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
