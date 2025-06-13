import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

const ResultsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations = [
    { id: 1, image: "/11.png" },
    { id: 2, image: "/12.png" },
    { id: 3, image: "/13.png" },
    { id: 4, image: "/14.png" },
    { id: 5, image: "/15.png" },
    { id: 6, image: "/16.png" },
    { id: 7, image: "/17.png" },
    { id: 8, image: "/18.png" },
    { id: 9, image: "/19.png" },
    { id: 10, image: "/20.png" },
  ];


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : 10;

  // Autoplay com troca de índice
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transformations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, transformations.length]);

  // Scroll automático com base no índice
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth / slidesToShow;
    container.scrollTo({
      left: slideWidth * currentIndex,
      behavior: 'smooth',
    });
  }, [currentIndex, slidesToShow]);

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="resultados" className="py-20 relative overflow-visible">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="w-full relative z-10 px-0">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">
            Resultados <span className="text-vf-orange">Reais</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Transformações que falam por si
          </p>
        </div>

        <div
          className="overflow-hidden w-full relative z-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={carouselRef}
            className={`flex ${isMobile ? 'gap-0 px-0' : 'gap-4 px-2'} transition-transform duration-500 overflow-x-hidden`}
          >
            {transformations.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{
                  width: isMobile ? '100%' : `calc(${100 / slidesToShow}% - 1rem)`,
                  maxWidth: isMobile ? '100%' : `calc(${100 / slidesToShow}% - 1rem)`,
                }}
              >
                <img
                  src={item.image}
                  alt={`Transformação ${item.id}`}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center px-4 mt-10">
          <Button
            onClick={() => {
              const target = document.getElementById('planos');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-auto text-lg px-6 py-6
                       md:text-3xl md:px-12 md:py-8
                       lg:text-4xl lg:px-20 lg:py-10
                       bg-vf-orange text-white font-extrabold uppercase
                       rounded-2xl shadow-[0_0_40px_rgba(255,92,0,0.6)]
                       hover:bg-vf-orange/80 flex items-center justify-center gap-2
                       transition-all duration-300 hover:scale-105"
          >
            Quero começar minha transformação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
