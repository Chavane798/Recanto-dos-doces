'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: "/sumo.webp",
    alt: "Sucos naturais e refrescantes"
  },
  {
    src: "/hotd.webp",
    alt: "Cachorros-quentes artesanais"
  },
  {
    src: "/chips.webp",
    alt: "Lanches crocantes e saborosos"
  }
];

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigateToProducts = () => {
    router.push('/product');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20">
        {/* Text Content */}
        <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-extrabold text-pink-600 leading-tight">
            Bem-vindo ao Recanto dos Doces! <span aria-hidden="true">🍬</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Explore um universo de sabores que vão adoçar os seus momentos. Nossos doces são feitos com carinho e dedicação, perfeitos para presentear ou tornar o seu dia ainda mais especial.
          </p>
          
          <button 
            onClick={navigateToProducts}
            className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            aria-label="Conheça nossos produtos"
          >
            Conheça Nossos Produtos
          </button>
        </div>

        {/* Image Slider */}
        <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl shadow-xl overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}