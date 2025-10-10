const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clean Pool Kefalonia</h3>
            <p className="text-primary-foreground/80 text-sm">
              Επαγγελματικές υπηρεσίες συντήρησης και καθαρισμού πισίνας στην Κεφαλονιά.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Επικοινωνία</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Τηλ: 698 740 4210</p>
              <p>Email: info@cleanpoolkefalonia.gr</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ωράριο</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Δευτέρα - Σάββατο</p>
              <p>24 ώρες διαθέσιμοι</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Clean Pool Kefalonia. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
