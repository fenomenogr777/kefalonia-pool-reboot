import { Check, Star, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
    <section id="about" className="relative py-20 sm:py-28 bg-gradient-light overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/5 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-wider uppercase">Εμπειρία & Αξιοπιστία</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {t.about.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
            {/* Text Content */}
            <div className="animate-fade-in space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t.about.description2}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[t.about.certified, t.about.modern, t.about.affordable, t.about.service].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="bg-gradient-ocean text-primary-foreground rounded-full p-2.5 shadow-soft group-hover:shadow-medium transition-shadow flex-shrink-0">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-foreground text-base font-medium group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 animate-fade-in-up">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-glow active:scale-95 transition-all duration-300 text-center border border-border/50 hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden touch-manipulation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-ocean bg-clip-text text-transparent mb-3">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section - Professional */}
          <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-border/20">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xl sm:text-2xl font-bold text-foreground">{rating}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              {t.reviews.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.reviews.businessName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                onClick={() => window.open(review.link, '_blank')}
                className="group relative p-5 sm:p-6 hover:shadow-glow active:scale-95 transition-all duration-500 animate-fade-in-up bg-card border-border/50 cursor-pointer hover:scale-[1.03] hover:border-primary/30 hover:-translate-y-2 touch-manipulation"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                  <div className="bg-primary/10 rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed italic min-h-[80px]">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-9 h-9 ring-2 ring-primary/10">
                      <AvatarImage src={review.photoUrl} alt={review.author} />
                      <AvatarFallback className="text-xs bg-gradient-ocean text-white font-semibold">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-semibold text-foreground text-sm block">{review.author}</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
