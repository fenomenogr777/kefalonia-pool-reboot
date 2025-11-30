import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
  const { t } = useLanguage();

  const googleReviewsUrl = "https://www.google.com/maps/place/Clean+Pool+Kefalonia+%E2%80%93+%CE%A3%CF%85%CE%BD%CF%84%CE%AE%CF%81%CE%B7%CF%83%CE%B7+%26+%CE%9A%CE%B1%CE%B8%CE%B1%CF%81%CE%B9%CF%83%CE%BC%CF%8C%CF%82+%CE%A0%CE%B9%CF%83%CE%AF%CE%BD%CE%B1%CF%82/@38.2662511,20.4115987,54612m/data=!3m1!1e3!4m14!1m5!8m4!1e1!2s116236589460706263358!3m1!1e1!3m7!1s0xab644146e42a63b:0xc4a74dc9b3ca0ae9!8m2!3d38.2660968!4d20.576406!9m1!1b1!16s%2Fg%2F11wjk5w_qv?hl=el&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <a 
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-4xl mx-auto text-center hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
        >
          <div className="inline-flex items-center gap-3 mb-8 bg-card/60 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-promo/20 shadow-accent group-hover:shadow-glow transition-all duration-300 group-hover:border-promo/40">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-promo text-promo group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
              ))}
            </div>
            <span className="text-3xl font-bold text-foreground">5.0</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
            {t.reviews.title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {t.reviews.subtitle}
          </p>
          
          <div className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-primary bg-primary/10 border-2 border-primary/30 px-8 py-4 rounded-full group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-soft group-hover:shadow-accent">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-base">Google Reviews</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Reviews;
