import React, { useState } from 'react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#0C011C] text-gray-300 text-sm px-6 sm:px-8 pt-12 pb-6">
      {/* Logo */}
      <div className="text-2xl ml-24 font-bold text-white mb-8 text-center sm:text-left">
        <span>comet</span><span className="text-gray-300">chat</span>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {/* Platform */}
        <div className='flex flex-col gap-4'>
          <h4 className="text-purple-500 font-semibold mb-1">Platform</h4>
          <p className="pt-2 text-gray-400">Features</p>
          <ul className="space-y-1 text-white flex  flex-col gap-1">
            <li>Chat & Messaging</li>
            <li>Voice & Video Calls</li>
            <li>Security & Compliance</li>
            <li>Extensions</li>
            <li>Features at a glance</li>
            <li>Webhooks & Bots</li>
            <li>Moderation</li>
            <li>Analytics & Insights</li>
          </ul>
          <p className="pt-2 text-gray-400">Implementation</p>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>Widgets</li>
            <li>UI Kits</li>
            <li>SDKs & APIs</li>
          </ul>
          <p className="pt-2 text-gray-400">Technologies</p>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>React Chat SDK & API</li>
            <li>Angular Chat SDK & API</li>
            <li>Vue Chat SDK & API</li>
            <li>IOS Swift Chat SDK & API</li>
            <li>Android Kotlin Chat SDK & API</li>
            <li>Android Java Chat SDK & API</li>
            <li>React Native Chat SDK & API</li>
            <li>Ionic/Capacitor Chat SDK & API</li>
            <li>WordPress Chat SDK & API</li>
            <li>Lavarel/PHP Chat SDK & API</li>
            <li>Flutter Chat SDK & API</li>
            <li>Next.js Chat SDK & API</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className='flex flex-col gap-4'>
          <h4 className="text-purple-500 font-semibold mb-1">Solutions</h4>
          <p className="text-gray-400">By Use cases</p>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>Social Community</li>
            <li>Marketplace</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Virtual Events</li>
            <li>On-Demand Service</li>
            <li>Dating Apps</li>
            <li>Gaming</li>
          </ul>
          <p className="pt-2 text-gray-400">By Organization Type</p>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>Enterprise</li>
            <li>Startups</li>
          </ul>
        </div>

        {/* Developers */}
        <div className='flex flex-col gap-4'>
          <h4 className="text-purple-500 font-semibold mb-1">Developers</h4>
          <p className="text-gray-400">Technologies documentation</p>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
            <li>IOS Swift</li>
            <li>Android Kotlin</li>
            <li>Android Java</li>
            <li>React Native</li>
            <li>Ionic/Capacitor</li>
            <li>WordPress</li>
            <li>Lavarel/PHP</li>
            <li>Flutter</li>
            <li>Next.js</li>
          </ul>
          <p className="text-gray-400">Resources</p>
          <ul className="space-y-1 text-white flex flex-col gap-1 ">
            <li>Documentation</li>
            <li>Product updates</li>
            <li>Tutorials</li>
            <li>Open-source Apps</li>
            <li>Product status</li>
            <li>Glossary</li>
          </ul>
        </div>

        {/* Resources / Company */}
        <div className='flex flex-col gap-4'>
          <h4 className="text-purple-500 font-semibold mb-1">Resources</h4>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>Customer stories</li>
            <li>Blog</li>
            <li>Give feedback</li>
            <li>Community forum</li>
            <li>Help center</li>
            <li>Partners</li>
          </ul>
          <h4 className="text-purple-500 font-semibold mt-4 mb-1">Competitors</h4>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>SendBird</li>
            <li>GetStream</li>
            <li>Applozic</li>
            <li>Twilio</li>
            <li>PubNub</li>
          </ul>
          <h4 className="text-purple-500 font-semibold mt-4 mb-1">Company</h4>
          <ul className="space-y-1 text-white flex flex-col gap-1">
            <li>About us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Chat with us</li>
          </ul>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden space-y-4">
        {[
          { title: 'Platform', content: (
            <>
              <p className="pt-2 text-gray-400">Features</p>
              <ul className="space-y-1 text-white">
                <li>Chat & Messaging</li>
                <li>Voice & Video Calls</li>
                <li>Security & Compliance</li>
                <li>Extensions</li>
                <li>Features at a glance</li>
                <li>Webhooks & Bots</li>
                <li>Moderation</li>
                <li>Analytics & Insights</li>
              </ul>
              <p className="pt-2 text-gray-400">Implementation</p>
              <ul className="space-y-1 text-white">
                <li>Widgets</li>
                <li>UI Kits</li>
                <li>SDKs & APIs</li>
              </ul>
              <p className="pt-2 text-gray-400">Technologies</p>
              <ul className="space-y-1 text-white">
                <li>React Chat SDK & API</li>
                <li>Angular Chat SDK & API</li>
                <li>Vue Chat SDK & API</li>
                <li>IOS Swift Chat SDK & API</li>
                <li>Android Kotlin Chat SDK & API</li>
                <li>Android Java Chat SDK & API</li>
                <li>React Native Chat SDK & API</li>
                <li>Ionic/Capacitor Chat SDK & API</li>
                <li>WordPress Chat SDK & API</li>
                <li>Lavarel/PHP Chat SDK & API</li>
                <li>Flutter Chat SDK & API</li>
                <li>Next.js Chat SDK & API</li>
              </ul>
            </>
          )},
          { title: 'Solutions', content: (
            <>
              <p className="text-gray-400">By Use Cases</p>
              <ul className="space-y-1 text-white">
                <li>Social Community</li>
                <li>Marketplace</li>
                <li>Healthcare</li>
                <li>Education</li>
                <li>Virtual Events</li>
                <li>On-Demand Service</li>
                <li>Dating Apps</li>
                <li>Gaming</li>
              </ul>
              <p className="pt-2 text-gray-400">By Organization Type</p>
              <ul className="space-y-1 text-white">
                <li>Enterprise</li>
                <li>Startups</li>
              </ul>
            </>
          )},
          { title: 'Developers', content: (
            <>
              <ul className="space-y-1 text-white">
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
                <li>IOS Swift</li>
                <li>Android Kotlin</li>
                <li>Android Java</li>
                <li>React Native</li>
                <li>Ionic/Capacitor</li>
                <li>WordPress</li>
                <li>Lavarel/PHP</li>
                <li>Flutter</li>
                <li>Next.js</li>
              </ul>
              <p className="pt-2 text-gray-400">Resources</p>
              <ul className="space-y-1 text-white">
                <li>Documentation</li>
                <li>Product updates</li>
                <li>Tutorials</li>
                <li>Open-source Apps</li>
                <li>Product status</li>
                <li>Glossary</li>
              </ul>
            </>
          )},
          { title: 'Resources / Company', content: (
            <>
              <ul className="space-y-1 text-white">
                <li>Customer stories</li>
                <li>Blog</li>
                <li>Give feedback</li>
                <li>Community forum</li>
                <li>Help center</li>
                <li>Partners</li>
              </ul>
              <p className="pt-2 text-purple-500 font-semibold">Competitors</p>
              <ul className="space-y-1 text-white">
                <li>SendBird</li>
                <li>GetStream</li>
                <li>Applozic</li>
                <li>Twilio</li>
                <li>PubNub</li>
              </ul>
              <p className="pt-2 text-purple-500 font-semibold">Company</p>
              <ul className="space-y-1 text-white">
                <li>About us</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Pricing</li>
                <li>Chat with us</li>
              </ul>
            </>
          )},
        ].map(({ title, content }, index) => (
  <div key={index}>
    <button
      onClick={() => toggleSection(index)}
      className="w-full flex justify-between items-center text-left text-purple-500 font-semibold py-2 border-b border-gray-700"
    >
      {title}
      <span className="text-white text-lg">
        {openSection === index ? '−' : '+'}
      </span>
    </button>
    {openSection === index && (
      <div className="mt-2 space-y-1">
        {content}
      </div>
    )}
  </div>
))}
      </div>

      {/* Bottom bar */}
     <div className="border-t border-gray-800 mt-10 pt-6 px-4 md:px-24 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white">
  <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
    <p>2023 © CometChat</p>
    <a href="#" className="hover:text-purple-400">Terms of Use</a>
    <a href="#" className="hover:text-purple-400">Privacy Policy</a>
  </div>

    <div className="flex flex-wrap justify-center md:justify-end gap-4">
      <a href="#" className="flex items-center gap-1">
        <i className="fa-brands fa-facebook-f"></i> Facebook
      </a>
      <a href="#" className="flex items-center gap-1">
        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
      </a>
      <a href="#" className="flex items-center gap-1">
        <i className="fa-brands fa-instagram"></i> Instagram
      </a>
      <a href="#" className="flex items-center gap-1">
        <i className="fa-brands fa-twitter"></i> Twitter
      </a>
      <a href="#" className="flex items-center gap-1">
        <i className="fa-brands fa-github"></i> GitHub
      </a>
    </div>
</div>

    </footer>
  );
};

export default Footer;
