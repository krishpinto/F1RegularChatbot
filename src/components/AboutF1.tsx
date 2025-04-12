
import { Trophy, Users, Flag, Calendar } from 'lucide-react';

const AboutF1 = () => {
  const featureCards = [
    {
      title: "Rich Legacy",
      description: "Over 70 years of racing history since the first Formula 1 World Championship in 1950",
      icon: <Trophy className="h-10 w-10 text-f1-red" />
    },
    {
      title: "Global Teams",
      description: "10 teams competing with 20 drivers representing the pinnacle of motorsport engineering",
      icon: <Users className="h-10 w-10 text-f1-red" />
    },
    {
      title: "World Circuits",
      description: "Race calendar featuring iconic tracks across 5 continents challenging drivers in unique ways",
      icon: <Flag className="h-10 w-10 text-f1-red" />
    },
    {
      title: "Racing Calendar",
      description: "Approximately 23 race weekends per year featuring qualifying sessions and the main race",
      icon: <Calendar className="h-10 w-10 text-f1-red" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-f1-navy mb-4">The World of Formula 1</h2>
          <div className="h-1 w-20 bg-f1-red mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto font-montserrat">
            Formula 1 is the highest class of international racing for single-seater formula racing cars, featuring the world's most advanced automotive technology and the most skilled drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-f1-red"
            >
              <div className="flex justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-f1-navy text-center mb-3">{card.title}</h3>
              <p className="text-gray-600 text-center font-montserrat">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutF1;
