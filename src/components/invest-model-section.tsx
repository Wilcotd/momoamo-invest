"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";

import ModelIcon1 from "@/assets/images/invest-page/invest-model-icon-1.svg";
import ModelIcon2 from "@/assets/images/invest-page/invest-model-icon-2.svg";
import ModelIcon3 from "@/assets/images/invest-page/invest-model-icon-3.svg";

const modelItems = [
  {
    icon: ModelIcon1,
    title: "LA PERFORMANCE DU VALUE ADD",
    bullets: [
      "Acquisition d’actifs sous-exploités",
      "Rénovation lourde ciblée et optimisation des espaces pour l’usage séminaire",
      "Modèle de travaux standardisé et coûts négociés (≈ -30% vs un projet isolé)",
    ],
  },
  {
    icon: ModelIcon2,
    title: "LA SÉCURITÉ DU LOCATIF",
    bullets: [
      "Nous sommes l’exploitant : pas d’incertitude sur la recherche d’un locataire",
      "Remplissage assuré grâce à Kymono (300+ séminaires par an)",
      "20% de rendement locatif net*, avec positionnement prix/standing excellent",
    ],
  },
  {
    icon: ModelIcon3,
    title: "LE CONTRÔLE TOTAL",
    bullets: [
      "Un modèle éprouvé et répliqué — vous investissez dans un opérateur unique, domaine après domaine",
      "Sortie sécurisée dès le départ — pas d’acheteur à trouver, nous exploitons nous-mêmes",
      "100% passif pour vous — du financement à l’exploitation, nous gérons pour vous",
    ],
  },
];

const InvestModelSection = () => {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { openModal } = useInvestWaitlistModal();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;

    const nodes = itemRefs.current.filter(
      (node): node is HTMLDivElement => Boolean(node)
    );
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (!visible.length) return;
        const nextIndex = nodes.indexOf(visible[0].target as HTMLDivElement);
        if (nextIndex !== -1) setActiveIndex(nextIndex);
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Modèle Momoamo" className="w-full bg-dark-green">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12">
          <div className="w-full">
            <p className="text-lime-green font-nichrome font-bold uppercase text-[28px] tracking-wider">
              UN MODÈLE UNIQUE
            </p>
            <h2 className="text-lime-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px] mt-4">
              VALUE ADD + GESTION LOCATIVE :
              LE MEILLEUR DES DEUX MONDES
            </h2>
            <p className="text-lime-green font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal text-start leading-[1.1] mt-[24px] mb-[48px]">
              Un modèle simple et inédit : ni pure marchand de biens, ni simple
              gestionnaire immobilier.
            </p>
            <p className="text-lime-green font-normal font-nichrome md:text-[36px] text-[26px] tracking-normal text-start leading-[1.1]">
              Investir dans nos projets c&apos;est profiter d&apos;un modèle intégré
              qui crée de la valeur à chaque étape.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="group mt-6 !border-[2px] uppercase hover:!bg-transparen text-dark-green bg-lime-green font-bold font-nichrome md:text-[28px] text-[20px] md:h-[64px] h-[70px] flex justify-center items-center gap-[10px] md:py-5 py-4 px-6 transition-all duration-300 ease-in border-lime-green leading-[1.1] text-start"
            >
              DÉCOUVRIR NOTRE SECONDE OPÉRATION
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

          <div className="w-full relative hidden md:block">
            <div className="absolute left-[14px] top-2 bottom-2 w-px bg-lime-green/30" />
            <div className="flex flex-col gap-[72px]">
              {modelItems.map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`relative pl-10 transition-opacity duration-300 ease-in ${
                    activeIndex === index ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <span className="absolute left-[9px] top-[6px] h-[10px] w-[10px] rounded-full bg-lime-green" />
                  <Image
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] pointer-events-none"
                    loading="lazy"
                  />
                  <h3 className="text-lime-green font-nichrome font-bold uppercase text-[28px] leading-none my-[32px]">
                    {item.title}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-lime-green font-general font-light text-[20px] leading-[1.4]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden mt-10">
          <div className="relative w-full h-px bg-lime-green/30">
            <span className="absolute -top-[4px] left-0 h-[8px] w-[8px] rounded-full bg-lime-green" />
            <span className="absolute -top-[4px] right-0 h-[8px] w-[8px] rounded-full bg-lime-green" />
          </div>
          <div className="mt-8">
            <Swiper spaceBetween={24} slidesPerView={1}>
              {modelItems.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="bg-transparent">
                    <Image
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px] pointer-events-none"
                      loading="lazy"
                    />
                    <h3 className="text-lime-green font-nichrome font-bold uppercase text-[28px] leading-none my-[32px]">
                      {item.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-lime-green font-general font-light text-[20px] leading-[1.4]"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestModelSection;
