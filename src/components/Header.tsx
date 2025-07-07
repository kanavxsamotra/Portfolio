import React, { useState, useEffect } from 'react';
import { Upload, User } from 'lucide-react';

const Header: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
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
    <header className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="text-center z-10 animate-slide-in">
        <div className="relative inline-block mb-8">
          <div className={`w-32 h-32 rounded-full border-4 border-cyan-400 overflow-hidden transition-all duration-1000 ${
            imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-magenta-500 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            )}
          </div>
          <label className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-magenta-500 to-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg">
            <Upload className="w-5 h-5 text-white" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-magenta-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
          Kanav Samotra
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Passionate DevOps Enthusiast | Cloud Architect | Automation Expert
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <span className="px-4 py-2 bg-cyan-400/20 rounded-full text-cyan-400 border border-cyan-400/30">
            DevOps
          </span>
          <span className="px-4 py-2 bg-magenta-500/20 rounded-full text-magenta-400 border border-magenta-400/30">
            Docker
          </span>
          <span className="px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-400 border border-yellow-400/30">
            Kubernetes
          </span>
          <span className="px-4 py-2 bg-cyan-400/20 rounded-full text-cyan-400 border border-cyan-400/30">
            Jenkins
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;