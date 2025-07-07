import React from 'react';
import { MessageCircle } from 'lucide-react';

interface TalkToMeButtonProps {
  onClick: () => void;
}

const TalkToMeButton: React.FC<TalkToMeButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-magenta-500 to-yellow-400 text-white p-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl z-40 group"
      aria-label="Talk to me"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
    </button>
  );
};

export default TalkToMeButton;