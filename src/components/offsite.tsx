"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useOffsiteAnimations } from "@/animations/scrollAnimations";

// Images
import Img1 from "@/assets/images/offsite/img1.jpg";
import Img2 from "@/assets/images/offsite/offsite-attr-2.webp";
import Img3 from "@/assets/images/offsite/img3.jpg";
import Img4 from "@/assets/images/offsite/img4.jpg";
import Img5 from "@/assets/images/place/offsite-attr-1.webp";
import Img6 from "@/assets/images/place/img2.jpg";
import Img7 from "@/assets/images/place/img3.jpg";
import Img8 from "@/assets/images/place/offsite-attr-3.jpg";
import { useWindowSize } from "@/hooks/useWindowSize";

const OffsiteSection = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { titleRef, descriptionRef, bottomContentRef } =
    useOffsiteAnimations(isMobile);

  return (
    <section
      ref={sectionRef}
      id="LEXPERIENE"
      aria-label="LEXPERIENE"
      className="w-full relative md:pt-[98px] pt-[64px] md:pb-[133px] pb-[64px]"
    >
      <div className="max-w-[1360px] xl:px-14 px-4 mx-auto">
        <div ref={titleRef} className="max-w-full w-[770px]">
          <h2 className="text-start text-offsite-secondary font-nichrome font-bold md:text-[86px] text-[58px] uppercase leading-none mb-[24px] md:mb-[21px]">
            Momoamo : <br />
            Plus qu'un offsite
          </h2>
          <p className="text-start text-offsite-secondary font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal leading-[1.1]">
            Momoamo crée une collection de maisons d'exception pensées pour les
            séjours professionnels.
          </p>
        </div>
        <div
          ref={descriptionRef}
          className="w-full flex justify-end md:my-[72px] mb-[32px] mt-[24px]"
        >
          <p className="md:px-14 md:max-w-[915px] max-w-[358px] text-offsite-secondary font-light font-general text-[18px] tracking-normal text-start">
            À mi-chemin entre un hôtel haut de gamme, un bureau éphémère une
            maison de famille, chaque maison Momoamo est un cadre unique pour
            travailler autrement, se reconnecter et créer des souvenirs communs.
          </p>
        </div>
      </div>
      {/* Images with Horizontal Slide Animation */}
      <motion.figure
        aria-label="Galerie d'images Momoamo"
        className="moving-logo hidden md:flex flex-nowrap md:h-[826px] h-[320px] md:min-w-[2880px] min-w-[1800px] relative"
        initial={{ y: 0 }}
        style={{
          y: useTransform(scrollYProgress, [0, 1], [60, -60]),
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="moving-logo-inner--desktop slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px]">
          <Image
            src={Img1.src}
            alt=""
            aria-hidden="true"
            width={485}
            height={728}
            className="absolute z-[1] left-0 md:left-[16px] bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover pointer-events-none"
            loading="lazy"
          />
          <Image
            src={Img2.src}
            alt=""
            aria-hidden="true"
            width={430}
            height={535}
            className="absolute top-0 md:left-[485px] left-[166.26px] md:w-[430px] md:h-[538px] w-[165px] h-[205px] object-cover pointer-events-none"
            loading="lazy"
          />
          <Image
            src={Img3.src}
            alt=""
            aria-hidden="true"
            width={357}
            height={465}
            className="absolute bottom-0 md:right-[369px] -right-[47.26px] md:w-[357px] md:h-[465px] w-[138px] h-[179px] object-cover pointer-events-none"
            loading="lazy"
          />
          <Image
            src={Img4.src}
            alt=""
            aria-hidden="true"
            width={431}
            height={535}
            className="absolute top-0 md:-right-[118px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover pointer-events-none"
            loading="lazy"
          />
        </div>
        <div className="moving-logo-inner--desktop slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px] mr-[404px]">
          <Image
            src={Img5.src}
            alt=""
            aria-hidden="true"
            width={485}
            height={600}
            className="absolute z-[1] left-[700px] top-0 md:w-[485px] md:h-[550px] w-[188px] h-[282px] object-cover pointer-events-none"
            loading="lazy"
          />
          <Image
            src={Img6.src}
            alt=""
            aria-hidden="true"
            width={485}
            height={700}
            className="absolute z-[4] bottom-4 md:left-[300px] left-[166px] md:w-[485px] md:h-[700px] w-[165px] h-[205px] object-cover pointer-events-none"
            loading="lazy"
          />
          <Image
            src={Img7.src}
            alt=""
            aria-hidden="true"
            width={357}
            height={465}
            className="absolute z-[4] bottom-0 md:right-[150px] -right-[67px] md:w-[357px] md:h-[465px] w-[137px] h-[178px] object-cover pointer-events-none"
            loading="lazy"
          />
          <Image
            src={Img8.src}
            alt=""
            aria-hidden="true"
            width={431}
            height={535}
            className="absolute top-0 md:-right-[400px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover pointer-events-none"
            loading="lazy"
          />
        </div>
        <div className="moving-logo-inner--desktop slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px]">
          <Image
            src={Img1.src}
            alt=""
            aria-hidden="true"
            width={485}
            height={728}
            className="absolute z-[1] left-0 md:left-[16px] bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover"
            loading="lazy"
          />
          <Image
            src={Img2.src}
            alt=""
            aria-hidden="true"
            width={430}
            height={535}
            className="absolute top-0 md:left-[485px] left-[166.26px] md:w-[430px] md:h-[538px] w-[165px] h-[205px] object-cover"
            loading="lazy"
          />
          <Image
            src={Img3.src}
            alt=""
            aria-hidden="true"
            width={357}
            height={465}
            className="absolute bottom-0 md:right-[369px] -right-[47.26px] md:w-[357px] md:h-[465px] w-[138px] h-[179px] object-cover"
            loading="lazy"
          />
          <Image
            src={Img4.src}
            alt=""
            aria-hidden="true"
            width={431}
            height={535}
            className="absolute top-0 md:-right-[118px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="moving-logo-inner--desktop slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px]">
          <Image
            src={Img5.src}
            alt=""
            aria-hidden="true"
            width={485}
            height={600}
            className="absolute z-[1] left-[700px] top-0 md:w-[485px] md:h-[550px] w-[188px] h-[282px] object-cover"
            loading="lazy"
          />
          <Image
            src={Img6.src}
            alt=""
            aria-hidden="true"
            width={485}
            height={700}
            className="absolute z-[4] bottom-4 md:left-[300px] left-[166px] md:w-[485px] md:h-[700px] w-[165px] h-[205px] object-cover"
            loading="lazy"
          />
          <Image
            src={Img7.src}
            alt=""
            aria-hidden="true"
            width={357}
            height={465}
            className="absolute z-[4] bottom-0 md:right-[150px] -right-[67px] md:w-[357px] md:h-[465px] w-[137px] h-[178px] object-cover"
            loading="lazy"
          />
          <Image
            src={Img8.src}
            alt=""
            aria-hidden="true"
            width={431}
            height={535}
            className="absolute top-0 md:-right-[400px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover"
            loading="lazy"
          />
        </div>
      </motion.figure>
      {isMobile && (
        <figure
          aria-label="Galerie d'images Momoamo mobile"
          className="moving-logo flex md:hidden flex-nowrap md:h-[826px] h-[320px] md:min-w-[2880px] min-w-[1800px] relative gap-[498px]"
        >
          <div className="moving-logo-inner slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px]">
            <Image
              src={Img1.src}
              alt=""
              aria-hidden="true"
              width={485}
              height={728}
              className="absolute z-[1] md:left-[56px] left-[16px] bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img2.src}
              alt=""
              aria-hidden="true"
              width={430}
              height={535}
              className="absolute top-0 md:left-[485px] left-[166.26px] md:w-[430px] md:h-[538px] w-[165px] h-[205px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img3.src}
              alt=""
              aria-hidden="true"
              width={357}
              height={465}
              className="absolute bottom-0 md:right-[369px] -right-[47.26px] md:w-[357px] md:h-[465px] w-[138px] h-[179px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img4.src}
              alt=""
              aria-hidden="true"
              width={431}
              height={535}
              className="absolute top-0 md:-right-[118px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img5.src}
              alt=""
              aria-hidden="true"
              width={485}
              height={728}
              className="absolute z-[1] -right-[400px] bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img6.src}
              alt=""
              aria-hidden="true"
              width={430}
              height={535}
              className="absolute top-0 md:left-[429px] -right-[500px] md:w-[430px] md:h-[535px] w-[165px] h-[205px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="moving-logo-inner slide md:h-[826px] h-[320px] relative md:min-w-[1440px] min-w-[408px]">
            <Image
              src={Img1.src}
              alt=""
              aria-hidden="true"
              width={485}
              height={728}
              className="absolute z-[1] md:left-[56px] left-[16px] bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img2.src}
              alt=""
              aria-hidden="true"
              width={430}
              height={535}
              className="absolute top-0 md:left-[485px] left-[166.26px] md:w-[430px] md:h-[538px] w-[165px] h-[205px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img3.src}
              alt=""
              aria-hidden="true"
              width={357}
              height={465}
              className="absolute bottom-0 md:right-[369px] -right-[47.26px] md:w-[357px] md:h-[465px] w-[138px] h-[179px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img4.src}
              alt=""
              aria-hidden="true"
              width={431}
              height={535}
              className="absolute top-0 md:-right-[118px] -right-[260px] md:w-[431px] md:h-[535px] w-[165px] h-[205px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img5.src}
              alt=""
              aria-hidden="true"
              width={485}
              height={728}
              className="absolute z-[1] -right-[400px] bottom-0 md:w-[485px] md:h-[728px] w-[188px] h-[282px] object-cover"
              loading="lazy"
            />
            <Image
              src={Img6.src}
              alt=""
              aria-hidden="true"
              width={430}
              height={535}
              className="absolute top-0 md:left-[429px] -right-[500px] md:w-[430px] md:h-[535px] w-[165px] h-[205px] object-cover"
              loading="lazy"
            />
          </div>
        </figure>
      )}
      {/* Text */}
      <div className="md:mt-[92px] mt-[32px] flex justify-end px-4">
        <div ref={bottomContentRef} className="md:max-w-[915px] max-w-[358px]">
          <h2 className="text-start text-offsite-secondary font-nichrome font-bold md:text-[86px] text-[58px] uppercase leading-none">
            L'art de créer des moments inoubliables
          </h2>
          <p className="text-start text-offsite-secondary font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal mb-6 leading-[1.1]">
            Chez Momoamo, on est convaincus que les meilleures expériences sont
            celles qui nous rapprochent.
          </p>
          <p className="text-offsite-secondary font-general font-light text-[18px] tracking-normal text-start leading-[1.3] ">
            C'est pourquoi nous créons des lieux où l'on se sent vraiment chez
            soi, pour vivre des moments partagés qui sortent du cadre et
            marquent les esprit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OffsiteSection;
