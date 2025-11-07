import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-ocean text-primary-foreground py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Clean Pool Kefalonia</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">{t.footer.contactTitle}</h3>
            <div className="space-y-3 text-primary-foreground/90">
              <p className="font-medium">{t.footer.phone}: 698 740 4210</p>
              <p className="font-medium">Email: cleanpoolkefalonia@gmail.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">{t.footer.scheduleTitle}</h3>
            <div className="space-y-3 text-primary-foreground/90">
              <p className="font-medium">{t.footer.days}</p>
              <p className="font-medium">{t.footer.available}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Clean Pool Kefalonia. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
