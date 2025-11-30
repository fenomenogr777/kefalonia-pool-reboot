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
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">{t.whyChooseUs.title}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.whyChooseUs.subtitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-accent transition-all duration-300 border-2 border-border hover:border-primary/30 hover:scale-105 group"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
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
