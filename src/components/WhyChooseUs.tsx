import { Shield, Clock, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const features = [
    {
      icon: Shield,
      title: t.whyChooseUs.feature1Title,
      description: t.whyChooseUs.feature1Desc,
    },
    {
      icon: Clock,
      title: t.whyChooseUs.feature2Title,
      description: t.whyChooseUs.feature2Desc,
    },
    {
      icon: Award,
      title: t.whyChooseUs.feature3Title,
      description: t.whyChooseUs.feature3Desc,
    },
    {
      icon: CheckCircle,
      title: t.whyChooseUs.feature4Title,
      description: t.whyChooseUs.feature4Desc,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            {t.whyChooseUs.title}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal">
            {t.whyChooseUs.subtitle}
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-xl border border-border hover:border-primary/40 hover:shadow-medium transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
