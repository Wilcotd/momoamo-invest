"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useCastleAnimations } from "@/animations/scrollAnimations";

import HanSwiper, { HanSwiperRef } from "./han-swiper";
import House3 from "@/assets/images/house/house-2.jpg";
import Arrow_Svg from "@/assets/images/svgs/castle_arrow.svg";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";
import Bed_Svg from "@/assets/images/svgs/bed.svg";
import ChairAlt_Svg from "@/assets/images/svgs/chair_alt.svg";
import Forest_Svg from "@/assets/images/svgs/forest.svg";
import Nightlife_Svg from "@/assets/images/svgs/nightlife.svg";
import Castle_Svg from "@/assets/images/svgs/castle.svg";
import Pool_Svg from "@/assets/images/svgs/pool.svg";
import Padel_Svg from "@/assets/images/svgs/padel.svg";
import Sports_Golf_Svg from "@/assets/images/svgs/sports_golf.svg";
import ModalReservation from "./ui/modal-reservation";

const features = [
  {
    icon: Bed_Svg,
    title: "20 chambres twinables avec salle de douche",
  },
  {
    icon: Pool_Svg,
    title: "Piscine chauffée",
  },
  {
    icon: Forest_Svg,
    title: "7 espaces pour se réunir",
  },
  {
    icon: Nightlife_Svg,
    title: "Un grand espace de réception",
  },

  {
    icon: Forest_Svg,
    title: "Terrain de 90 hectares de forêt",
  },
  {
    icon: Castle_Svg,
    title: "5 bâtisses entièrement rénovées",
  },
  {
    icon: ChairAlt_Svg,
    title: "Boulodrome",
  },
  {
    icon: Padel_Svg,
    title: "1 terrain de padel + 1 terrain de tennis",
  },
  {
    icon: Sports_Golf_Svg,
    title: "Green de golf",
  },
];

const CastleSection = () => {
  const hanSwiperRef = useRef<HanSwiperRef>(null);
  const { titleRef, featuresRef, swiperRef } = useCastleAnimations();
  const [isModal, setIsModal] = useState(false);

  const handleNext = () => {
    hanSwiperRef.current?.handleNext();
  };

  const handlePrev = () => {
    hanSwiperRef.current?.handlePrev();
  };

  const slides = [
    // HouseImage.src,
    // House1.src,
    // House2.src,
    House3.src,
  ];

  return (
    <>
      <ModalReservation
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        title="Réserver mon séjour"
      />
      <section
        id="NOS-MAISONS"
        aria-label="NOS MAISONS"
        className="xl:px-14 px-4 w-full max-w-[1360px] mx-auto relative overflow-hidden bg-gray-green md:py-[107px] py-[64px]"
      >
        <header
          ref={titleRef}
          className="md:mb-[56px] mb-[32px] w-[830px] max-w-full"
        >
          <h2 className="uppercase text-start text-black-green md:text-[86px] text-[58px] font-nichrome font-bold tracking-normal leading-none">
            Domaine de Courtigis
          </h2>
          <p className="text-start text-black-green md:text-[36px] text-[26px] font-normal font-nichrome tracking-normal md:mt-[24px] mt-[32px] leading-[1.1]">
            Découvrez la toute première maison Momoamo: un domaine de 90
            hectares en Sologne, à l'est de la forêt d'Orléans à moins d'1h10 de
            Paris, pensé pour que chaque séjour d'équipe devienne une expérience
            unique.
          </p>
        </header>

        {/* Swiper */}
        <figure ref={swiperRef} aria-label="Galerie de photos du domaine">
          <HanSwiper ref={hanSwiperRef} slides={slides} />
        </figure>

        <div className="md:mt-[49px] mt-[32px] flex justify-between">
          <nav
            className="md:flex hidden justify-between max-w-28 w-28"
            aria-label="Navigation du carrousel"
          >
            {slides.length > 1 && (
              <>
                <button
                  className="w-8 h-8 rounded bg-transparent flex justify-center items-center p-[6.67px]"
                  aria-label="Image précédente"
                  onClick={handlePrev}
                  type="button"
                >
                  <Image
                    src={Arrow_Svg}
                    alt=""
                    width={18.67}
                    height={18.67}
                    className="w-[18.67px] h-[18.67px]"
                    aria-hidden="true"
                  />
                </button>
                <button
                  className="w-8 h-8 rounded bg-transparent flex justify-center items-center p-[6.67px]"
                  aria-label="Image suivante"
                  onClick={handleNext}
                  type="button"
                >
                  <Image
                    src={Arrow_Svg}
                    alt=""
                    width={18.67}
                    height={18.67}
                    className="w-[18.67px] h-[18.67px] rotate-180"
                    aria-hidden="true"
                  />
                </button>
              </>
            )}
          </nav>

          <div ref={titleRef} className="md:w-[915px] w-full">
            <p className="text-start text-black-green text-[18px] font-normal font-general tracking-normal">
              Tout près de Paris, ce lieu hors du commun vous attend pour vivre
              une expérience où l'exception devient la règle. Niché au coeur de
              la campagne, ce domaine permet de recevoir entre 15 et 50
              personnes pour vivre une expérience à part, dans un cadre pensé
              pour inspirer, partager et respirer.
            </p>
            <br />
            <p className="text-start text-black-green text-[18px] font-normal font-general tracking-normal">
              Nous avons sélectionné ce lieu exceptionnel pour commencer notre
              collection. Nous avons réalisé près de 2 ans de travaux pour créer
              le meilleur environnement pour les échanges et les moments en
              équipe. Tous les détails ont été pensé, et rien n'a été laissé au
              hasard.
            </p>
          </div>
        </div>

        {/* Kind of houses */}
        <div className="w-full rounded-[10px] md:mt-[64px] mt-[40px] py-8 flex flex-col items-center">
          <h3 className="w-full text-start text-black-green font-nichrome font-bold md:text-[64px] text-6xl mb-8 uppercase leading-none">
            LES PIECES, EXPERIENCES ET LOISIRS
          </h3>
          <ul
            ref={featuresRef}
            className="w-full grid md:grid-cols-5 grid-cols-2 gap-y-8 gap-x-6 mb-10"
          >
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex flex-col items-start gap-3 md:max-w-[200px] max-w-[150px]"
              >
                <Image
                  src={feature.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] pointer-events-none"
                  aria-hidden="true"
                  loading="lazy"
                />
                <span className="text-black-green font-normal font-nichrome md:text-[23px] text-[22px] leading-none">
                  {feature.title}
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsModal(true)}
            type="button"
            aria-label="Réserver votre offsite"
            className="group !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-black hover:text-black text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[28px] text-[28px] md:w-[340px] w-[358px] md:h-[64px] h-[60px] flex justify-center items-center gap-[10px] md:py-5 py-4 px-6 transition-all duration-300 ease-in"
          >
            RÉSERVER VOTRE OFFSITE
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
      </section>
    </>
  );
};

export default CastleSection;
