import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
    { src: gallery1, alt: "Πολυτελής πισίνα με θέα" },
    { src: gallery2, alt: "Κρυστάλλινο νερό πισίνας" },
    { src: gallery3, alt: "Πισίνα με θέα θάλασσα" },
    { src: gallery4, alt: "Infinity pool Κεφαλονιά" },
    { src: gallery5, alt: "Μοντέρνα πισίνα" },
    { src: gallery6, alt: "Καθαρή πισίνα με βίλα" },
    { src: gallery7, alt: "Κομψή πισίνα" },
    { src: gallery8, alt: "Πισίνα με ελιές" },
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

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-xl cursor-pointer border-2 border-transparent hover:border-primary/50 transition-all duration-500 ${
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
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
