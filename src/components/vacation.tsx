"use client";

import { useVacationAnimations } from "@/animations/scrollAnimations";
import Image from "next/image";
import Img1 from "@/assets/images/vacation/NOS-PRINCIPES-2.jpg";
import Img2 from "@/assets/images/vacation/go-off-script.jpeg";
import Img3 from "@/assets/images/vacation/NOS-PRINCIPES-1.webp";
import { useWindowSize } from "@/hooks/useWindowSize";

const cards = [
  {
    title: "MAKE IT MEMORABLE",
    image: { src: Img1.src, alt: "MAKE IT MEMORABLE" },
    text: "Chaque détail est pensé pour surprendre, pour créer des moments forts et des souvenirs d'équipe inoubliables.",
  },
  {
    title: "GO OFF-SCRIPT",
    image: { src: Img2.src, alt: "GO OFF-SCRIPT" },
    text: "Les codes du séminaire classique laissent place à des expériences personnalisées, à l'image de ceux qui le vivent.",
  },
  {
    title: "EFFORTLESS SIMPLICITY",
    image: { src: Img3.src, alt: "EFFORTLESS SIMPLICITY" },
    text: "Tout est pensé pour que les invités n'aient plus qu'à profiter : le confort d'un hôtel, la chaleur d'une maison, la liberté d'un lieu à soi.",
  },
];

const VacationSection = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const { titleRef } = useVacationAnimations(isMobile);

  return (
    <section
      id="NOS-PRINCIPES"
      aria-label="NOS PRINCIPES"
      className="max-w-[1360px] xl:px-14 px-4 trigger w-full mx-auto relative md:pt-[80px] py-[64px] md:pb-[80px]"
    >
      <h2
        ref={titleRef}
        className="max-w-full w-[530px] mx-auto uppercase text-center text-black-green md:text-[64px] text-[58px] font-nichrome font-bold tracking-normal leading-none pb-[40px]"
      >
        NOS PRINCIPES DONNENT VIE À VOS SÉJOURS DE RÊVE
      </h2>
      <div
        id="animation-cards"
        className="card-container md:mt-[40px] mt-8"
        aria-label="Our values"
      >
        <ul className="grid gap-[40px] position-relative list-none p-0">
          {cards.map((card, i) => (
            <li
              key={i}
              className={`sticky card-wrapper bg-[#EEE5D7] ${
                i === cards.length - 1 ? "" : ""
              }`}
              style={{ top: `${(isMobile ? 72 : 60) + i * 67}px` }}
            >
              <article className="card grid md:grid-cols-3 grid-cols-1 w-full pt-4 border-t border-[#292222]">
                <header className="flex items-start gap-4 mb-4 md:mb-0">
                  <h3 className="font-nichrome font-bold md:text-[28px] text-[28px] text-black-green uppercase leading-tight">
                    {card.title}
                  </h3>
                </header>
                <figure className="flex flex-col md:flex-row gap-4 m-0">
                  <Image
                    src={card.image.src}
                    width={429}
                    height={525}
                    alt={card.image.alt}
                    className="md:w-[429px] w-full h-[525px] max-h-[40vh] md:max-h-none object-cover rounded"
                    loading="lazy"
                  />
                </figure>
                <p className="text-black-green text-[18px] font-general font-normal md:ml-4 mt-2 md:mt-0 leading-[1.2]">
                  {card.text}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VacationSection;
