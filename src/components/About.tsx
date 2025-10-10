import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const stats = [
    { value: "6", label: t.about.stats.days },
    { value: "24", label: t.about.stats.hours },
    { value: "500+", label: t.about.stats.visits },
    { value: "100%", label: t.about.stats.professionalism },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.description2}
            </p>
            
            <div className="space-y-3">
              {[t.about.certified, t.about.modern, t.about.affordable, t.about.service].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
