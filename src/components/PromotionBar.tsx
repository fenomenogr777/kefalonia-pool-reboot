import { X, Tag } from "lucide-react";
import { useState } from "react";

const PromotionBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-20 md:right-6 md:top-24 z-40">
      <div 
        className={`bg-promo text-promo-foreground rounded-full shadow-xl shadow-promo/30 transition-all duration-300 hover:shadow-2xl hover:shadow-promo/40 hover:scale-105 ${
          isExpanded ? 'px-3 py-2 md:px-4 md:py-2' : 'px-2 py-2 md:px-3 md:py-2'
        }`}
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 md:gap-2 hover:scale-105 transition-transform touch-manipulation active:scale-95"
          >
            <Tag className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
            <span className="text-[10px] md:text-xs font-bold leading-tight">
              Νέος πελάτης;<br className="md:hidden" />
              <span className="hidden md:inline"> </span>Κέρδισε -10% τώρα
            </span>
          </button>
          
          {isExpanded && (
            <>
              <button
                onClick={handleClick}
                className="bg-promo-foreground text-promo px-2.5 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-semibold hover:scale-105 transition-transform animate-fade-in whitespace-nowrap touch-manipulation active:scale-95"
              >
                Ζήτα την προσφορά
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-promo-foreground/20 rounded-full transition-colors animate-fade-in touch-manipulation active:scale-95"
                aria-label="Close promotion"
              >
                <X className="h-3 w-3 md:h-3.5 md:w-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionBar;
