import { Check } from "lucide-react";

const About = () => {
  const stats = [
    { value: "6", label: "Μέρες την εβδομάδα" },
    { value: "24", label: "Ωρες την μέρα Διαθέσιμοι" },
    { value: "500+", label: "Επισκέψεις σε Πισίνες κάθε Σεζόν" },
    { value: "100%", label: "Επαγγελματισμός" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ΠΟΙΟΙ ΕΙΜΑΣΤΕ
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Η <strong className="text-primary">Clean Pool Kefalonia</strong> είναι μια εξειδικευμένη επιχείρηση 
              συντήρησης και καθαρισμού πισίνας με πολυετή εμπειρία στην Κεφαλονιά. Παρέχουμε επαγγελματικές 
              υπηρεσίες σε ιδιωτικές κατοικίες, τουριστικές βίλες και ξενοδοχειακά καταλύματα σε όλο το νησί.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Αναλαμβάνουμε υπεύθυνα τη συνολική φροντίδα της πισίνας σας – από τον τακτικό καθαρισμό και την 
              ρύθμιση των χημικών, μέχρι τον έλεγχο εξοπλισμού και την αντιμετώπιση ειδικών προβλημάτων όπως 
              άλγες ή θολό νερό.
            </p>
            
            <div className="space-y-3">
              {[
                "Πιστοποιημένοι επαγγελματίες",
                "Σύγχρονος εξοπλισμός",
                "Προσιτές τιμές",
                "Άμεση εξυπηρέτηση"
              ].map((item, index) => (
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
