import React from 'react';
import { X, Mail, Phone, MapPin, Award } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-400/30 shadow-2xl animate-modal-open">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-400/10 to-magenta-500/10 rounded-lg p-6 border border-cyan-400/20">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Designed and implemented a comprehensive CI/CD pipeline using Jenkins, optimizing development workflows and reducing deployment time by 60%</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-magenta-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Developed an innovative AI-powered Streamlit application for legal domain exploration, enhancing research efficiency and user experience</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Expertise in containerization with Docker and orchestration with Kubernetes, managing scalable cloud infrastructure</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span>orhodox396@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-magenta-500 mr-3" />
                <span>9541544045</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="text-gray-300 leading-relaxed">
            <p className="mb-4">
              As a passionate DevOps enthusiast, I specialize in bridging the gap between development and operations through innovative automation solutions. My expertise spans across cloud platforms, containerization technologies, and continuous integration/deployment practices.
            </p>
            <p>
              I'm constantly exploring new technologies and methodologies to streamline software delivery processes and enhance system reliability. My goal is to create efficient, scalable, and secure infrastructure solutions that drive business success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;