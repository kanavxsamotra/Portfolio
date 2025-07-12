import React from 'react';
import { Award, Mail, Phone, MapPin, Code, Server, Cloud } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate DevOps enthusiast with expertise in modern cloud technologies and automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 text-cyan-400 mr-3" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a passionate DevOps enthusiast, I specialize in bridging the gap between development and operations 
                  through innovative automation solutions. My expertise spans across cloud platforms, containerization 
                  technologies, and continuous integration/deployment practices.
                </p>
                <p>
                  I'm constantly exploring new technologies and methodologies to streamline software delivery processes 
                  and enhance system reliability. My goal is to create efficient, scalable, and secure infrastructure 
                  solutions that drive business success.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Server,
                    title: 'CI/CD Pipeline Optimization',
                    description: 'Designed and implemented comprehensive Jenkins pipeline, reducing deployment time by 60%'
                  },
                  {
                    icon: Cloud,
                    title: 'AI-Powered Application',
                    description: 'Developed innovative Streamlit application for legal domain exploration'
                  },
                  {
                    icon: Code,
                    title: 'Container Orchestration',
                    description: 'Expertise in Docker containerization and Kubernetes orchestration for scalable infrastructure'
                  }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300">
                    <achievement.icon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Skills */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'orhodox396@gmail.com', color: 'text-cyan-400' },
                  { icon: Phone, label: 'Phone', value: '9541544045', color: 'text-purple-400' },
                  { icon: MapPin, label: 'Location', value: 'India', color: 'text-pink-400' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300">
                    <contact.icon className={`w-5 h-5 ${contact.color}`} />
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Core Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'DevOps', 'Docker', 'Jenkins', 'Kubernetes',
                  'Linux', 'Cloud', 'Automation', 'GitHub',
                  'Streamlit', 'CI/CD', 'Monitoring', 'Security'
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20 text-center hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-cyan-400 font-medium text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;