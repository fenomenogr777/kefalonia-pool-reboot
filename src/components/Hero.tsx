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
      {/* Background Image with Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.85)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/50 to-primary-light/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 py-32 sm:py-36 md:py-44 text-center max-w-6xl">
        {/* Eyebrow Text */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-white/95 tracking-wider uppercase">Professional Pool Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-[1.1] tracking-tight">
          <span className="block mb-2 font-semibold">{t.hero.title}</span>
          <span className="block text-accent font-bold drop-shadow-lg">
            {t.hero.subtitle}
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 sm:mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed font-normal">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center animate-scale-in mb-16 max-w-md mx-auto sm:max-w-none">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto sm:min-w-[220px] h-14 sm:h-16 text-base sm:text-lg font-bold bg-accent hover:bg-accent-light shadow-xl hover:shadow-2xl active:scale-95 hover:scale-105 transition-all duration-300 relative overflow-hidden group touch-manipulation"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t.hero.requestQuote}
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            asChild
            className="w-full sm:w-auto sm:min-w-[200px] h-14 sm:h-16 text-base sm:text-lg font-semibold bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm border-2 border-white/30 active:scale-95 hover:scale-105 transition-all duration-300 touch-manipulation"
          >
            <a href="tel:6987404210" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              {t.hero.phone}
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 sm:gap-8 text-white/75 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>{t.hero.trustIndicators.experience}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>{t.hero.trustIndicators.clients}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>{t.hero.trustIndicators.service}</span>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-medium uppercase tracking-wider">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
