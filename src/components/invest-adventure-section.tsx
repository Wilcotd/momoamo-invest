 "use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";

import AdventureImage from "@/assets/images/invest-page/invest-adventure-img-1.webp";
import AdventureImage2 from "@/assets/images/invest-page/invest-adventure-img-2.webp";
import AdventureImage3 from "@/assets/images/invest-page/invest-adventure-img-3.webp";

const adventureCards = [
  {
    image: AdventureImage,
    title: "UN MARCHÉ QUI EXPLOSE, UNE OFFRE QUI MANQUE",
    description:
      "Le séminaire d’entreprise se réinvente (+30%/an), mais rien n’existe pour les groupes de 20-50 personnes : trop grand, trop impersonnel, trop générique.",
  },
  {
    image: AdventureImage2, 
    title: "MOMOAMO COMBLE LE VIDE",
    description:
      "Des domaines historiques d’exception, redessinés pour offrir l’expérience séminaire ultime : design contemporain, prestations hôtelières haut de gamme, espaces pensés pour travailler et se retrouver.",
  },
  {
    image: AdventureImage3,
    title: "UNE ÉQUIPE TAILLÉE POUR L’EXÉCUTION",
    description:
      "Les fondateurs cumulent plusieurs succès entrepreneuriaux, une expertise séminaire (Kymono, +300 séminaires, 6 ans au contact des décideurs) et une maîtrise du mobilier design et du financement participatif (Enky, +150 projets financés).",
  },
];

const InvestAdventureSection = () => {
  const { openModal } = useInvestWaitlistModal();
  return (
    <section aria-label="Aventure Momoamo" className="w-full bg-gray-green md:py-[120px] py-[64px]">
      <div className="max-w-[1360px] xl:px-14 px-4 mx-auto">
        <div className="max-w-full w-[820px]">
          <p className="text-black-green font-nichrome font-bold uppercase text-[28px] tracking-wider">
            UNE AVENTURE AMBITIEUSE
          </p>
          <h2 className="text-start text-black-green font-nichrome font-bold md:text-[86px] text-[58px] uppercase leading-none mb-[24px] md:mb-[21px]">
            CRÉER UN ACTEUR D’UN
            <br />
            GENRE NOUVEAU, SUR UN
            <br />
            MARCHÉ EN EBULLITION
          </h2>
        </div>
        <div
          className="ms-auto md:my-[72px] mb-[32px] mt-[24px] w-[783px] max-w-full"
        >
          <p className="text-black-green font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal text-start leading-[1.1]">
            Nous ne menons pas de simples opérations immobilières. Momoamo
            c’est une marque d’hospitalité à construire, une collection de
            maisons d’exceptions, exploités par nous, pour durer.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="group mt-6 !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-dark-green hover:text-lime-green text-dark-green bg-lime-green font-bold font-nichrome md:text-[28px] text-[20px] md:h-[64px] h-[70px] flex justify-center items-center gap-[10px] md:py-5 py-4 px-6 transition-all duration-300 ease-in border-lime-green leading-[1.1] text-start"
          >
            REJOIGNEZ-NOUS ET INVESTISSEZ À NOS CÔTÉS
            <Image
              src={Button_Arrow_Svg}
              alt=""
              width={20}
              height={20}
              loading="lazy"
              className="w-[20px] h-[20px] group-hover:invert transition-all duration-300 ease-in pointer-events-none invert"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4">
        <div className="mt-12 md:grid hidden md:grid-cols-3 gap-8">
          {adventureCards.map((card) => (
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
              <h3 className="mt-5 black-green font-nichrome font-bold uppercase text-[28px] leading-tight">
                {card.title}
              </h3>
              <p className="mt-3 black-green/80 font-general font-light text-[16px] leading-[1.4]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 md:hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            style={{ paddingRight: "0px", overflow: "visible" }}
          >
            {adventureCards.map((card) => (
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
                  <h3 className="mt-5 black-green font-nichrome font-bold uppercase text-[28px] leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 black-green/80 font-general font-light text-[16px] leading-[1.4]">
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

export default InvestAdventureSection;
