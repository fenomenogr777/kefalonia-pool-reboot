import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white relative">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16 sm:py-20">
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

        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Clean Pool Kefalonia. {t.footer.rights}
          </p>
          <button
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-primary text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
