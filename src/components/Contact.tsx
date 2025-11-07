import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast.success(t.contact.form.success);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε ξανά.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-gradient-light overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/5 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Επικοινωνήστε</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-5 sm:space-y-6 animate-fade-in">
            <Card className="p-6 sm:p-8 hover:shadow-glow active:scale-95 transition-all duration-300 border-border/50 hover:border-primary/20 group hover:-translate-y-1 touch-manipulation">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-ocean rounded-full p-3 sm:p-4 shadow-soft group-hover:shadow-medium transition-shadow">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">{t.contact.phone}</h3>
                  <a 
                    href="tel:6987404210" 
                    className="text-secondary hover:text-secondary/80 active:text-secondary/90 transition-colors text-lg sm:text-xl font-medium"
                  >
                    698 740 4210
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-glow active:scale-95 transition-all duration-300 border-border/50 hover:border-primary/20 group hover:-translate-y-1 touch-manipulation">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-ocean rounded-full p-3 sm:p-4 shadow-soft group-hover:shadow-medium transition-shadow">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">{t.contact.email}</h3>
                  <a 
                    href="mailto:cleanpoolkefalonia@gmail.com" 
                    className="text-secondary hover:text-secondary/80 active:text-secondary/90 transition-colors font-medium text-sm sm:text-base break-all"
                  >
                    cleanpoolkefalonia@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <div className="pt-4 sm:pt-6">
              <h3 className="font-semibold text-foreground mb-5 sm:mb-6 text-base sm:text-lg">{t.contact.followUs}</h3>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="https://www.facebook.com/cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-ocean text-primary-foreground rounded-full p-3 sm:p-3.5 hover:shadow-glow active:scale-90 transition-all hover:scale-110 touch-manipulation"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/cleanpoolkefalonia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-ocean text-primary-foreground rounded-full p-3 sm:p-3.5 hover:shadow-glow active:scale-90 transition-all hover:scale-110 touch-manipulation"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-ocean text-primary-foreground rounded-full p-3 sm:p-3.5 hover:shadow-glow active:scale-90 transition-all hover:scale-110 touch-manipulation"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 sm:p-8 shadow-medium border-border/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.name} *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 text-base touch-manipulation"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.phone} *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-12 text-base touch-manipulation"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.email} *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 text-base touch-manipulation"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  {t.contact.form.message} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none text-base touch-manipulation"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <Button 
                type="submit" 
                variant="hero"
                size="lg"
                className="w-full bg-gradient-ocean hover:opacity-90 active:scale-95 text-primary-foreground font-bold h-14 text-base shadow-soft hover:shadow-accent transition-all duration-300 hover:scale-[1.02] touch-manipulation"
              >
                {t.contact.form.submit}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
