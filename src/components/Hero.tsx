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
      {/* Background Image with Professional Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.75)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-light/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-40 text-center max-w-6xl">
        {/* Eyebrow Text */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-white tracking-wide">Professional Pool Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in leading-[1.1] tracking-tight">
          <span className="block mb-2">{t.hero.title}</span>
          <span className="block bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent font-extrabold" 
                style={{ textShadow: '0 0 60px rgba(74, 222, 255, 0.5)' }}>
            {t.hero.subtitle}
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-white/95 mb-16 max-w-3xl mx-auto animate-fade-in-up leading-relaxed font-normal">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in mb-20">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="min-w-[240px] h-[70px] text-xl font-extrabold bg-gradient-to-r from-accent via-accent-light to-accent shadow-[0_20px_60px_-10px_rgba(74,222,255,0.7),0_0_80px_-20px_rgba(74,222,255,0.5)] hover:shadow-[0_25px_70px_-10px_rgba(74,222,255,0.9),0_0_100px_-20px_rgba(74,222,255,0.7)] hover:scale-110 transition-all duration-300 border-2 border-white/30 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.requestQuote}
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            asChild
            className="min-w-[220px] h-16 text-lg font-bold bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/30 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300"
          >
            <a href="tel:6987404210" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              {t.hero.phone}
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-10 text-white/80 text-base font-semibold animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(74,222,255,0.8)]" />
            <span>8+ Years Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(74,222,255,0.8)]" />
            <span>100+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(74,222,255,0.8)]" />
            <span>Professional Service</span>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
