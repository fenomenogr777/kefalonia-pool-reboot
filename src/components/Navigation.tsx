import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-medium' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            <span className={`transition-colors ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
              Clean Pool
            </span>
            <span className={`transition-colors ${isScrolled ? 'text-secondary' : 'text-accent'}`}>
              {" "}Kefalonia
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`gap-2 ${isScrolled ? 'text-foreground hover:text-secondary' : 'text-primary-foreground hover:text-accent'}`}
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border z-[100]">
                <DropdownMenuItem 
                  onClick={() => setLanguage("el")}
                  className={`cursor-pointer ${language === "el" ? "bg-muted" : ""}`}
                >
                  🇬🇷 Ελληνικά
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer ${language === "en" ? "bg-muted" : ""}`}
                >
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button & Language */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={isScrolled ? 'text-foreground' : 'text-primary-foreground'}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border z-[100]">
                <DropdownMenuItem 
                  onClick={() => setLanguage("el")}
                  className={`cursor-pointer ${language === "el" ? "bg-muted" : ""}`}
                >
                  🇬🇷 Ελληνικά
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer ${language === "en" ? "bg-muted" : ""}`}
                >
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} />
              ) : (
                <Menu className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg mb-4 shadow-medium">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
