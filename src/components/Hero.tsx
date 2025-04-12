
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-f1-navy overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-f1-black to-f1-navy opacity-90 z-0"></div>
      
      {/* Racing line animation */}
      <div className="absolute inset-0 flex items-center">
        <div className="h-1 w-full bg-transparent relative overflow-hidden">
          <div className="absolute h-full w-1/2 bg-gradient-to-r from-transparent via-f1-red to-transparent animate-race-line"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6">
          <span className="text-f1-red">Formula 1</span> Knowledge <br /> 
          Powered by AI
        </h1>
        <p className="text-white text-xl md:text-2xl font-montserrat font-light max-w-3xl mx-auto mb-12">
          Ask anything about F1 history, drivers, teams, regulations and get instant expert answers
        </p>
        
        <button 
          onClick={scrollToChat}
          className="bg-f1-red hover:bg-f1-red/80 text-white font-montserrat font-medium py-3 px-8 rounded-full transition-all
            transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-red"
        >
          Ask the F1 Guru
        </button>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
