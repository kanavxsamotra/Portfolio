import React, { useState } from 'react';
import { X, Send, User, Mail, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-cyan-400/30 shadow-2xl animate-modal-open">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
            Let's Talk
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-cyan-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-magenta-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 transition-all duration-300"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-yellow-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-magenta-500 to-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;