import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  const phoneNumber = "306974029244"; // Αντικατάστησε με τον αριθμό σου
  const message = language === 'el' 
    ? "Γεια σας! Θα ήθελα περισσότερες πληροφορίες για τις υπηρεσίες συντήρησης πισίνας."
    : "Hello! I would like more information about pool maintenance services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-75 blur-md group-hover:opacity-100 transition-opacity" />
        
        {/* Main button */}
        <div className="relative bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 touch-manipulation group-hover:scale-110">
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.5} />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-medium text-sm font-semibold">
          {language === 'el' ? 'Στείλτε μήνυμα' : 'Send message'}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-foreground" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
