"use client"
import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface Slide {
  vidsrc: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function VideoCarousel({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function handleNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="sliderstyle">
      <div
        className="leftarrowstyle w-10 h-10 flex justify-center items-center rounded-full bg-white filter drop-shadow-md"
        onClick={handlePrev}
      >
        <FiChevronLeft />
      </div>
      <div
        className="rightarrowstyle w-10 h-10 flex justify-center items-center rounded-full bg-white filter drop-shadow-md"
        onClick={handleNext}
      >
        <FiChevronRight />
      </div>
      <div className="w-[100%] h-[100%]">
        {slides.map((slide, index) => (
          <video
            key={index}
            id="capsule"
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              index === currentIndex ? "" : "hidden"
            }`}
            src={slide.vidsrc}
            autoPlay
            loop
            muted
          />
        ))}
      </div>
    </div>
  );
}
