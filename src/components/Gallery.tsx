import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Πολυτελής πισίνα με θέα", tall: true },
    { src: gallery2, alt: "Κρυστάλλινο νερό πισίνας", tall: false },
    { src: gallery3, alt: "Πισίνα με θέα θάλασσα", tall: false },
    { src: gallery4, alt: "Infinity pool Κεφαλονιά", tall: true },
    { src: gallery5, alt: "Μοντέρνα πισίνα", tall: false },
    { src: gallery6, alt: "Καθαρή πισίνα με βίλα", tall: true },
    { src: gallery7, alt: "Κομψή πισίνα", tall: true },
    { src: gallery8, alt: "Πισίνα με ελιές", tall: false },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Τα Έργα Μας
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Masonry Grid */}
        <div ref={ref} className="columns-2 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid transition-all duration-500 hover:shadow-elegant ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${
                  image.tall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-sm font-medium drop-shadow-lg">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg animate-scale-in"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
