
import { useState, useEffect } from 'react';
import { Flag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-f1-navy/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Flag className="h-8 w-8 text-f1-red mr-2" />
            <span className="text-white font-montserrat font-bold text-2xl">F1 Guru</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white font-montserrat font-medium hover:text-f1-red transition-colors">Home</a>
            <a href="#about" className="text-white font-montserrat font-medium hover:text-f1-red transition-colors">About F1</a>
            <a href="#chat" className="text-white font-montserrat font-medium hover:text-f1-red transition-colors">AI Chat</a>
            <a href="#faq" className="text-white font-montserrat font-medium hover:text-f1-red transition-colors">F1 FAQ</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-f1-navy">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a 
              href="#home" 
              className="block px-3 py-2 text-white font-montserrat font-medium hover:bg-f1-red/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-white font-montserrat font-medium hover:bg-f1-red/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About F1
            </a>
            <a 
              href="#chat" 
              className="block px-3 py-2 text-white font-montserrat font-medium hover:bg-f1-red/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Chat
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 text-white font-montserrat font-medium hover:bg-f1-red/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              F1 FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
