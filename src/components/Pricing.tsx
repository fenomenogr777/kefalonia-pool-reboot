import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const packages = [
    {
      key: "lite" as const,
      popular: false,
    },
    {
      key: "professional" as const,
      popular: true,
    },
    {
      key: "premium" as const,
      popular: false,
    },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const packageData = t.pricing[pkg.key];
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.key}
                className={`relative bg-card border rounded-lg overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? "border-primary shadow-gold scale-105 z-10"
                    : "border-border shadow-soft hover:border-primary/30 hover:shadow-medium"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    {t.pricing.badge}
                  </div>
                )}

                {/* Header */}
                <div
                  className={`p-6 sm:p-8 text-center ${
                    isPopular ? "bg-charcoal text-white pt-12" : "bg-secondary/50"
                  }`}
                >
                  <h3
                    className={`text-xl sm:text-2xl font-semibold mb-2 ${
                      isPopular ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {packageData.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      isPopular ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {packageData.visits}
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className={`text-xs ${
                        isPopular ? "text-white/60" : "text-muted-foreground"
                      }`}
                    >
                      {t.pricing.fromOnly}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-4xl sm:text-5xl font-semibold ${
                          isPopular ? "text-primary" : "text-charcoal"
                        }`}
                      >
                        {packageData.price}€
                      </span>
                      <span
                        className={`text-sm ${
                          isPopular ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        /{t.pricing.perMonth}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 sm:p-8">
                  <div className="space-y-3 mb-8">
                    {packageData.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`rounded-full p-1 mt-0.5 ${
                            isPopular ? "bg-primary/20" : "bg-primary/10"
                          }`}
                        >
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={scrollToContact}
                      size="lg"
                      className={`w-full h-11 text-sm font-semibold transition-all ${
                        isPopular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold hover:shadow-elegant"
                          : "bg-charcoal hover:bg-charcoal-light text-white"
                      }`}
                    >
                      {t.pricing.ctaPrimary}
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full h-11 text-sm border-border text-charcoal hover:bg-secondary"
                    >
                      <a
                        href="tel:+306987404210"
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        {t.pricing.ctaSecondary}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.pricing.priceNote}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
