import React, { useState } from 'react';
import { 
  Cloud, 
  Container, 
  Settings, 
  Server, 
  Terminal, 
  GitBranch, 
  Zap,
  Database,
  BarChart3,
  Shield,
  Monitor,
  Cpu
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'DevOps & Automation',
      skills: [
        { name: 'Jenkins', icon: Settings, level: 90, color: 'from-orange-400 to-red-500' },
        { name: 'GitLab CI/CD', icon: GitBranch, level: 85, color: 'from-purple-400 to-pink-500' },
        { name: 'Automation', icon: Zap, level: 88, color: 'from-yellow-400 to-orange-500' },
        { name: 'Monitoring', icon: Monitor, level: 82, color: 'from-green-400 to-blue-500' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', icon: Cloud, level: 85, color: 'from-blue-400 to-cyan-500' },
        { name: 'Kubernetes', icon: Server, level: 80, color: 'from-purple-400 to-blue-500' },
        { name: 'Docker', icon: Container, level: 92, color: 'from-cyan-400 to-blue-500' },
        { name: 'Linux', icon: Terminal, level: 88, color: 'from-green-400 to-teal-500' }
      ]
    },
    {
      title: 'Development & Tools',
      skills: [
        { name: 'Python', icon: Database, level: 85, color: 'from-yellow-400 to-green-500' },
        { name: 'Streamlit', icon: BarChart3, level: 80, color: 'from-red-400 to-pink-500' },
        { name: 'GitHub', icon: GitBranch, level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'Security', icon: Shield, level: 75, color: 'from-red-400 to-orange-500' }
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical skills across modern DevOps tools and cloud technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-2xl hover:border-cyan-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`w-5 h-5 transition-all duration-300 ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` 
                            ? 'text-cyan-400 scale-110' 
                            : 'text-gray-400'
                        }`} />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional <span className="text-cyan-400">Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Terraform', 'Ansible', 'Prometheus', 'Grafana',
              'Redis', 'PostgreSQL', 'Nginx', 'Apache',
              'Elasticsearch', 'Kibana', 'Helm', 'ArgoCD'
            ].map((tech, index) => (
              <div
                key={tech}
                className="p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-600 text-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <Cpu className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <span className="text-gray-300 text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;