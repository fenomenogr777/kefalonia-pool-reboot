import { Check, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

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
    <section id="pricing" className="py-24 sm:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block animate-fade-in">
            {t.pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          {packages.map((pkg, index) => {
            const packageData = t.pricing[pkg.key];
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.key}
                className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${
                  isPopular
                    ? "bg-charcoal text-white shadow-elegant md:scale-105 z-10 ring-2 ring-primary"
                    : "bg-card border border-border shadow-soft hover:shadow-medium hover:border-primary/30"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2.5 text-sm font-semibold flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    {t.pricing.badge}
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                )}

                {/* Header */}
                <div
                  className={`p-8 text-center ${
                    isPopular ? "pt-14 pb-8" : "py-8 border-b border-border"
                  }`}
                >
                  <h3
                    className={`text-2xl font-semibold mb-2 ${
                      isPopular ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {packageData.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      isPopular ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {packageData.visits}
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className={`text-xs uppercase tracking-wider ${
                        isPopular ? "text-white/50" : "text-muted-foreground"
                      }`}
                    >
                      {t.pricing.fromOnly}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-5xl font-bold tracking-tight ${
                          isPopular ? "text-primary" : "text-charcoal"
                        }`}
                      >
                        {packageData.price}
                      </span>
                      <span
                        className={`text-xl font-medium ${
                          isPopular ? "text-primary" : "text-charcoal"
                        }`}
                      >
                        €
                      </span>
                      <span
                        className={`text-sm ${
                          isPopular ? "text-white/60" : "text-muted-foreground"
                        }`}
                      >
                        /{t.pricing.perMonth}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className={`flex-1 p-8 ${isPopular ? "bg-charcoal" : ""}`}>
                  <div className="space-y-4 mb-8">
                    {packageData.features.map((feature: string, idx: number) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 transition-all duration-300 ${
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${index * 150 + idx * 50 + 200}ms` : "0ms",
                        }}
                      >
                        <div
                          className={`flex-shrink-0 rounded-full p-1 ${
                            isPopular ? "bg-primary/20" : "bg-primary/10"
                          }`}
                        >
                          <Check className={`w-4 h-4 ${isPopular ? "text-primary" : "text-primary"}`} />
                        </div>
                        <span
                          className={`text-sm leading-relaxed ${
                            isPopular ? "text-white/90" : "text-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className={`p-8 pt-0 ${isPopular ? "bg-charcoal" : ""}`}>
                  <div className="space-y-3">
                    <Button
                      onClick={scrollToContact}
                      size="lg"
                      className={`w-full h-12 text-base font-semibold transition-all duration-300 ${
                        isPopular
                          ? "bg-primary hover:bg-primary-light text-charcoal shadow-gold hover:shadow-elegant hover:scale-[1.02]"
                          : "bg-charcoal hover:bg-charcoal-light text-white hover:scale-[1.02]"
                      }`}
                    >
                      {t.pricing.ctaPrimary}
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className={`w-full h-12 text-base transition-all duration-300 hover:scale-[1.02] ${
                        isPopular
                          ? "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50"
                          : "border-border text-charcoal hover:bg-secondary hover:border-primary/30"
                      }`}
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

        <p className="text-center text-sm text-muted-foreground mt-10">
          {t.pricing.priceNote}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
