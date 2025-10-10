import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success("Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε σύντομα μαζί σας.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
          </h2>
          <p className="text-xl text-muted-foreground">
            Είμαστε εδώ για να σας εξυπηρετήσουμε
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-ocean rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Τηλέφωνο</h3>
                  <a 
                    href="tel:6987404210" 
                    className="text-secondary hover:text-secondary/80 transition-colors text-lg"
                  >
                    698 740 4210
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-ocean rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:info@cleanpoolkefalonia.gr" 
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    info@cleanpoolkefalonia.gr
                  </a>
                </div>
              </div>
            </Card>

            <div className="pt-6">
              <h3 className="font-semibold text-foreground mb-4">Ακολουθήστε μας</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-ocean text-primary-foreground rounded-full p-3 hover:shadow-glow transition-all hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/cleanpoolkefalonia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-ocean text-primary-foreground rounded-full p-3 hover:shadow-glow transition-all hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@cleanpoolkefalonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-ocean text-primary-foreground rounded-full p-3 hover:shadow-glow transition-all hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-soft animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Όνομα *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Το όνομά σας"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Κινητό *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Το τηλέφωνό σας"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Μήνυμα *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Πείτε μας πώς μπορούμε να σας βοηθήσουμε..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
