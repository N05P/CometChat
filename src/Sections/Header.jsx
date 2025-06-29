// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className=" text-white px-16 py-8 flex items-center justify-between">
      <div className="text-3xl font-bold">
        <span className="text-white font-medium">comet</span>
        <span className="text-gray-300 font-extrabold">chat</span>
      </div>
      <nav className="flex space-x-16 text-l font-medium">
        <a href="#" className="hover:text-purple-400">Platform</a>
        <a href="#" className="hover:text-purple-400">Solutions</a>
        <a href="#" className="hover:text-purple-400">Developers</a>
        <a href="#" className="hover:text-purple-400">Resources</a>
        <a href="#" className="hover:text-purple-400">Pricing</a>
      </nav>
      <div className="flex items-center space-x-8">
        <button className="text-l hover:text-purple-400">Log in</button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-3 rounded-lg font-semibold">
          Schedule a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
