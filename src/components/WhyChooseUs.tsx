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
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 border border-border"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
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
