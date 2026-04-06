"use client";
import { useEffect, useState } from "react";
import bg from "../picture/bghero.png";
import img from "../picture/imgsec.png";
import Image from "next/image";

const slides = [
  { id: 1, type: "content" },
  { id: 2, type: "image", img: img },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
        <>
        {/* hero section  */}
            <div
            className="w-full h-[400px] lg:h-[500px] overflow-hidden relative bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex items-center justify-center"
          >
            {slide.type === "content" ? (
              <div className="text-left  z-10 px-4">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Don't miss amazine <br />grocery deals
                </h1>
                <p className="text-gray-700 m-4 text-lg ">Sign up for daily newslettters</p>

                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <input
                    type="text"
                    placeholder="Your Email Adress"
                    className="px-4 py-2 bg-amber-50 rounded-lg text-black w-full sm:w-80 outline-none"
                  />
                  <button className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600 transition">
                    Subscribe 
                  </button>
                </div>
              </div>
            ) : (
              <Image
                src={slide.img}
                alt="slide"
                className="w-full h-full object-cover rounded-xl z-10"
              />
            )}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-2xl z-20 bg-black/40 px-3 py-1 rounded-full"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-2xl z-20 bg-black/40 px-3 py-1 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
        </>
  );
}