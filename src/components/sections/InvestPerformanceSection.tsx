"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  useScrollSlideUp,
  useScrollStaggerIn,
} from "@/animations/scrollAnimations";
import PerformanceImage1 from "@/assets/images/invest-page/invest-performance-1.webp";
import PerformanceImage2 from "@/assets/images/invest-page/invest-performance-2.webp";
import PerformanceImage3 from "@/assets/images/invest-page/invest-performance-3.webp";

const performanceCards = [
  {
    image: PerformanceImage1,
    title: "EVÈNEMENT VIP /SOIRÉES DE PRESTIGE BI-ANNUELLES",
    description:
      "2 fois par an, nous réunissons l'ensemble des investisseurs pour une soirée de gala. L'occasion de célébrer les nouveaux projet, de rencontrer l’équipe et de tisser des liens forts avec vos pairs dans un cadre informel et exclusif.",
  },
  {
    image: PerformanceImage2,
    title: "20% DE RÉDUCTION À VIE",
    description:
      "En tant qu'investisseur, vous profitez de 20% de réduction, à vie, sur l'ensemble de nos maisons, pour vos vacances, mariages et stages en tous genre.",
  },
  {
    image: PerformanceImage3,
    title: "20% SUR LES SÉMINAIRES D'ENTREPRISE",
    description:
      "Que vous soyez dirigeant ou salarié, profitez de 20% de réduction sur votre séminaire dans nos maisons et faite vivre une expérience unique à votre entreprise !",
  },
];

const InvestPerformanceSection = () => {
  const titleRef = useScrollSlideUp();
  const gridRef = useScrollStaggerIn(0.12);
  const mobileRef = useScrollSlideUp(0.1);
  return (
    <section
      aria-label="Performance financière Momoamo"
      className="w-full bg-gray-green md:py-[120px] py-[64px]"
    >
      <div className="max-w-[1360px] xl:px-14 px-4 mx-auto">
        <h2
          className="text-center text-black-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px] max-w-full w-[850px] mx-auto"
          ref={titleRef as RefObject<HTMLHeadingElement>}
        >
          AU-DELÀ DE LA PERFORMANCE FINANCIÈRE
        </h2>
      </div>

      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4">
        <div
          className="mt-12 md:grid hidden md:grid-cols-3 gap-8"
          ref={gridRef as RefObject<HTMLDivElement>}
        >
          {performanceCards.map((card) => (
            <article key={card.title} className="flex flex-col">
              <div className="w-full overflow-hidden bg-[#1a1614]">
                <Image
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  width={420}
                  height={320}
                  className="w-full aspect-[440/583] object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-black-green font-nichrome font-bold uppercase text-[28px] leading-tight">
                {card.title}
              </h3>
              <p className="mt-3 text-black-green/80 font-general font-light text-[16px] leading-[1.4]">
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
            slidesPerView="auto"
            spaceBetween={16}
            style={{ paddingRight: "0px", overflow: "visible" }}
          >
            {performanceCards.map((card) => (
              <SwiperSlide key={card.title} className="!w-[80vw]">
                <article className="flex flex-col">
                  <div className="w-full overflow-hidden bg-[#1a1614]">
                    <Image
                      src={card.image}
                      alt=""
                      aria-hidden="true"
                      width={420}
                      height={320}
                      className="w-full aspect-[440/583] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 text-black-green font-nichrome font-bold uppercase text-[28px] leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-black-green/80 font-general font-light text-[16px] leading-[1.4]">
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

export default InvestPerformanceSection;
