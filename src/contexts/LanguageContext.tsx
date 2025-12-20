import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("el");

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  // Defensive fallback: prevents a full blank-screen if a component renders outside the provider.
  // This should not happen in normal app flow (provider is mounted in App.tsx).
  if (!context) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn("useLanguage called outside LanguageProvider; falling back to default language");
    }

    const defaultLanguage: Language = "el";
    return {
      language: defaultLanguage,
      setLanguage: () => {},
      t: translations[defaultLanguage],
    } satisfies LanguageContextType;
  }

  return context;
};

