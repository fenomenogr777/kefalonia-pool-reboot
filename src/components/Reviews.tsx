import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Reviews = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const googleReviewsUrl = "https://www.google.com/maps/place/Clean+Pool+Kefalonia+%E2%80%93+%CE%A3%CF%85%CE%BD%CF%84%CE%AE%CF%81%CE%B7%CF%83%CE%B7+%26+%CE%9A%CE%B1%CE%B8%CE%B1%CF%81%CE%B9%CF%83%CE%BC%CF%8C%CF%82+%CE%A0%CE%B9%CF%83%CE%AF%CE%BD%CE%B1%CF%82/@38.2662511,20.4115987,54612m/data=!3m1!1e3!4m14!1m5!8m4!1e1!2s116236589460706263358!3m1!1e1!3m7!1s0xab644146e42a63b:0xc4a74dc9b3ca0ae9!8m2!3d38.2660968!4d20.576406!9m1!1b1!16s%2Fg%2F11wjk5w_qv?hl=el&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

  // Get first review as featured testimonial
  const featuredReview = t.reviews.reviews?.[0];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6">
        <a 
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-3xl mx-auto text-center group"
        >
          {/* Stars with staggered animation */}
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-7 h-7 fill-primary text-primary transition-all duration-500 group-hover:scale-110 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }} 
                />
              ))}
            </div>
            <span className={`text-4xl font-bold text-charcoal transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              5.0
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4 group-hover:text-primary transition-colors">
            {t.reviews.title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
            {t.reviews.subtitle}
          </p>

          {/* Featured Testimonial */}
          {featuredReview && (
            <div className={`relative bg-background rounded-2xl p-8 mb-10 shadow-soft border border-border group-hover:shadow-medium group-hover:border-primary/20 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`} style={{ transitionDelay: '300ms' }}>
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 left-6" />
              <p className="text-foreground/80 italic text-base sm:text-lg leading-relaxed mb-4 px-4">
                "{featuredReview.text}"
              </p>
              <p className="text-sm font-semibold text-charcoal">— {featuredReview.author}</p>
            </div>
          )}
          
          {/* Google Reviews Link */}
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-charcoal border border-border px-6 py-3 rounded-full group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Google Reviews</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Reviews;
