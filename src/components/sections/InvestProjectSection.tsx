"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { useScrollSlideUp } from "@/animations/scrollAnimations";

import OurFirstProjectImage1 from "@/assets/images/invest-page/OurFirstProject-1.webp";
import OurFirstProjectImage2 from "@/assets/images/invest-page/OurFirstProject-2.webp";
import OurFirstProjectImage3 from "@/assets/images/invest-page/OurFirstProject-3.webp";
import OurFirstProjectImage4 from "@/assets/images/invest-page/OurFirstProject-4.webp";
import OurFirstProjectImage5 from "@/assets/images/invest-page/OurFirstProject-5.webp";

const projectDetails = [
  { label: "Lieu", value: "Sologne" },
  { label: "Projet global", value: "6,6m€" },
  { label: "Acquisition", value: "Mars 2024" },
  { label: "Ouverture", value: "2026" },
  // { label: "EBITDA", value: "1,3m€ / an" },
  { label: "Notre rendement locatif net", value: "20%" },
];

const InvestProjectSection = () => {
  const titleRef = useScrollSlideUp();
  const imageRef = useScrollSlideUp(0.1);
  const [activeImage, setActiveImage] = useState(0);
  const projectImages = [
    OurFirstProjectImage1,
    OurFirstProjectImage2,
    OurFirstProjectImage3,
    OurFirstProjectImage4,
    OurFirstProjectImage5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projectImages.length]);
  return (
    <section aria-label="Projet Momoamo" className="w-full bg-gray-green overflow-hidden">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[100px] py-[40px]">
        <h2
          className="text-center text-black-green font-nichrome font-bold uppercase leading-none md:text-[96px] text-[58px]"
          ref={titleRef as RefObject<HTMLHeadingElement>}
        >
          NOTRE PREMIER PROJET
        </h2>

        <div
          className="relative mt-[32px] md:mt-[40px] h-[580px] md:h-[680px]"
          ref={imageRef as RefObject<HTMLDivElement>}
        >
          {projectImages.map((image, index) => (
            <Image
              key={image.src}
              src={image}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 768px) 1360px, 100vw"
              className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${activeImage === index ? "opacity-100" : "opacity-0"}`}
              loading="lazy"
            />
          ))}

          <div className="absolute left-1/2 -translate-x-1/2 bottom-[10px] w-[95%] md:w-[480px] max-w-full md:left-[50px] md:bottom-[50px] md:translate-x-0 md:top-auto backdrop-blur-[4px] bg-[#2922224D]">
            <div className="p-[24px] md:p-[32px]">
              <h3 className="text-white font-nichrome font-bold uppercase text-[28px] md:text-[32px] leading-tight">
                DOMAINE DE COURTIGIS
              </h3>

              <div className="mt-[32px] border-t border-white">
                {projectDetails.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[1fr_auto] gap-6 py-[12px] border-b border-white"
                  >
                    <p className="text-white font-normal font-general text-[16px] md:text-[18px] tracking-normal leading-[1.2]">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold font-general text-[16px] md:text-[18px] tracking-normal leading-[1.2]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-6 pt-[18px] align-items-center">
                <p className="text-white font-semibold font-general text-[16px] md:text-[18px] tracking-normal leading-[1.2]">
                  Votre TRI cible net
                </p>
                <span className="inline-flex items-center justify-center bg-lime-green text-dark-green font-nichrome font-bold uppercase text-[16px] md:text-[18px] px-4 py-1">
                  12%
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-black-green font-normal font-nichrome md:text-[32px] text-[26px] tracking-normalleading-[1.1] mt-[64px] md:mt-[120px] text-center max-w-[850px] mx-auto w-full">
          Les performances passées ne préjugent pas des performances futures. Le rendement et le capital ne sont pas garantis
        </p>
      </div>
    </section>
  );
};

export default InvestProjectSection;
