import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0C011C] text-gray-300 text-sm px-8 pt-12 pb-6">
        <div className="text-2xl font-bold text-white mb-4 ml-20">
            <span>comet</span><span className="text-gray-300">chat</span>
          </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Platform */}
        <div>
          
          <div className="mb-4">
            <h4 className="text-purple-500 font-semibold mb-1">Platform</h4>
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
          </div>

        </div>

        {/* Column 2: Solutions */}
        <div>
          <div className="mb-4">
            <h4 className="text-purple-500 font-semibold mb-1">Solutions</h4>
            <p className="text-gray-400">By Use cases</p>
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
          </div>
        </div>

        {/* Column 3: Developers */}
        <div>
          <div className="mb-4">
            <h4 className="text-purple-500 font-semibold mb-1">Developers</h4>
            <p className="text-gray-400">Technologies documentation</p>
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
          </div>
          <p className="text-gray-400">Technologies documentation</p>
          <ul className="space-y-1 text-white">
            <li>Documentation</li>
            <li>Product updates</li>
            <li>Tutorials</li>
            <li>Open-source Apps</li>
            <li>Product status</li>
            <li>Glossary</li>
            </ul>
        </div>

        {/* Column 4: Resources & Competitors */}
        <div>
          <div className="mb-4">
            <h4 className="text-purple-500 font-semibold mb-1">Resources</h4>
            <ul className="space-y-1 text-white">
              <li>Customer stories</li>
              <li>Blog</li>
              <li>Give feedback</li>
              <li>Community forum</li>
              <li>Help center</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-500 font-semibold mb-1">Competitors</h4>
            <ul className="space-y-1 text-white">
              <li>SendBird</li>
              <li>GetStream</li>
              <li>Applozic</li>
              <li>Twilio</li>
              <li>PubNub</li>
            </ul>
          </div>
             <div>
          <h4 className="text-purple-500 font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-white">
            <li>About us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Chat with us</li>
          </ul>
        </div>
        </div>


      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <div className="flex gap-6">
            <p>2023 © CometChat</p>
        
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
