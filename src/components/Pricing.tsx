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
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border-2 border-primary rounded-2xl shadow-elegant overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 text-center">
              <div className="inline-block bg-primary-foreground/20 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {t.pricing.badge}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {t.pricing.packageName}
              </h3>
              <div className="flex flex-col items-center gap-1 mt-6">
                <span className="text-sm opacity-80">{t.pricing.fromOnly}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold">220€</span>
                  <span className="text-xl opacity-90">/{t.pricing.perMonth}</span>
                </div>
              </div>
              <p className="mt-4 text-primary-foreground/90">
                {t.pricing.priceNote}
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-6">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">Βασικές υπηρεσίες</h4>
                <div className="space-y-3">
                  {basicFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-1">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 pt-6 border-t border-border">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">Επιπλέον υπηρεσίες</h4>
                <div className="space-y-3">
                  {extraFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-promo/10 rounded-full p-1 mt-1">
                        <Check className="w-5 h-5 text-promo" />
                      </div>
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="w-full text-lg h-14 shadow-elegant hover:shadow-soft transition-all"
                >
                  {t.pricing.ctaPrimary}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full text-lg h-14"
                >
                  <a href="tel:+306948517251">
                    <Phone className="w-5 h-5 mr-2" />
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
