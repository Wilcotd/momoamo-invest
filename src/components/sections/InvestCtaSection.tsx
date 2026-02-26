"use client";

import Image from "next/image";
import type { RefObject } from "react";

import { useScrollSlideUp } from "@/animations/scrollAnimations";
import { useStaggerIn } from "@/hooks/useGSAPAnimation";
import CtaImage1 from "@/assets/images/invest-page/invest-cta-4.jpg";
import CtaImage2 from "@/assets/images/invest-page/invest-cta-3.jpg";
import CtaImage3 from "@/assets/images/invest-page/invest-cta-2.jpg";
import CtaImage4 from "@/assets/images/invest-page/invest-cta-1.jpg";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";
import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";

const InvestCtaSection = () => {
  const { openModal } = useInvestWaitlistModal();
  const contentRef = useScrollSlideUp();
  const imagesRef = useStaggerIn({ start: "top 75%" });
  return (
    <section className="w-full bg-gray-green">
      <div className="relative overflow-hidden max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[140px] pt-[200px] pb-[250px]">
        <div
          className="relative z-10 flex flex-col items-center text-center max-w-[760px] mx-auto"
          ref={contentRef as RefObject<HTMLDivElement>}
        >
          <h2 className="text-black-green font-nichrome font-bold uppercase leading-none md:text-[130px] text-[80px]">
            REJOIGNEZ MOMOAMO
          </h2>
          <p className="my-[24px] text-black-green font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal leading-[1.1] max-w-full w-[720px] text-center">
            Devenez acteur de notre projet immobilier unique et participez à la création d’espaces inspirants pour séjours professionnels en vous inscrivant dès maintenant.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="group !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-[#292222] hover:text-[#292222] text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[28px] text-[28px] md:h-[64px] h-[60px] flex justify-center items-center gap-[10px] md:py-5 py-4 px-6 transition-all duration-300 ease-in border-[#292222] mx-auto"
          >
            BE FIRST TO JOIN
            <Image
              src={Button_Arrow_Svg}
              alt=""
              width={20}
              height={20}
              loading="lazy"
              className="w-[20px] h-[20px] group-hover:invert transition-all duration-300 ease-in pointer-events-none"
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          ref={imagesRef as RefObject<HTMLDivElement>}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute left-4 top-6 md:left-10 md:top-8 w-[120px] md:w-[180px]">
            <Image
              src={CtaImage1}
              alt=""
              aria-hidden="true"
              width={220}
              height={220}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="absolute right-6 top-10 md:right-12 md:top-10 w-[110px] md:w-[170px]">
            <Image
              src={CtaImage2}
              alt=""
              aria-hidden="true"
              width={210}
              height={210}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="absolute left-6 bottom-8 md:left-16 md:bottom-10 w-[130px] md:w-[200px]">
            <Image
              src={CtaImage3}
              alt=""
              aria-hidden="true"
              width={240}
              height={240}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="absolute right-4 bottom-6 md:right-12 md:bottom-12 w-[140px] md:w-[210px]">
            <Image
              src={CtaImage4}
              alt=""
              aria-hidden="true"
              width={260}
              height={260}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestCtaSection;
