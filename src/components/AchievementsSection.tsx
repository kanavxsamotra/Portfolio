import React from 'react';
import { Award, Trophy, Star, Target, Zap, Shield } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'CI/CD Pipeline Excellence',
      description: 'Designed and implemented comprehensive Jenkins pipeline, optimizing development workflows and reducing deployment time by 60%',
      metric: '60% Faster',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Star,
      title: 'AI Innovation',
      description: 'Developed innovative AI-powered Streamlit application for legal domain exploration, enhancing research efficiency',
      metric: 'AI-Powered',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Infrastructure Security',
      description: 'Implemented robust security measures and monitoring systems across cloud infrastructure deployments',
      metric: '99.9% Uptime',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Automation Mastery',
      description: 'Streamlined manual processes through intelligent automation, saving hundreds of hours monthly',
      metric: '200+ Hours',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Target,
      title: 'Cloud Optimization',
      description: 'Optimized cloud resource utilization and costs while maintaining high performance standards',
      metric: '40% Cost Reduction',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Award,
      title: 'Open Source Contributions',
      description: 'Active contributor to DevOps community with multiple open-source projects and documentation',
      metric: '50+ Commits',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones and accomplishments in DevOps engineering and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 card-pop group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-6 icon-btn-pop`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} rounded-full text-white text-sm font-bold mb-3 btn-pop cursor-pointer`}>
                  {achievement.metric}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 card-pop">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Professional <span className="text-cyan-400">Impact</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '25+', color: 'text-cyan-400' },
              { label: 'Deployment Time Reduced', value: '60%', color: 'text-purple-400' },
              { label: 'Infrastructure Uptime', value: '99.9%', color: 'text-green-400' },
              { label: 'Cost Optimization', value: '40%', color: 'text-yellow-400' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center btn-pop cursor-pointer">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;