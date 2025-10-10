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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.list.map((service, index) => {
            const Icon = iconMap[index];
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-ocean rounded-lg w-14 h-14 flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
