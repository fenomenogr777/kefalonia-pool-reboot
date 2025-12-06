import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Επικοινωνήστε
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="p-6 border border-border rounded-lg hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">{t.contact.phone}</h3>
                  <a 
                    href="tel:6987404210" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    698 740 4210
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border rounded-lg hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-charcoal mb-1">{t.contact.email}</h3>
                  <a 
                    href="mailto:cleanpoolkefalonia@gmail.com" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-sm break-all"
                  >
                    cleanpoolkefalonia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-charcoal mb-4">{t.contact.followUs}</h3>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal text-white rounded-lg p-3 hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/cleanpoolkefalonia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal text-white rounded-lg p-3 hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal text-white rounded-lg p-3 hover:bg-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-border rounded-lg p-6 sm:p-8 order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  {t.contact.form.name} *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-11 border-border focus:border-primary"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                  {t.contact.form.phone} *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-11 border-border focus:border-primary"
                  placeholder={t.contact.form.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  {t.contact.form.email} *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-11 border-border focus:border-primary"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  {t.contact.form.message} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none border-border focus:border-primary"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold hover:shadow-elegant transition-all"
              >
                {t.contact.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
