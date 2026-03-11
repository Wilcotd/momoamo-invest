"use client";

import Image from "next/image";
import type { RefObject } from "react";

import {
  useScrollSlideUp,
  useScrollStaggerIn,
} from "@/animations/scrollAnimations";
import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";
import Invest_1_Svg from "@/assets/images/invest-page/momo-invest-1.svg";
import Invest_2_Svg from "@/assets/images/invest-page/momo-invest-2.svg";
import Invest_3_Svg from "@/assets/images/invest-page/momo-invest-3.svg";
import Invest_4_Svg from "@/assets/images/invest-page/momo-invest-4.svg";
import Invest_5_Svg from "@/assets/images/invest-page/momo-invest-5.svg";
import Invest_6_Svg from "@/assets/images/invest-page/momo-invest-6.svg";

const opportunityItems = [
  {
    image: Invest_1_Svg,
    label: "Rendement Cible*",
    headline: "TRI 12% / an, net de frais*",
    description: "Plus value foncière et forte rentabilité locative",
    footnote:
      "Les performances passées ne préjugent pas des performances futures",
  },
  {
    image: Invest_2_Svg,
    label: "Horizon",
    headline: "3 À 5 ANS",
    description:
      "Le temps d’optimiser les conditions du refinancement bancaire",
  },
  {
    image: Invest_3_Svg,
    label: "Distribution",
    headline: "Mensuelle ou In-fine*",
    description: "Directement issus des revenus de l’activité",
    footnote2: "*selon le choix de l’investisseur",
  },
  {
    image: Invest_4_Svg,
    label: "Des garanties solides",
    headline: "UNE DOUBLE PROTECTION",
    description:
      "Vous êtes associés de la société projet, avec une garantie sur les titres Momoamo",
  },
  {
    image: Invest_5_Svg,
    label: "Sortie claire dès le départ",
    headline: "C’EST NOUS QUI VOUS RACHETONS",
    description:
      "Refinancement bancaire avec rachat des investisseurs par Momoamo.",
  },
  {
    image: Invest_6_Svg,
    label: "Des avantages en nature",
    headline: "REJOIGNEZ LE CLUB FERMÉ DES INVESTISSEURS",
    description: "Accès privilégié aux maisons et évènements exclusifs",
  },
];

const InvestOpportunitySection = () => {
  const { openModal } = useInvestWaitlistModal();
  const titleRef = useScrollSlideUp();
  const gridRef = useScrollStaggerIn(0.12);
  const ctaRef = useScrollSlideUp(0.1);
  return (
    <section
      aria-label="Opportunité d’investissement"
      className="w-full bg-gray-green"
    >
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <header
          className="max-w-[700px]"
          ref={titleRef as RefObject<HTMLHeadingElement>}
        >
          <p className="text-black-green font-nichrome font-bold uppercase md:text-[24px] text-[18px] tracking-wider">
            L’OPPORTUNITÉ D’INVESTISSEMENT
          </p>
          <h2 className="text-black-green font-nichrome font-bold uppercase leading-none md:text-[64px] text-[40px] mt-[16px] md:mt-[24px]">
            POURQUOI INVESTIR
            <br />
            AVEC MOMOAMO ?
          </h2>
          <p className="mt-[16px] md:mt-[24px] text-black-green font-normal font-nichrome md:text-[32px] text-[24px] tracking-normal leading-[1.1]">
            Participez à un projet unique par son approche intégré, qui mêle performance et sécurité
          </p>
        </header>

        <div
          className="mt-[48px] md:mt-[62px] grid md:grid-cols-3 gap-x-[56px] gap-y-[32px] md:gap-y-[62px]"
          ref={gridRef as RefObject<HTMLDivElement>}
        >
          {opportunityItems.map((item, index) => (
            <article key={item.label} className="flex flex-col">
              <Image
                src={item.image}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                className="w-[40px] h-[40px] pointer-events-none"
                loading="lazy"
              />
              <p className="my-[24px] md:my-[16px] text-black-green font-normal font-nichrome md:text-[24px] text-[18px] tracking-normal leading-[1.1]">
                {item.label}
              </p>
              <h3 className="text-black-green font-nichrome font-bold uppercase md:text-[26px] text-[32px] leading-tight">
                {item.headline}
              </h3>
              <p className="mt-[8px] text-black-green font-general font-light text-[14px] md:text-[18px] leading-[1.4]">
                {item.description}
              </p>
              {index === 0 && item.footnote ? (
                <p className="mt-[8px] text-black-green font-general font-light text-[10px] md:text-[15px] leading-[1.4] italic">
                  {item.footnote}
                </p>
              ) : null}
              {"footnote2" in item && item.footnote2 ? (
                <p className="mt-[8px] text-black-green font-general font-light text-[10px] md:text-[15px] leading-[1.4] italic">
                  {item.footnote2}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div
          className="mt-16 text-center"
          ref={ctaRef as RefObject<HTMLDivElement>}
        >
          <p className="text-black-green font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal leading-[1.1]">
            Inscrivez vous pour le webinar de lancement de notre seconde opération
          </p>
          <button
            type="button"
            onClick={openModal}
            className="group mt-6 !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-dark-green hover:text-lime-green text-dark-green bg-lime-green font-bold font-nichrome md:text-[28px] text-[28px] md:h-[64px] h-[60px] flex justify-center items-center gap-[10px] md:py-5 py-4 px-6 transition-all duration-300 ease-in border-lime-green mx-auto"
          >
            JE M’INSCRIS
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
    </section>
  );
};

export default InvestOpportunitySection;
