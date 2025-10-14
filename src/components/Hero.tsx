import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-8 animate-fade-in drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          {t.hero.title}
          <br />
          <span className="text-accent drop-shadow-[0_0_20px_rgba(74,222,255,0.5)]">{t.hero.subtitle}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 max-w-3xl mx-auto animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="shadow-[0_8px_30px_rgba(74,222,255,0.3)] hover:shadow-[0_8px_40px_rgba(74,222,255,0.4)] transition-all duration-300"
          >
            {t.hero.requestQuote}
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            asChild
            className="shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <a href="tel:6987404210" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {t.hero.phone}
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2 bg-primary/20 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
          <div className="w-2 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(74,222,255,0.6)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
