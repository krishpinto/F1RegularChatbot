
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs: FAQItem[] = [
    {
      question: "What is Formula 1?",
      answer: "Formula 1 (F1) is the highest class of international single-seater auto racing sanctioned by the Fédération Internationale de l'Automobile (FIA). The 'formula' in the name refers to the set of rules that all participants' cars must meet. F1 is considered the pinnacle of motorsport, featuring the fastest circuit racing cars in the world."
    },
    {
      question: "How many teams compete in F1?",
      answer: "Currently, 10 teams (also known as constructors) compete in Formula 1, with each team fielding two drivers, for a total of 20 drivers on the grid."
    },
    {
      question: "How long is an F1 race?",
      answer: "Formula 1 races are defined by a race distance of approximately 305 kilometers (190 miles), with an exception for Monaco at 260 kilometers (160 miles). Races have a maximum time limit of 2 hours of racing, with a total event time limit of 3 hours."
    },
    {
      question: "What is DRS in Formula 1?",
      answer: "DRS (Drag Reduction System) is an adjustable flap on the rear wing of an F1 car that can be opened to reduce aerodynamic drag and increase straight-line speed. It's designed to facilitate overtaking and can only be used in designated DRS zones when a driver is within one second of the car ahead."
    },
    {
      question: "What is the F1 points system?",
      answer: "The current F1 points system awards points to the top 10 finishers in each race: 1st place gets 25 points, 2nd gets 18, 3rd gets 15, then 12, 10, 8, 6, 4, 2, and 1 point for 10th place. Additionally, one point is awarded for the fastest lap, provided that driver finishes in the top 10."
    },
    {
      question: "What are sprint races in F1?",
      answer: "Sprint races are shorter races (about 100km or 30 minutes) held on selected Grand Prix weekends. They determine the grid for Sunday's main race and award points to the top 8 finishers (8, 7, 6, 5, 4, 3, 2, 1). Sprint qualifying sets the grid for the sprint race."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-f1-navy mb-4">Frequently Asked Questions</h2>
          <div className="h-1 w-20 bg-f1-red mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto font-montserrat">
            Quick answers to common Formula 1 questions. For more detailed information, use the AI chat above.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-montserrat font-medium text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg mt-1">
                  <p className="text-gray-700 font-montserrat">{faq.answer}</p>
                </div>
              )}
              
              {index < faqs.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
