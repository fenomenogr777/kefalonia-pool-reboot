import { Shield, Clock, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">{feature.title}</h3>
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
