import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img05.jpg", alt: "Pool and villa" },
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img11.jpg", alt: "Front page pool" },
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img06.jpg", alt: "Pool and villa" },
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img15.jpg", alt: "Girl sitting on pool" },
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img16.jpg", alt: "Pool" },
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img22.jpg", alt: "Clear pool" },
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img07.jpg", alt: "Fancy pool" },
    { src: "https://cleanpoolkefalonia.gr/images/page-1_img12.jpg", alt: "Big pool" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-primary-foreground h-8 w-8" />
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
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
