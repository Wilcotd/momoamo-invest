"use client";

import type { RefObject } from "react";
import {
  useScrollSlideUp,
  useScrollStaggerIn,
} from "@/animations/scrollAnimations";

const taxationItems = [
  {
    label: "150-0 B TER",
    text: "Le réinvestissement d'une plus-value dans un de nos projets permet un report d’imposition via le remploi prévu par l'article 150-0 B ter.",
  },
  {
    label: "EXONÉRÉ D’IFI",
    text: "Nos projets peuvent être structurés pour rester hors assiette IFI selon la configuration retenue par l'investisseur.",
  },
  {
    label: "RÉGIME MÈRE-FILLE",
    text: "En investissant au moins 5 % du montant levé via votre holding soumise à l'IS, vous bénéficiez du régime mère-fille (quote-part 5 %).",
  },
];

const InvestTaxationSection = () => {
  const titleRef = useScrollSlideUp();
  const listRef = useScrollStaggerIn(0.12);
  const footnoteRef = useScrollSlideUp(0.1);
  return (
    <section aria-label="Fiscalité Momoamo" className="w-full bg-[#5a2c2b] overflow-hidden">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[100px] py-[40px]">
        <div
          className="w-[650px] max-w-full"
          ref={titleRef as RefObject<HTMLDivElement>}
        >
          <h2 className="text-[#ff7a5a] font-nichrome font-bold uppercase leading-none md:text-[80px] text-[40px]">
            OPTIMISEZ VOTRE FISCALITÉ GRÂCE À MOMOAMO
          </h2>
          <p className="text-[#ff7a5a] font-normal font-nichrome md:text-[32px] text-[26px] tracking-normal text-start leading-[1.1] mt-[16px] md:mt-[24px]">
            Nos club deals
          </p>
        </div>

        <div
          className="my-[32px] md:my-[62px] border-t border-[#ff7a5a]/60"
          ref={listRef as RefObject<HTMLDivElement>}
        >
          {taxationItems.map((item) => (
            <div
              key={item.label}
              className="grid gap-[8px] py-8 border-b border-[#ff7a5a]/60 md:grid-cols-[0.8fr_1.2fr]"
            >
              <p className="text-[#ff7a5a] font-nichrome font-bold uppercase text-[28px] md:text-[32px] leading-tight">
                {item.label}
              </p>
              <p className="text-[#ff7a5a] font-normal font-nichrome text-[20px] md:text-[26px] tracking-normal text-start leading-[1.35]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-[#ff7a5a]/80 font-general font-light text-[14px] md:text-[18px] leading-[1.2] italic w-[1070px] max-w-full"
          ref={footnoteRef as RefObject<HTMLParagraphElement>}
        >
          Les informations ci-dessus sont fournies à titre indicatif et ne constituent pas un conseil fiscal ou juridique personnalisé. <br />Le traitement fiscal dépend de la situation individuelle de chaque client et est susceptible d’évoluer dans le temps.
        </p>
      </div>
    </section>
  );
};

export default InvestTaxationSection;
