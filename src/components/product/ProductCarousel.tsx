"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";

interface ProductCarouselProps {
  images: string[];
  productName: string;
}

export default function ProductCarousel({ images, productName }: ProductCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainCarouselRef, mainCarousel] = useEmblaCarousel();
  const [thumbCarouselRef, thumbCarousel] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = (index: number) => {
    if (!mainCarousel || !thumbCarousel) return;
    mainCarousel.scrollTo(index);
  };

  const onSelect = () => {
    if (!mainCarousel || !thumbCarousel) return;
    setSelectedIndex(mainCarousel.selectedScrollSnap());
    thumbCarousel.scrollTo(mainCarousel.selectedScrollSnap());
  };

  useEffect(() => {
    if (!mainCarousel) return;
    mainCarousel.on("select", onSelect);
    return () => {
      mainCarousel.off("select", onSelect);
    };
  }, [mainCarousel]);

  return (
    <div>
      {/* Carrousel principal */}
      <div className="overflow-hidden rounded-xl" ref={mainCarouselRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative min-w-full" key={index}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={`${productName} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Miniatures */}
      <div className="mt-4 overflow-hidden" ref={thumbCarouselRef}>
        <div className="flex gap-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              type="button"
              className={`relative flex-0 min-w-[80px] aspect-square rounded-lg overflow-hidden border-2 ${
                index === selectedIndex
                  ? "border-blue-600 dark:border-blue-400"
                  : "border-transparent"
              }`}
              onClick={() => onThumbClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image}
                alt={`${productName} - Miniature ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
} 