'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative">
      {/* Main Slider */}
      <div className="relative h-[500px] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        {/* Project Image */}
        <div className="relative h-full w-full">
          {currentProject.heroImage || currentProject.image ? (
            <Image
              src={currentProject.heroImage || currentProject.image || ''}
              alt={currentProject.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">{currentProject.title}</span>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary-600 rounded-full text-sm font-semibold">
                {currentProject.category}
              </span>
              <span className="text-sm text-gray-300">
                {currentIndex + 1} / {projects.length}
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              {currentProject.title}
            </h3>
            
            <p className="text-gray-200 text-lg mb-4 line-clamp-2">
              {currentProject.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject.technologies.slice(0, 5).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
              {currentProject.technologies.length > 5 && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  +{currentProject.technologies.length - 5} mais
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {currentProject.link && (
                <a
                  href={`https://${currentProject.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Ver Projeto</span>
                </a>
              )}
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
          aria-label="Projeto anterior"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
          aria-label="Próximo projeto"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden transition-all ${
              index === currentIndex
                ? 'ring-4 ring-primary-500 scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="128px"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white text-xs font-bold text-center px-1">
                  {project.title}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-primary-600'
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
            }`}
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
