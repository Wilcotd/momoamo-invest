"use client";

import Image from "next/image";
import { useRef } from "react";
import { useHouseAnimations } from "@/animations/scrollAnimations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Virtual } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// SVGS
import Diversity2_Svg from "@/assets/images/house/diversity_2.svg";
import HandMeal_Svg from "@/assets/images/house/hand_meal.svg";
import HomeGear_Svg from "@/assets/images/house/home_and_garden.svg";
import Business_Svg from "@/assets/images/house/business_center.svg";

// Images
import Img1 from "@/assets/images/house/house-new-3.webp";
import Img2 from "@/assets/images/house/house-new-2.webp";
import Img3 from "@/assets/images/house/img3.jpg";
import Img4 from "@/assets/images/house/house-new-1.webp";

const features = [
  {
    icon: Diversity2_Svg,
    title: (
      <>
        La sélection de lieux <br /> rares et singuliers
      </>
    ),
    description:
      "pensés pour l’accueil professionnel (espaces de travail intégrés, qualité du Wi-Fi, ergonomie, ambiance…).",
  },
  {
    icon: HandMeal_Svg,
    title: "La scénarisation de l’expérience de séjour",
    description:
      "avec un accompagnement de A à Z (accueil, restauration, activités, services), qui transforme un offsite en moment marquant.",
  },
  {
    icon: HomeGear_Svg,
    title: (
      <>
        L’exigence <br /> curatoriale
      </>
    ),
    description:
      "on propose des lieux rares, alignés avec une vision forte de l’expérience professionnelle moderne.",
  },
  {
    icon: Business_Svg,
    title: (
      <>
        L'angle "pro" assumé
        <br /> et intégré dès le départ
      </>
    ),
    description: `là où d'autres adaptent des maisons de vacances pour les séminaires, on conçoit l’expérience autour du besoin (temps de travail, moments d’équipe, logistique fluide).`,
  },
];

const HouseSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const {
    titleRef,
    swiperRef: swiperAnimRef,
    featuresRef,
    descriptionRef,
  } = useHouseAnimations();

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <section
      id="savoir-faire"
      aria-label="Savoir-faire Momoamo"
      className="w-full mx-auto relative overflow-hidden md:py-[123px] py-[64px] md:px-0 !px-0"
    >
      <div className="w-full flex justify-between items-end xl:px-14 px-4 max-w-[1360px] mx-auto">
        <div ref={titleRef} className="w-full">
          <h2 className="max-w-full w-[680px] text-house-secondary font-nichrome font-bold md:text-[86px] text-[58px] uppercase leading-none">
            Une maison momoamo c'est...
          </h2>
        </div>
        {/* Navigation */}
        <nav
          className="w-28 h-8 md:flex hidden justify-between"
          aria-label="Carousel navigation"
        >
          <button
            className="rounded bg-transparent flex justify-center items-center p-[6.67px]"
            onClick={handlePrev}
            aria-label="Previous slide"
            type="button"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_214_1058"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_214_1058)">
                <path
                  d="M9.22964 16.667L16.9526 24.39L16.0013 25.3337L6.66797 16.0003L16.0013 6.66699L16.9526 7.61066L9.22964 15.3337H25.3346V16.667H9.22964Z"
                  fill="#FF6E4E"
                />
              </g>
            </svg>
          </button>
          <button
            className="rounded bg-transparent flex justify-center items-center p-[6.67px]"
            onClick={handleNext}
            aria-label="Next slide"
            type="button"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_214_1061"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_214_1061)">
                <path
                  d="M22.773 16.667H6.66797V15.3337H22.773L15.05 7.61066L16.0013 6.66699L25.3346 16.0003L16.0013 25.3337L15.05 24.39L22.773 16.667Z"
                  fill="#FF6E4E"
                />
              </g>
            </svg>
          </button>
        </nav>
      </div>

      {/* Slides */}
      <figure
        ref={swiperAnimRef}
        aria-label="Caractéristiques des maisons Momoamo"
        className="w-[120%] mt-12 px-4"
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 180000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          style={{ paddingRight: "0px", overflow: "visible" }}
          aria-roledescription="carousel"
        >
          {[
            {
              img: Img4.src,
              title: "De 15 à 50 personnes",
              description: "Un groupe = une maison",
            },
            {
              img: Img2.src,
              title: "A moins de 2h des grandes villes",
              description: "Paris, Bordeaux, Lyon, Marseille…",
            },
            {
              img: Img3.src,
              title: "Ancrée dans la nature",
              description: "Pour s’inspirer, se déconnecter, se dépasser",
            },
            {
              img: Img1.src,
              title: "Design & Singularité",
              description: "Une immersion immédiate",
            },
            {
              img: Img4.src,
              title: "De 15 à 50 personnes",
              description: "Un groupe = une maison",
            },
            {
              img: Img2.src,
              title: "A moins de 2h des grandes villes",
              description: "Paris, Bordeaux, Lyon, Marseille…",
            },
            {
              img: Img3.src,
              title: "Ancrée dans la nature",
              description: "Pour s’inspirer, se déconnecter, se dépasser",
            },
            {
              img: Img1.src,
              title: "Design & Singularité",
              description: "Une immersion immédiate",
            },
          ].map((item, idx) => (
            <SwiperSlide
              key={idx}
              aria-roledescription="slide"
              className="!w-[80vw] md:!w-[40vw] lg:!w-[30vw]"
            >
              <article className="flex-shrink-0 px-0 relative group">
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 100%)",
                    backgroundBlendMode: "multiply",
                  }}
                >
                  <Image
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    width={429}
                    height={525}
                    className="w-full h-[338px] lg:h-[458px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                </div>
                {/* Gradient overlay */}
                <header className="flex flex-col absolute md:bottom-6 bottom-4 md:left-6 left-4 md:max-w-[351px] max-w-[250px]">
                  <h3 className="text-[#EEE5D7] font-nichrome font-bold text-[23px] uppercase leading-none">
                    {item.title}
                  </h3>
                  <p className="text-[#EEE5D7] font-normal font-general text-[16px] tracking-normal leading-[1.2]">
                    {item.description}
                  </p>
                </header>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>

      {/* Text */}
      <div
        ref={descriptionRef}
        aria-label="Description du savoir-faire Momoamo"
        className="max-w-[1360px] xl:px-14 px-4 mx-auto mt-12 flex justify-end md:my-[76px] my-[32px]"
      >
        <div className="max-w-full md:w-[825px] w-[358px]">
          <h3 className="text-house-secondary mb-[24px] font-nichrome font-bold md:text-[86px] text-[58px] uppercase text-start leading-none">
            Le vrai savoir-faire <span className="md:hidden">de</span>
            <span className="hidden md:inline">de</span> momoamo®
          </h3>
          <p className="text-house-secondary font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal text-start leading-[1.1]">
            Ce n'est pas juste de proposer de belles maisons, mais de créer des
            parenthèses inspirantes pour les équipes, dans des lieux qui allient
            exception architecturale, confort hôtelier et expérience sur-mesure.
          </p>
        </div>
      </div>
      <div
        ref={featuresRef}
        aria-label="Caractéristiques du service Momoamo"
        className="max-w-[1360px] xl:px-14 px-4 mx-auto md:mt-[76px] mt-8 grid md:grid-cols-4 grid-cols-1 gap-12"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-4 md:max-w-[314px] max-w-[358px]"
          >
            <Image
              src={feature.icon}
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="w-[40px] h-[40px] pointer-events-none"
              loading="lazy"
            />
            <header className="flex flex-col">
              <h4 className="text-house-secondary font-nichrome font-bold md:text-[28px] text-[28px] uppercase leading-[100%]">
                {feature.title}
              </h4>
              <p className="text-house-secondary font-normal font-nichrome text-[23px] tracking-normal leading-none mt-4">
                {feature.description}
              </p>
            </header>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HouseSection;
