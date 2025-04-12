
import { Flag, Twitter, Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-f1-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Flag className="h-8 w-8 text-f1-red mr-2" />
            <span className="font-montserrat font-bold text-2xl">F1 Guru</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-f1-red transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-f1-red transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-f1-red transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-f1-red transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-f1-red transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="h-px w-full bg-gray-700 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">About F1 Guru</h3>
            <p className="text-gray-400 font-montserrat text-sm">
              F1 Guru is your AI-powered Formula 1 assistant, providing expert answers to all your F1 questions. Whether you're a new fan or a seasoned enthusiast, get the information you need instantly.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">About F1</a></li>
              <li><a href="#chat" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">AI Chat</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">F1 FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">F1 Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.formula1.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">Official F1 Website</a></li>
              <li><a href="https://www.fia.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">FIA</a></li>
              <li><a href="https://www.f1tv.formula1.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">F1 TV</a></li>
              <li><a href="https://www.autosport.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-f1-red transition-colors font-montserrat text-sm">Autosport</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-500 font-montserrat text-sm">
          <p>&copy; {new Date().getFullYear()} F1 Guru. This site is not affiliated with Formula 1, FIA, or any F1 team.</p>
          <p className="mt-2">Formula 1, F1, and related marks are trademarks of Formula One Licensing BV.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
