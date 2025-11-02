import { Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
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

        {/* Reviews Section */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="text-center mb-10 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-bold text-foreground">{t.reviews.rating}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {t.reviews.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.reviews.businessName}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.reviews.reviews.map((review, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/30">
                  <span className="font-medium text-foreground">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
