"use client";

import Image from "next/image";

import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";
import Bed_Svg from "@/assets/images/svgs/bed.svg";

const opportunityItems = [
  {
    label: "Rendement attractif et prévisible*",
    headline: "12% DE TRI ANNUEL NET DE FRAIS*",
    description: "Plus value foncière et forte rentabilité locative",
    footnote:
      "*Les prévisions ne constituent pas un indicateur fiable quant aux performances futures.",
  },
  {
    label: "Durée d’engagement",
    headline: "3 À 5 ANS",
    description:
      "Le temps d’optimiser les conditions du refinancement bancaire",
  },
  {
    label: "Revenus réguliers",
    headline: "JUSQU’À 8% D’INTÉRÊTS VERSÉ MENSUELLEMENT",
    description: "Directement issus des revenus de l’activité",
  },
  {
    label: "Des garanties solides",
    headline: "UNE DOUBLE PROTECTION",
    description:
      "Vous êtes actionnaire de la société d’exploitation et bénéficiez d’une hypothèque sur le bien",
  },
  {
    label: "Sortie claire dès le départ",
    headline: "C’EST NOUS QUI VOUS RACHETONS",
    description:
      "Refinancement bancaire avec rachat des investisseurs par l’opérateur.",
  },
  {
    label: "Des avantages en nature",
    headline: "REJOIGNEZ LE CLUB FERMÉ DES INVESTISSEURS",
    description: "Accès privilégié aux maisons et évènements exclusifs",
  },
];

const InvestOpportunitySection = () => {
  const { openModal } = useInvestWaitlistModal();
  return (
    <section
      aria-label="Opportunité d’investissement"
      className="w-full bg-gray-green"
    >
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <header className="max-w-[780px]">
          <p className="text-black-green font-nichrome font-bold uppercase text-[28px] tracking-wider">
            L’OPPORTUNITÉ D’INVESTISSEMENT
          </p>
          <h2 className="text-black-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px] mt-4">
            POURQUOI INVESTIR
            <br />
            AVEC MOMOAMO ?
          </h2>
          <p className="mt-6 text-black-green font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal leading-[1.1]">
            Participez à un projet unique par son approche intégré, qui mêle performance et sécurité
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-12">
          {opportunityItems.map((item, index) => (
            <article key={item.label} className="flex flex-col">
              <Image
                src={Bed_Svg}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                className="w-[40px] h-[40px] pointer-events-none"
                loading="lazy"
              />
              <p className="my-[24px] text-black-green font-normal font-nichrome md:text-[20px] text-[24px] tracking-normal leading-[1.1]">
                {item.label}
              </p>
              <h3 className="text-black-green font-nichrome font-bold uppercase text-[28px] leading-tight">
                {item.headline}
              </h3>
              <p className="mt-[8px] text-black-green font-general font-light text-[20px] leading-[1.4]">
                {item.description}
              </p>
              {index === 0 && item.footnote ? (
                <p className="mt-[8px] text-black-green font-general font-light text-[20px] leading-[1.4] italic">
                  {item.footnote}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
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
