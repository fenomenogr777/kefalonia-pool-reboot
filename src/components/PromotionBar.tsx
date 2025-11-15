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
    <div className="fixed right-6 top-24 z-40 flex items-center gap-2">
      {isExpanded && (
        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg animate-fade-in flex items-center gap-2">
          <span className="text-sm font-medium whitespace-nowrap">
            10% έκπτωση
          </span>
          <button
            onClick={handleClick}
            className="bg-primary-foreground text-primary px-3 py-1 rounded-full text-xs font-semibold hover:scale-105 transition-transform"
          >
            Επικοινωνία
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors ml-1"
            aria-label="Close promotion"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Promotion"
      >
        <Tag className="h-5 w-5" />
      </button>
    </div>
  );
};

export default PromotionBar;
