import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromotionBar from "@/components/PromotionBar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <PromotionBar />
      </div>
    </LanguageProvider>
  );
};

export default Index;
