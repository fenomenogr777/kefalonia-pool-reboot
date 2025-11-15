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
    <div className="fixed right-6 top-24 z-40">
      <div 
        className={`bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 ${
          isExpanded ? 'px-4 py-2' : 'px-3 py-2'
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Tag className="h-4 w-4" />
            <span className="text-sm font-bold whitespace-nowrap">
              10% έκπτωση
            </span>
          </button>
          
          {isExpanded && (
            <>
              <button
                onClick={handleClick}
                className="bg-primary-foreground text-primary px-3 py-1 rounded-full text-xs font-semibold hover:scale-105 transition-transform animate-fade-in"
              >
                Επικοινωνία
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors animate-fade-in"
                aria-label="Close promotion"
              >
                <X className="h-3 w-3" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionBar;
