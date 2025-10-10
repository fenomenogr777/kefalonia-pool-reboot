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

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Καλοκαιρινη ΠΕΡΙΟΔΟΣ",
      description: "Αναλαμβάνουμε τη συντήρηση της πισίνας της βίλας σας κατά την καλοκαιρινή περίοδο, διασφαλίζοντας καθαρό και ασφαλές νερό."
    },
    {
      icon: Droplets,
      title: "Ανοιγμα Πισινας",
      description: "Το άνοιγμα μιας πισίνας είναι μια διαδικασία που απαιτεί επαγγελματική φροντίδα για να διασφαλιστεί η υγιεινή και ασφαλής χρήση της."
    },
    {
      icon: Snowflake,
      title: "Κλεισιμο Πισινας",
      description: "Το σωστό κλείσιμο της πισίνας σας στο τέλος της κολυμβητικής περιόδου είναι απαραίτητο για να διατηρηθεί σε άριστη κατάσταση."
    },
    {
      icon: FlaskConical,
      title: "Ελεγχος χημικων",
      description: "Η διατήρηση της σωστής χημικής ισορροπίας του νερού είναι κρίσιμη για την ασφάλεια και την υγιεινή της πισίνας σας."
    },
    {
      icon: Sparkles,
      title: "Καθαρισμος",
      description: "Η καθαριότητα της πισίνας σας είναι ζωτικής σημασίας για την υγιεινή και την ευχαρίστηση των χρηστών."
    },
    {
      icon: Wrench,
      title: "Συντηρηση Εξοπλισμου",
      description: "Η συντήρηση του εξοπλισμού της πισίνας είναι απαραίτητη για την ομαλή και αποδοτική λειτουργία της."
    },
    {
      icon: PackagePlus,
      title: "ΠΑΡΟΧΗ ΧΗΜΙΚΩΝ",
      description: "Αναλαμβάνουμε την πλήρη παροχή χημικών προϊόντων για την πισίνα σας, εξασφαλίζοντας ότι δεν θα χρειαστεί να ανησυχείτε."
    },
    {
      icon: AlertCircle,
      title: "ΕΚΤΑΚΤΗ ΣΥΝΤΗΡΗΣΗ",
      description: "Ανταποκρινόμαστε άμεσα σε περιπτώσεις έκτακτης ανάγκης, επαναφέροντας την πισίνα σας στην ιδανική της κατάσταση."
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ΥΠΗΡΕΣΙΕΣ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ολοκληρωμένες λύσεις συντήρησης για την πισίνα σας
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
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
