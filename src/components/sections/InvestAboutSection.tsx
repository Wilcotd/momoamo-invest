"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  useScrollSlideUp,
  useScrollStaggerIn,
} from "@/animations/scrollAnimations";
import AissaImage from "@/assets/images/invest-page/Team_Aissa.webp";
import OlivierImage from "@/assets/images/invest-page/invest-about-1.webp";

const aboutCards = [
  {
    image: OlivierImage,
    title: "OLIVIER, KYMONO",
    imageClass: "object-cover",
    description:
      "En quelques années Olivier, a créé un empire de la culture d’entreprise avec Kymono. L’entreprise totalise aujourd’hui plus de 10 000 clients et plus 300 séminaires organisés dont certains sur des concepts vus à la télé.",
  },
  {
    image: AissaImage,
    title: "AISSA, ENKY",
    imageClass: "object-cover object-[center_20%] scale-[0.9]",
    description:
      "En 2013, Aissa cofonde Edebex, une fintech qui totalise aujourd’hui plus d’1Md€+ de volume d’affaires. Il crée en 2019 Enky une entreprise à la frontière de la fintech et du FaaS (Mobilier par abonnement) qui a déjà séduit plus de 180 clients et 4700 investisseurs.",
  },
];

const InvestAboutSection = () => {
  const titleRef = useScrollSlideUp();
  const gridRef = useScrollStaggerIn(0.12);
  const mobileRef = useScrollSlideUp(0.1);
  return (
    <section
      aria-label="About us Momoamo"
      className="w-full bg-offsite-main md:py-[100px] py-[40px] overflow-hidden"
    >
      <div
        className="max-w-[1360px] xl:px-14 px-4 mx-auto"
        ref={titleRef as RefObject<HTMLDivElement>}
      >
        <h2 className="text-offsite-secondary font-nichrome font-bold uppercase leading-none md:text-[80px] text-[58px]">
          ABOUT US
        </h2>
        <p className="mt-[16px] md:mt-[24px] text-offsite-secondary font-normal font-nichrome md:text-[32px] text-[26px] tracking-normal text-start leading-[1.1] max-w-full w-[650px]">
          Investissez aux côtés d’entrepreneurs aguerris et experts de leur
          domaine
        </p>
      </div>

      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4">
        <div
          className="mt-[32px] md:mt-[50px] md:grid hidden md:grid-cols-2 gap-8"
          ref={gridRef as RefObject<HTMLDivElement>}
        >
          {aboutCards.map((card) => (
            <article key={card.title} className="flex flex-col">
              <div className="w-full overflow-hidden bg-[#0f1c3d]">
                <Image
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  width={684}
                  height={570}
                  className={`w-full aspect-[684/570] ${card.imageClass}`}
                  loading="lazy"
                />
              </div>
              <h3 className="mt-[32px] text-offsite-secondary font-nichrome font-bold uppercase text-[32px] leading-tight">
                {card.title}
              </h3>
              <p className="mt-[16px] text-offsite-secondary/80 font-general font-light text-[16px] md:text-[18px] leading-[1.4]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div
          className="mt-12 md:hidden"
          ref={mobileRef as RefObject<HTMLDivElement>}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
          >
            {aboutCards.map((card) => (
              <SwiperSlide key={card.title}>
                <article className="flex flex-col">
                  <div className="w-full overflow-hidden bg-[#0f1c3d]">
                    <Image
                      src={card.image}
                      alt=""
                      aria-hidden="true"
                      width={684}
                      height={570}
                      className={`w-full aspect-[684/570] ${card.imageClass}`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-[32px] text-offsite-secondary font-nichrome font-bold uppercase text-[32px] leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-[16px] text-offsite-secondary/80 font-general font-light text-[16px] md:text-[18px] leading-[1.4]">
                    {card.description}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default InvestAboutSection;
