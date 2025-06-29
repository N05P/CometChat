import React, { useState } from 'react';
import { Moon } from 'lucide-react';

const Header = () => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);

  const handleToggle = () => {
    setIsWhiteMode(!isWhiteMode);
  };

  return (
    <header
      className={`flex items-center justify-between px-6 md:px-16 py-8 ${
        isWhiteMode ? 'bg-white text-black' : 'text-white'
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className={isWhiteMode ? 'text-black font-medium' : 'text-white font-medium'}>
          comet
        </span>
        <span className={isWhiteMode ? 'text-gray-600 font-extrabold' : 'text-gray-300 font-extrabold'}>
          chat
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-base font-medium">
        <a href="#" className="hover:text-purple-400">Platform</a>
        <a href="#" className="hover:text-purple-400">Solutions</a>
        <a href="#" className="hover:text-purple-400">Developers</a>
        <a href="#" className="hover:text-purple-400">Resources</a>
        <a href="#" className="hover:text-purple-400">Pricing</a>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="hover:text-purple-400">Log in</button>
        <button className="bg-purple-600 hover:bg-purple-700 text-sm px-4 py-2 rounded-lg font-semibold">
          Schedule a demo
        </button>
      </div>

      {/* Mobile Actions */}
      <div className="flex md:hidden items-center space-x-2">
        <button className="text-sm hover:text-purple-400">Log in</button>
        <button
          onClick={handleToggle}
          className={`border ${isWhiteMode ? 'border-black' : 'border-white/30'} rounded-lg p-1.5`}
        >
          <Moon className={`w-5 h-5 ${isWhiteMode ? 'text-black' : 'text-white'}`} />
        </button>
      </div>
    </header>
  );
};

export default Header;
