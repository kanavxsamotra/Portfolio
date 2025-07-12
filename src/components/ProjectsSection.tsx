import React from 'react';
import { ExternalLink, Github, Linkedin, Download, Server, Brain, Layers, Play, Code, Globe } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Comprehensive Jenkins pipeline implementation that reduced deployment time by 60% through automated testing, building, and deployment processes.',
      icon: Server,
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
      gradient: 'from-orange-400 to-red-500',
      githubUrl: 'https://github.com/kanavxsamotra/cicd-pipeline',
      demoUrl: 'https://demo-cicd-pipeline.vercel.app',
      hasDemo: true
    },
    {
      title: 'AI-Powered Legal Research',
      description: 'Innovative Streamlit application leveraging AI for legal domain exploration, enhancing research efficiency and user experience.',
      icon: Brain,
      tech: ['Python', 'Streamlit', 'AI/ML', 'NLP'],
      gradient: 'from-purple-400 to-pink-500',
      githubUrl: 'https://github.com/kanavxsamotra/legal-ai-research',
      demoUrl: 'https://legal-ai-research.streamlit.app',
      hasDemo: true
    },
    {
      title: 'Container Orchestration',
      description: 'Scalable Kubernetes infrastructure setup with automated scaling, monitoring, and security implementations for production workloads.',
      icon: Layers,
      tech: ['Kubernetes', 'Docker', 'Helm', 'Prometheus'],
      gradient: 'from-cyan-400 to-blue-500',
      githubUrl: 'https://github.com/kanavxsamotra/k8s-orchestration',
      demoUrl: null,
      hasDemo: false
    }
  ];

  // GitHub Projects - Add your actual GitHub repositories here
  const githubProjects = [
    {
      title: 'Portfolio Website',
      description: 'Modern React TypeScript portfolio with animated UI and responsive design built with Vite and Tailwind CSS.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/kanavxsamotra/portfolio',
      demoUrl: 'https://kanavxsamotra.vercel.app',
      stars: 15,
      forks: 8,
      language: 'TypeScript',
      languageColor: '#3178c6'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/kanavxsamotra/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.vercel.app',
      stars: 23,
      forks: 12,
      language: 'JavaScript',
      languageColor: '#f1e05a'
    },
    {
      title: 'Task Management App',
      description: 'Real-time task management application with drag-and-drop functionality and team collaboration features.',
      tech: ['React', 'Firebase', 'Socket.io', 'Material-UI'],
      githubUrl: 'https://github.com/kanavxsamotra/task-manager',
      demoUrl: 'https://task-manager-demo.vercel.app',
      stars: 18,
      forks: 6,
      language: 'TypeScript',
      languageColor: '#3178c6'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with real-time data, charts, and location-based forecasts.',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
      githubUrl: 'https://github.com/kanavxsamotra/weather-dashboard',
      demoUrl: 'https://weather-dashboard-demo.vercel.app',
      stars: 12,
      forks: 4,
      language: 'JavaScript',
      languageColor: '#f1e05a'
    }
  ];

  const links = [
    {
      title: 'LinkedIn Profile',
      description: 'Connect with me professionally and explore my career journey',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kanav-samotra-568397372',
      color: 'text-blue-400',
      borderColor: 'border-blue-400/20 hover:border-blue-400'
    },
    {
      title: 'GitHub Repository',
      description: 'Explore my open-source projects and contributions',
      icon: Github,
      url: 'https://github.com/kanavxsamotra',
      color: 'text-purple-400',
      borderColor: 'border-purple-400/20 hover:border-purple-400'
    },
    {
      title: 'Resume Download',
      description: 'Download my latest resume and professional details',
      icon: Download,
      url: 'https://github.com/kanavxsamotra/kanavxsamotra/blob/main/Kanav%20Samotra%20Resume.pdf',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400/20 hover:border-cyan-400'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions in DevOps automation and cloud infrastructure
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <Code className="w-4 h-4" />
                  <span>Code</span>
                </a>
                {project.hasDemo && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    <Play className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GitHub <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Open-source projects with live demos and detailed documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {githubProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: project.languageColor }}></span>
                      {project.language}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-green-400 rounded-full text-xs border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-400">⑂</span>
                      {project.forks}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex-1 justify-center"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border ${link.borderColor} transition-all duration-300 hover:scale-105 group block`}
            >
              <div className="flex items-center justify-between mb-4">
                <link.icon className={`w-8 h-8 ${link.color} group-hover:scale-110 transition-transform duration-300`} />
                <ExternalLink className={`w-5 h-5 ${link.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{link.title}</h3>
              <p className="text-gray-300 mb-4">{link.description}</p>
              
              <div className={`inline-flex items-center ${link.color} group-hover:translate-x-1 transition-transform duration-300`}>
                <span className="mr-2">Explore</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;