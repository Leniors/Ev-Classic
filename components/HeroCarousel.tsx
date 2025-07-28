"use client";

import { useEffect, useRef, useState } from "react";

const images = ["/100.webp", "/0576.webp", "/0577.webp"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(timeoutRef.current!);
  }, []);

  // Reset to real first slide when at the cloned slide
  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // remove transition
        setCurrentIndex(0); // jump to real first slide
      }, 700); // wait for slide transition to finish

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides]);

  return (
    <section className="relative h-[600px] md:h-screen overflow-hidden">
      {/* Overlay Text */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-light mb-6 drop-shadow-lg [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
          A 106 YEARS OF LEGACY
        </h1>
        <p className="text-base md:text-lg font-light max-w-xl drop-shadow-lg [text-shadow:_1px_1px_2px_rgba(0,0,0,0.5)]">
          A masterpiece of engineering, reimagined for the future of mobility
        </p>
      </div>

      {/* Next & Prev Buttons */}
      <button
        onClick={() => {
          clearInterval(timeoutRef.current!);
          setCurrentIndex((prev) => prev - 1);
          setIsTransitioning(true);
        }}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 m-4 rounded-full bg-white/50 hover:bg-white transition-colors"
      >
        <svg
          className="w-6 h-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M15 18L9 12l6-6" />
        </svg>
      </button>

      <button
        onClick={() => {
          clearInterval(timeoutRef.current!);
          nextSlide();
        }}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 p-2 m-4 rounded-full bg-white/50 hover:bg-white transition-colors"
      >
        <svg
          className="w-6 h-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Carousel Wrapper */}
      <div className="relative w-full h-full">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {/* All Real Slides */}
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full h-full relative flex-shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Clone of first slide */}
          <div className="min-w-full h-full relative flex-shrink-0">
            <img
              src={images[0]}
              alt="Slide Clone"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
