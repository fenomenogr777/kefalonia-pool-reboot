import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const basicFeatures = [
    t.pricing.feature1,
    t.pricing.feature2,
    t.pricing.feature3,
    t.pricing.feature4,
  ];

  const extraFeatures = [
    t.pricing.extra1,
    t.pricing.extra2,
    t.pricing.extra3,
    t.pricing.extra4,
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card border border-border rounded-lg shadow-soft overflow-hidden">
            {/* Header */}
            <div className="bg-charcoal text-white p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">
                {t.pricing.packageName}
              </h3>
              <div className="flex flex-col items-center gap-1 mt-6">
                <span className="text-sm text-white/70">{t.pricing.fromOnly}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-semibold text-primary">220€</span>
                  <span className="text-lg text-white/80">/{t.pricing.perMonth}</span>
                </div>
              </div>
              <p className="mt-4 text-white/60 text-sm max-w-sm mx-auto">
                Η τελική τιμή εξαρτάται από το μέγεθος της πισίνας και τις επιλεγμένες υπηρεσίες
              </p>
            </div>

            {/* Features */}
            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                  Βασικές υπηρεσίες
                </h4>
                <div className="space-y-4">
                  {basicFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10 pt-6 border-t border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                  Επιπλέον υπηρεσίες
                </h4>
                <div className="space-y-4">
                  {extraFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold hover:shadow-elegant transition-all"
                >
                  {t.pricing.ctaPrimary}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full h-12 text-base border-border text-charcoal hover:bg-secondary"
                >
                  <a href="tel:+306987404210" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t.pricing.ctaSecondary}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
