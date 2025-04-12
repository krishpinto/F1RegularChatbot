
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutF1 from "@/components/AboutF1";
import ChatBot from "@/components/ChatBot";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.body.classList.add('font-montserrat');
    return () => {
      document.body.classList.remove('font-montserrat');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutF1 />
        <ChatBot />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
