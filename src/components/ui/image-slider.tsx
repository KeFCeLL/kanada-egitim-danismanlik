'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface SliderProps {
  slides: {
    src: string;
    alt: string;
  }[];
  autoSlideInterval?: number;
}

export default function ImageSlider({ slides, autoSlideInterval = 8000 }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [goToNext, autoSlideInterval]);

  return (
    <div className="relative w-full h-full">
      {/* Main Slide */}
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <div 
          className="transition-transform duration-1000 h-full" 
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${slides.length * 100}%`, display: 'flex' }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full group">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <h3 className="text-white text-2xl font-bold mb-2">{slide.alt}</h3>
                <p className="text-white/80 max-w-lg">
                  {index === 0 && "Kanada'nın prestijli üniversite kampüslerinde eğitim fırsatları sizleri bekliyor."}
                  {index === 1 && "Modern şehir hayatı ve doğal güzelliklerin buluştuğu Kanada'da yaşam deneyimi."}
                  {index === 2 && "Uluslararası standartlarda ve kariyerinize değer katacak eğitim programları."}
                  {index === 3 && "Öğrencilerimiz Kanada'da yeni kültürler keşfediyor ve hayatları değişiyor."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full z-10 hover:bg-black/50 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full z-10 hover:bg-black/50 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${
              slideIndex === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
} 