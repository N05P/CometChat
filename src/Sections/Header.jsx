// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className=" text-white px-8 py-4 mb-16 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold">
        <span className="text-white">comet</span>
        <span className="text-gray-300">chat</span>
      </div>
      <nav className="flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-purple-400">Platform</a>
        <a href="#" className="hover:text-purple-400">Solutions</a>
        <a href="#" className="hover:text-purple-400">Developers</a>
        <a href="#" className="hover:text-purple-400">Resources</a>
        <a href="#" className="hover:text-purple-400">Pricing</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="text-sm hover:text-purple-400">Log in</button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg font-semibold">
          Schedule a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
