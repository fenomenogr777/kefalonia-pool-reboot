import { Card } from "@/components/ui/card";
import { 
  Droplets, 
  Sun, 
  Snowflake, 
  FlaskConical, 
  Sparkles, 
  Wrench,
  PackagePlus,
  AlertCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const iconMap = [Sun, Droplets, Snowflake, FlaskConical, Sparkles, Wrench, PackagePlus, AlertCircle];

  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-14 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.services.list.map((service, index) => {
            const Icon = iconMap[index];
            return (
              <Card 
                key={index}
                className="p-6 sm:p-7 hover:shadow-medium active:scale-[0.98] transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up touch-manipulation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-ocean rounded-xl w-16 h-16 flex items-center justify-center mb-5 shadow-soft">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
