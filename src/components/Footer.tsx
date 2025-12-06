import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-charcoal text-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              <span className="text-primary">Clean Pool</span> Kefalonia
            </h3>
            <p className="text-white/60 leading-relaxed text-sm">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t.footer.contactTitle}</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <p>{t.footer.phone}: 698 740 4210</p>
              <p>Email: cleanpoolkefalonia@gmail.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t.footer.scheduleTitle}</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <p>{t.footer.days}</p>
              <p>{t.footer.available}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Clean Pool Kefalonia. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
