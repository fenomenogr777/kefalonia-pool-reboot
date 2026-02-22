import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const Hero = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [scrollY, setScrollY] = useState(0);

  const yearsCount = useAnimatedCounter(5, 2000, 0, isVisible);
  const clientsCount = useAnimatedCounter(30, 2000, 0, isVisible);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      </div>

      {/* Content Container */}
      <div ref={ref} className="relative z-10 container mx-auto px-6 sm:px-8 py-32 sm:py-40 text-center max-w-4xl">
        {/* Eyebrow Text */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 bg-white/5 backdrop-blur-sm rounded-full border border-primary/30 animate-fade-in">
          <div className="w-2 h-2 bg-primary rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">{t.hero.eyebrow}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 animate-fade-in leading-[1.1] tracking-tight drop-shadow-lg">
          <span className="block mb-3">{t.hero.title}</span>
          <span className="block text-primary font-semibold">
            {t.hero.subtitle}
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed font-light drop-shadow-md">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center animate-scale-in mb-16 max-w-lg mx-auto">
          <Button 
            size="lg"
            onClick={scrollToPricing}
            className="w-full sm:w-auto sm:min-w-[200px] h-14 text-base font-semibold bg-primary text-charcoal hover:bg-primary/90 shadow-gold hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
          >
            {t.hero.pricingButton}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="w-full sm:w-auto sm:min-w-[180px] h-14 text-base font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <a href="tel:6987404210" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              {t.hero.phone}
            </a>
          </Button>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-4 animate-fade-in mb-12">
          <span className="text-white/50 text-sm font-medium">{t.hero.followUs}</span>
          <div className="flex gap-3">
            <a 
              href="https://www.facebook.com/cleanpoolkefalonia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-primary p-2.5 rounded-full border border-white/10 hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/cleanpoolkefalonia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-primary p-2.5 rounded-full border border-white/10 hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@cleanpoolkefalonia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-primary p-2.5 rounded-full border border-white/10 hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Trust Indicators with Animated Counters */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 text-white/70 text-sm font-medium animate-fade-in-up">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary font-bold text-lg">{yearsCount}+</span>
            <span>{t.hero.trustIndicators.experience.replace(/\d+\+?\s*/, '')}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary font-bold text-lg">{clientsCount}+</span>
            <span>{t.hero.trustIndicators.clients.replace(/\d+\+?\s*/, '')}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span>{t.hero.trustIndicators.service}</span>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0 40C240 10 480 60 720 40C960 20 1200 50 1440 30V80H0V40Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce z-20">
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
