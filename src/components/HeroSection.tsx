import React, { useState, useEffect } from 'react';
import { Upload, User, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');

  const fullName = 'Kanav Samotra';
  const fullTitle = 'DevOps Engineer & Cloud Architect';

  useEffect(() => {
    // Typewriter effect for name
    let nameIndex = 0;
    const nameTimer = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameText(fullName.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameTimer);
        // Start title typewriter after name is complete
        let titleIndex = 0;
        const titleTimer = setInterval(() => {
          if (titleIndex < fullTitle.length) {
            setTitleText(fullTitle.slice(0, titleIndex + 1));
            titleIndex++;
          } else {
            clearInterval(titleTimer);
          }
        }, 50);
      }
    }, 100);

    // Show profile image after 5 seconds
    const imageTimer = setTimeout(() => {
      setImageVisible(true);
    }, 5000);

    return () => {
      clearInterval(nameTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Name and Info */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {nameText}
                </span>
                <span className="animate-pulse">|</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                <span className="text-cyan-400">{titleText}</span>
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 shadow-2xl card-pop">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Passionate about bridging the gap between development and operations through innovative automation solutions. 
                Specializing in cloud platforms, containerization technologies, and continuous integration/deployment practices.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['DevOps', 'Docker', 'Kubernetes', 'Jenkins', 'Cloud'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 border border-cyan-500/30 text-sm font-medium btn-pop cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/kanavxsamotra/kanavxsamotra/blob/main/Kanav%20Samotra%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg btn-gradient-pop shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              
              <button className="inline-flex items-center px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-lg border border-gray-600 btn-pop">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`w-80 h-80 rounded-full border-4 border-gradient-to-r from-cyan-400 to-purple-500 overflow-hidden transition-all duration-1000 ${
                imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 backdrop-blur-sm border-4 border-cyan-400/30 rounded-full">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-purple-500/10 flex items-center justify-center">
                      <User className="w-32 h-32 text-cyan-400/50" />
                    </div>
                  )}
                </div>
              </div>
              
              <label className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer btn-gradient-pop shadow-lg shadow-cyan-500/25 border-4 border-gray-900">
                <Upload className="w-6 h-6 text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 left-8 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-8 -right-8 w-4 h-4 bg-pink-500/20 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;