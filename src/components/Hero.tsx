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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light">
      {/* Background Image with Professional Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.85) contrast(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary-light/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent" />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} 
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-40 text-center max-w-6xl">
        {/* Eyebrow Text */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/90 tracking-wide">Professional Pool Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in leading-tight">
          {t.hero.title}
          <br />
          <span className="bg-gradient-to-r from-accent via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(74,222,255,0.4)]">
            {t.hero.subtitle}
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-14 max-w-3xl mx-auto animate-fade-in-up leading-relaxed font-light">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-scale-in mb-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="min-w-[200px] h-14 text-base font-semibold shadow-[0_10px_40px_-10px_rgba(74,222,255,0.4)] hover:shadow-[0_15px_50px_-10px_rgba(74,222,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            {t.hero.requestQuote}
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            asChild
            className="min-w-[200px] h-14 text-base font-semibold bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300"
          >
            <a href="tel:6987404210" className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              {t.hero.phone}
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>Professional Service</span>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
