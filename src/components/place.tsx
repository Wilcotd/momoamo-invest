"use client";

import Image from "next/image";
import { usePlaceAnimations } from "@/animations/scrollAnimations";
import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";

// Images
import Img1 from "@/assets/images/place/place-or-1.webp";
import Img2 from "@/assets/images/place/place-or-2.webp";
import Img3 from "@/assets/images/place/place-or-3.webp";
import Img4 from "@/assets/images/place/place-or-4.webp";
import { useState } from "react";
import ModalReservation from "./ui/modal-reservation";
import { InfiniteMovingLogo } from "./ui/infinite-moving-logo";

const PlaceSection = () => {
  const { titleRef, descriptionRef, buttonRef, destinationsRef } =
    usePlaceAnimations();
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <ModalReservation
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        title="Réserver mon séjour"
      />
      <section
        aria-label="Lieux et destinations Momoamo"
        className="w-full mx-auto relative h-full md:py-[120px] py-[64px] md:px-0 !px-0"
      >
        <div className="max-w-full w-[1200px] mx-auto block xl:px-14 px-4 text-center">
          <h2
            ref={titleRef}
            className="uppercase text-black-green md:text-[86px] text-[58px] font-nichrome font-bold tracking-normal leading-none mb-[24px] md:mb-[40px]"
          >
            Plus qu{"'"}un lieu, un moment
          </h2>
          <p
            ref={descriptionRef}
            className="text-black-green md:text-[36px] text-[24px] font-normal font-nichrome tracking-normal leading-[1.1] mb-[32px] md:mb-[40px]"
          >
            Offrir à chaque équipe un lieu unique, pour vivre une expérience
            collective qui allie proximité, confort et inspiration.
          </p>
          <div ref={buttonRef}>
            <button
              onClick={() => setIsModal(true)}
              type="button"
              aria-label="Réserver votre offsite"
              className="group mx-auto !border-[2px] hover:!bg-transparent hover:text-black hover:border hover:border-black uppercase text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[26px] text-[28px] md:w-[347px] w-full md:h-[64px] h-[60px] flex justify-center items-center gap-2 transition-all duration-300 ease-in"
            >
              RÉSERVER VOTRE OFFSITE
              <Image
                src={Button_Arrow_Svg}
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="w-[20px] h-[20px] group-hover:invert transition-all duration-300 ease-in pointer-events-none"
                loading="lazy"
              />
            </button>
          </div>
        </div>
        <figure
          className="md:mt-[137px] mt-[32px]"
          aria-label="Galerie d'images Momoamo"
        >
          <InfiniteMovingLogo
            pauseOnHover={false}
            classNameWrapper="gap-5 md:gap-14 items-center"
            speed="normal"
            direction="left"
            aria-roledescription="carousel"
          >
            <Image
              src={Img1}
              alt=""
              aria-hidden="true"
              width={474}
              height={474}
              className="md:w-[474px] md:h-[474px] w-[165px] h-[165px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={Img2}
              alt=""
              aria-hidden="true"
              width={474}
              height={711}
              className="md:w-[474px] md:h-[711px] w-[165px] h-[247px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={Img3}
              alt=""
              aria-hidden="true"
              width={474}
              height={474}
              className="md:w-[474px] md:h-[474px] w-[165px] h-[165px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={Img4}
              alt=""
              aria-hidden="true"
              width={474}
              height={711}
              className="md:w-[474px] md:h-[711px] w-[165px] h-[247px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={Img1}
              alt=""
              aria-hidden="true"
              width={474}
              height={474}
              className="md:w-[474px] md:h-[474px] w-[165px] h-[165px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={Img2}
              alt=""
              aria-hidden="true"
              width={474}
              height={711}
              className="md:w-[474px] md:h-[711px] w-[165px] h-[247px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={Img3}
              alt=""
              aria-hidden="true"
              width={474}
              height={474}
              className="md:w-[474px] md:h-[474px] w-[165px] h-[165px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={Img4}
              alt=""
              aria-hidden="true"
              width={474}
              height={711}
              className="md:w-[474px] md:h-[711px] w-[165px] h-[247px] object-cover rounded mr-[19px] md:mr-[56px] pointer-events-none"
              loading="lazy"
            />
          </InfiniteMovingLogo>
        </figure>
        <div
          id="destinations"
          aria-label="Destinations Momoamo"
          className="md:mt-[141px] mt-[89px]"
        >
          <div className="w-full flex flex-col md:flex-row md:gap-16 gap-8">
            {/* Left: Destinations List */}
            <div className="flex flex-col w-full max-w-[1360px] mx-auto xl:px-14 px-4">
              <h2 className="text-black-green font-nichrome font-bold md:text-[90px] text-[58px] uppercase leading-none">
                Destinations
                <br />à venir
              </h2>
              <nav
                ref={destinationsRef}
                className="md:mt-[49px] mt-[32px] w-full"
                aria-label="Liste des destinations à venir"
              >
                {[
                  {
                    title: "Perche",
                    description: "coming soon",
                    date: "2026",
                  },
                  {
                    title: "Normandie",
                    description: "coming soon",
                    date: "2026",
                  },
                  {
                    title: "Bourgogne",
                    description: "coming soon",
                    date: "2027",
                  },
                  {
                    title: "Vexin",
                    description: "coming soon",
                    date: "2027",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="test-card-class z-0 group flex justify-between items-center w-full border-t border-[#292222] md:h-24 h-32 relative touch-manipulation"
                  >
                    <article className="md:w-[932px] w-full flex md:flex-row flex-col md:justify-between items-start md:items-center">
                      <h3 className="text-black-green font-nichrome font-bold md:text-[28px] text-[28px] uppercase leading-tight md:max-w-60 max-w-full">
                        {item.title}
                      </h3>
                      <p className="text-black-green font-normal font-nichrome text-[18px] tracking-normal text-end">
                        {item.description}
                      </p>
                    </article>
                    <p className="text-black-green font-normal font-nichrome text-[18px] tracking-normal">
                      {item.date}
                    </p>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceSection;
