import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const PromotionBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 gap-4">
          <div className="flex-1 flex items-center justify-center gap-3">
            <span className="text-sm md:text-base font-medium">
              10% έκπτωση – Πάτησε για περισσότερα
            </span>
            <Button
              onClick={handleClick}
              variant="secondary"
              size="sm"
              className="whitespace-nowrap text-xs md:text-sm"
            >
              Επικοινωνία
            </Button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
            aria-label="Close promotion"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionBar;
