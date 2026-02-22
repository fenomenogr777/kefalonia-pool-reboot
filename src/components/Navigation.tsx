import { useState, useEffect, useMemo } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = useMemo(() => [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.whyUs, href: '#why-choose-us' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.contact, href: '#contact' },
  ], [t]);

  const sectionIds = useMemo(() => navLinks.map(l => l.href), [navLinks]);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-subtle border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="text-xl font-semibold hover:opacity-80 transition-opacity"
          >
            <span className="text-primary">Clean Pool</span>
            <span className={`transition-colors ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
              {" "}Kefalonia
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  isScrolled 
                    ? 'text-charcoal-light hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                } ${activeSection === link.href ? (isScrolled ? '!text-primary' : '!text-white') : ''}`}
              >
                {link.label}
                {/* Active indicator */}
                <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  activeSection === link.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`} />
              </button>
            ))}
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`gap-2 font-medium ${
                    isScrolled 
                      ? 'text-charcoal-light hover:text-primary' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border z-[100]">
                <DropdownMenuItem 
                  onClick={() => setLanguage("el")}
                  className={`cursor-pointer ${language === "el" ? "bg-primary/10 text-primary" : ""}`}
                >
                  🇬🇷 Ελληνικά
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer ${language === "en" ? "bg-primary/10 text-primary" : ""}`}
                >
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button & Language */}
          <div className="md:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={isScrolled ? 'text-charcoal' : 'text-white'}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border z-[100]">
                <DropdownMenuItem 
                  onClick={() => setLanguage("el")}
                  className={`cursor-pointer ${language === "el" ? "bg-primary/10" : ""}`}
                >
                  🇬🇷 Ελληνικά
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer ${language === "en" ? "bg-primary/10" : ""}`}
                >
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-charcoal' : 'text-white'}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 bg-background rounded-lg mb-4 shadow-soft border border-border">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-primary bg-primary/5 border-l-2 border-primary'
                    : 'text-charcoal hover:bg-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
