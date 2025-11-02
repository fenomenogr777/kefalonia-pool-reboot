import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            {t.reviews.title}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {t.reviews.businessName}
            </h3>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">{t.reviews.rating}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.reviews.reviews.map((review, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{review.author}</span>
                <span>{review.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
