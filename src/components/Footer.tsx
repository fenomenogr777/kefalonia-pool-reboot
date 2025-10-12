import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Clean Pool Kefalonia</h3>
            <p className="text-primary-foreground/80 text-sm">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contactTitle}</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>{t.footer.phone}: 698 740 4210</p>
              <p>Email: cleanpoolkefalonia@gmail.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.scheduleTitle}</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>{t.footer.days}</p>
              <p>{t.footer.available}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Clean Pool Kefalonia. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
