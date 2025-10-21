"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Images
import Img1 from "@/assets/images/house/img1.jpg";
import Img2 from "@/assets/images/house/img2.jpg";
import Img3 from "@/assets/images/house/img3.jpg";
import Img4 from "@/assets/images/house/img4.jpg";

const slides = [
  {
    img: Img1.src,
    title: "De 15 à 50 personnes",
    description: "Un groupe = une maison",
  },
  {
    img: Img2.src,
    title: "A moins de 2h des grandes villes",
    description: "Paris, Bordeaux, Lyon, Marseille...",
  },
  {
    img: Img3.src,
    title: "Ancrée dans la nature",
    description: "Pour s'inspirer, se déconnecter, se dépasser",
  },
  {
    img: Img4.src,
    title: "Design & singularité",
    description: "Une groupe = Une maison",
  },
];

export default function HouseSlider() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Autoplay sederhana
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = async () => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    await controls.start({
      x: `-=${width * 0.8}`, // geser 80% lebar container
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handlePrev = async () => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    await controls.start({
      x: `+=${width * 0.8}`,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Buttons */}
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <button
          onClick={handlePrev}
          className="p-2 bg-white/80 rounded-full shadow"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white/80 rounded-full shadow"
        >
          ▶
        </button>
      </div>

      {/* Track */}
      <motion.div
        ref={containerRef}
        className="flex gap-4 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        animate={controls}
      >
        {slides.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[80%] md:min-w-[30%] relative rounded-xl overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.title.toString()}
              width={429}
              height={525}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="font-nichrome font-bold text-2xl uppercase">
                {item.title}
              </h1>
              <p className="font-general text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
