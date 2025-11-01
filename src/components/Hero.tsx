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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 text-center max-w-6xl">
        {/* Eyebrow Text */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          <span className="text-[10px] sm:text-xs font-medium text-white/90 tracking-wide uppercase">Professional Pool Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight tracking-tight px-2">
          <span className="block mb-1 font-semibold">{t.hero.title}</span>
          <span className="block text-accent font-bold">
            {t.hero.subtitle}
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-white/85 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed font-normal px-4">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-scale-in mb-12 sm:mb-16 px-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto sm:min-w-[200px] h-12 sm:h-14 text-sm sm:text-base font-bold bg-accent hover:bg-accent-light shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.requestQuote}
              <span className="text-base sm:text-lg group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            asChild
            className="w-full sm:w-auto sm:min-w-[180px] h-12 sm:h-14 text-sm sm:text-base font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:scale-105 transition-all duration-300"
          >
            <a href="tel:6987404210" className="flex items-center gap-2">
              <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
              {t.hero.phone}
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white/70 text-xs sm:text-sm font-medium animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent rounded-full" />
            <span className="whitespace-nowrap">{t.hero.trustIndicators.experience}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent rounded-full" />
            <span className="whitespace-nowrap">{t.hero.trustIndicators.clients}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-accent rounded-full" />
            <span className="whitespace-nowrap">{t.hero.trustIndicators.service}</span>
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
