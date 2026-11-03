"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from "lucide-react";
import { siteConfig, GalleryItem } from "@/config/site";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "सभी झलकियां" },
    { key: "medical", label: "बीमार व घायल गौसेवा" },
    { key: "shelter", label: "गौशाला परिसर व झुंड" },
    { key: "care", label: "दैनिक चारा सेवा" },
    { key: "cows", label: "गौमाता एवं बछड़े" },
  ];

  const filteredImages = siteConfig.gallery.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  const handlePrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        prev === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1
      );
    }
  }, [selectedImage, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((prev) =>
        prev === filteredImages.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  }, [selectedImage, filteredImages.length]);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Global keyboard shortcuts for lightbox navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage, handleClose, handlePrevious, handleNext]);

  const currentItem: GalleryItem | undefined =
    selectedImage !== null ? filteredImages[selectedImage] : undefined;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#fdfaf6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100/80 rounded-full text-[#7c2200] text-xs sm:text-sm font-bold border border-orange-300/40 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#e65100]" />
            <span>गौशाला की पावन झलक</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7c2200] tracking-tight mb-4">
            हमारी गौशाला का दृश्य
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            हुणालनगर (खींवसर) स्थित गौशाला परिसर में बीमार व बेसहारा गौमाता की चिकित्सा, चारा सेवा और वात्सल्य की वास्तविक तस्वीरें।
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedImage(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-[#c43c00] via-[#e65100] to-[#ff6d00] text-white shadow-md shadow-orange-600/30 scale-105 border border-amber-300/40"
                  : "bg-white text-stone-700 hover:bg-orange-50 border border-orange-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(index)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-[#c43c00] bg-stone-900"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient Overlay & Captions */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold bg-[#7c2200]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-200 border border-amber-300/30">
                    {image.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white drop-shadow mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Top Bar with Counter and Close Button */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="px-4 py-1.5 bg-[#c43c00]/80 backdrop-blur-md rounded-full text-white text-xs font-mono border border-amber-300/30">
                {selectedImage + 1} / {filteredImages.length}
              </div>
              <button
                onClick={handleClose}
                className="p-3 bg-white/15 hover:bg-white/25 rounded-full text-white transition-colors focus:outline-none"
                aria-label="गैलरी बंद करें"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-white/15 hover:bg-[#c43c00]/80 rounded-full text-white transition-all z-20 focus:outline-none"
              aria-label="पिछली तस्वीर"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Main Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full max-h-[82vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Bottom Caption Pill */}
              <div className="mt-4 bg-stone-900/90 backdrop-blur-md px-6 py-3 rounded-2xl max-w-2xl text-center border border-amber-400/20">
                <h4 className="text-base sm:text-lg font-bold text-amber-300 mb-1">
                  {currentItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-300">
                  {currentItem.description}
                </p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-white/15 hover:bg-[#c43c00]/80 rounded-full text-white transition-all z-20 focus:outline-none"
              aria-label="अगली तस्वीर"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
