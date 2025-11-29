import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Το όνομα είναι υποχρεωτικό").max(100, "Το όνομα πρέπει να είναι μικρότερο από 100 χαρακτήρες"),
  email: z.string().trim().email("Μη έγκυρη διεύθυνση email").max(255, "Το email πρέπει να είναι μικρότερο από 255 χαρακτήρες"),
  phone: z.string().trim().min(1, "Το τηλέφωνο είναι υποχρεωτικό").max(20, "Το τηλέφωνο πρέπει να είναι μικρότερο από 20 χαρακτήρες"),
  message: z.string().trim().min(1, "Το μήνυμα είναι υποχρεωτικό").max(2000, "Το μήνυμα πρέπει να είναι μικρότερο από 2000 χαρακτήρες")
});

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
      // Validate form data
      const validated = contactSchema.parse(formData);
      
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: validated
      });

      if (error) throw error;

      toast.success(t.contact.form.success);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε ξανά.");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-primary/5 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Επικοινωνήστε</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-4 animate-fade-in order-2 md:order-1">
            <Card className="p-5 sm:p-6 hover:shadow-soft active:scale-[0.99] transition-all duration-300 border-border/40 hover:border-primary/30 group touch-manipulation">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-3 shadow-soft">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t.contact.phone}</h3>
                  <a 
                    href="tel:6987404210" 
                    className="text-primary hover:text-primary/80 active:text-primary/90 transition-colors text-base sm:text-lg font-semibold"
                  >
                    698 740 4210
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-5 sm:p-6 hover:shadow-soft active:scale-[0.99] transition-all duration-300 border-border/40 hover:border-primary/30 group touch-manipulation">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-3 shadow-soft">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{t.contact.email}</h3>
                  <a 
                    href="mailto:cleanpoolkefalonia@gmail.com" 
                    className="text-primary hover:text-primary/80 active:text-primary/90 transition-colors font-medium text-xs sm:text-sm break-all"
                  >
                    cleanpoolkefalonia@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <div className="pt-3">
              <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{t.contact.followUs}</h3>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground rounded-full p-3 hover:shadow-soft active:scale-90 transition-all hover:scale-105 touch-manipulation"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/cleanpoolkefalonia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground rounded-full p-3 hover:shadow-soft active:scale-90 transition-all hover:scale-105 touch-manipulation"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground rounded-full p-3 hover:shadow-soft active:scale-90 transition-all hover:scale-105 touch-manipulation"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-5 sm:p-6 shadow-soft border-border/40 animate-fade-in-up order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {t.contact.form.name} *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-11 text-sm touch-manipulation"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {t.contact.form.phone} *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-11 text-sm touch-manipulation"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {t.contact.form.email} *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-11 text-sm touch-manipulation"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  {t.contact.form.message} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none text-sm touch-manipulation"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-primary-foreground font-semibold h-12 text-sm shadow-soft hover:shadow-medium transition-all duration-300 touch-manipulation"
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
