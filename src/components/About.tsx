import { Check, Star, UserCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  // Use static reviews from translations
  const reviews = t.reviews.reviews;
  const rating = t.reviews.rating;

  const stats = [
    { value: "6", label: t.about.stats.days },
    { value: "24", label: t.about.stats.hours },
    { value: "500+", label: t.about.stats.visits },
    { value: "100%", label: t.about.stats.professionalism },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.about.title}
            </h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              {t.about.description2}
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {[t.about.certified, t.about.modern, t.about.affordable, t.about.service].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-1 flex-shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section - Compact */}
        <div className="mt-12 pt-10 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-bold text-foreground">{rating}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                {t.reviews.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {t.reviews.businessName}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                onClick={() => window.open(review.link, '_blank')}
                className="p-4 hover:shadow-medium transition-all duration-300 animate-fade-in-up bg-card/70 backdrop-blur-sm border-border/40 cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/20">
                  <div className="flex items-center gap-1.5">
                    <UserCircle className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground text-xs">{review.author}</span>
                  </div>
                  <span className="text-xs">{review.date}</span>
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
