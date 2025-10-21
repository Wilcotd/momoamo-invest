"use client";

import Image from "next/image";
import { usePowerAnimations } from "@/animations/scrollAnimations";
// SVG
import Arrow_Svg from "@/assets/images/svgs/power_arrow.svg";
import PowerFramer from "@/assets/images/power/frame.svg";
import PowerLogo from "@/assets/images/power/logo.svg";
// Images
import PowerBanner from "@/assets/images/power/banner.jpg";

// Logo imports
import Airbnb_Svg from "@/assets/images/logos/airbnb.svg";
import Alan_Svg from "@/assets/images/logos/alan.svg";
import Amazon_Svg from "@/assets/images/logos/amazon.svg";
import Clubmed_Svg from "@/assets/images/logos/clubmed.svg";
import Doctolib_Svg from "@/assets/images/logos/doctolib.svg";
import Evian_Svg from "@/assets/images/logos/evian.svg";
import Google_Svg from "@/assets/images/logos/google.svg";
import Kpmg_Svg from "@/assets/images/logos/kpmg.svg";
import Loreal_Svg from "@/assets/images/logos/loreal.svg";
import Lvmh_Svg from "@/assets/images/logos/lvmh.svg";
import Microsoft_Svg from "@/assets/images/logos/microsoft.svg";
import Netflix_Svg from "@/assets/images/logos/netflix.svg";
import Payfit_Svg from "@/assets/images/logos/payfit.svg";
import Qonto_Svg from "@/assets/images/logos/qonto.svg";
import Sncf_Svg from "@/assets/images/logos/sncf.svg";
import Swile_Svg from "@/assets/images/logos/swile.svg";
import Uber_Svg from "@/assets/images/logos/uber.svg";

// Import Swiper styles
import "swiper/css";
import { InfiniteMovingLogo } from "./ui/infinite-moving-logo";
import { cn } from "@/lib/lib";

const logos = [
  { img: Airbnb_Svg, width: 103, height: 32 },
  { img: Alan_Svg, width: 103, height: 21 },
  { img: Amazon_Svg, width: 103, height: 32 },
  { img: Clubmed_Svg, width: 103, height: 32 },
  { img: Doctolib_Svg, width: 98, height: 29 },
  { img: Evian_Svg, width: 90, height: 32 },
  { img: Google_Svg, width: 62, height: 59 },
  { img: Kpmg_Svg, width: 90, height: 32 },
  { img: Loreal_Svg, width: 90, height: 25 },
  { img: Lvmh_Svg, width: 90, height: 32 },
  { img: Microsoft_Svg, width: 90, height: 30 },
  { img: Netflix_Svg, width: 92, height: 25 },
  { img: Payfit_Svg, width: 90, height: 32 },
  { img: Qonto_Svg, width: 92, height: 25 },
  { img: Sncf_Svg, width: 90, height: 32 },
  { img: Swile_Svg, width: 90, height: 32 },
  { img: Uber_Svg, width: 90, height: 32 },
];

const PowerSection = () => {
  const { leftContentRef, rightContentRef } = usePowerAnimations();

  return (
    <section
      aria-label="Powered by KYMONO"
      className="max-w-[1360px] w-full mx-auto relative md:py-[123px] py-[64px]"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between md:gap-14 gap-8 xl:px-14 px-4">
        <article ref={leftContentRef} className="w-full">
          <header>
            <h2 className="text-power-secondary font-nichrome font-bold md:text-[90px] text-[58px] uppercase leading-none mb-6">
              Powered by <br />
              KYMONO®
            </h2>
          </header>

          <p className="text-power-secondary font-light font-general text-[18px] tracking-normal md:mt-[24px] mt-8 mb-[16px] leading-[1.3]">
            Depuis 2017, Kymono accompagne les entreprises sur tous les enjeux
            liés à leur culture d'entreprise. Grâce à différents leviers:
            personnalisation de vêtements et objets, aménagement de bureaux,
            conseil en marque employeur, et organisation d'événements, Kymono
            est ce partenaire central dans les moments de fort d'une entreprise.
          </p>
          <p className="text-power-secondary font-light font-general text-[18px] tracking-normal leading-[1.3] mb-[16px]">
            Kymono souligne ce qui vous fédère autour d'une expérience
            exigeante, sur-mesure et profondément humaine.
          </p>
          <p className="text-power-secondary font-light font-general text-[18px] tracking-normal leading-[1.3]">
            We are Culture Designers.
          </p>
          <a
            href="https://kymono.co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir le site Kymono (s'ouvre dans un nouvel onglet)"
            className="hidden !border-[2px] md:flex uppercase text-power-main bg-power-secondary font-bold font-nichrome text-[26px] md:w-[183px] w-full h-[60px] justify-center items-center gap-2 mt-8 transition-all duration-300 ease-in border-power-secondary hover:bg-power-main hover:text-power-secondary"
          >
            Voir le site
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] scale-130"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <section
            className="w-full md:mt-[72px] mt-8"
            aria-label="Statistiques Kymono"
          >
            {/* Desktop: 3 in a row, Mobile: 2 in first row, 1 centered in second row */}
            <ul className="hidden md:flex flex-wrap justify-between items-center gap-y-8">
              {[
                { title: "+10 000", description: "Clients" },
                { title: "+ 1500", description: "Évènements" },
                { title: "1", description: "Équipe passionnée" },
              ].map((item, index) => (
                <li
                  className="flex flex-col flex-1 min-w-[180px] max-w-none"
                  key={index}
                >
                  <h3 className="uppercase font-nichrome font-bold text-[40px] text-power-secondary">
                    {item.title}
                  </h3>
                  <p className="font-general font-light text-[16px] text-power-secondary leading-[1.3]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            {/* Mobile: 2 in first row, 1 centered in second row */}
            <ul className="flex flex-col md:hidden gap-y-8">
              <div className="flex flex-row justify-between gap-x-4">
                {[
                  { title: "+10 000", description: "Clients" },
                  { title: "319", description: "Évènements" },
                ].map((item, index) => (
                  <li className="flex flex-col flex-1 min-w-[48%]" key={index}>
                    <h3 className="uppercase font-nichrome font-bold text-[44px] text-power-secondary md:text-start text-center">
                      {item.title}
                    </h3>
                    <p className="font-general font-normal text-[18px] text-power-secondary md:text-start text-center">
                      {item.description}
                    </p>
                  </li>
                ))}
              </div>
              <li className="flex justify-center">
                <article className="flex flex-col min-w-[180px] max-w-[80%] items-center">
                  <h3 className="uppercase font-nichrome font-bold text-[44px] text-power-secondary">
                    37%
                  </h3>
                  <p className="font-general font-normal text-[18px] text-power-secondary">
                    "Au vert" proche de paris
                  </p>
                </article>
              </li>
            </ul>
          </section>
        </article>

        <figure
          ref={rightContentRef}
          className="w-full h-auto md:block hidden relative"
          aria-label="Logo et bannière Kymono"
        >
          <Image
            src={PowerBanner.src}
            alt=""
            aria-hidden="true"
            width={644}
            height={605}
            className="h-full w-full object-cover md:block hidden pointer-events-none"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 w-full h-full" />

          <figcaption className="w-full h-full flex flex-col justify-center items-center absolute -top-10 left-0">
            <Image
              src={PowerLogo}
              alt=""
              aria-hidden="true"
              width={273}
              height={274}
              className="w-[273px] h-[274px] pointer-events-none"
              loading="lazy"
            />
            <Image
              src={PowerFramer}
              alt=""
              aria-hidden="true"
              width={273}
              height={42}
              className="w-[273px] h-auto absolute top-56 pointer-events-none"
              loading="lazy"
            />
          </figcaption>
        </figure>
      </div>
      <figure
        className="md:mt-16 mt-8 flex flex-col justify-center"
        aria-label="Logos des clients"
      >
        <figcaption className="text-[18px] font-general font-light text-center text-power-secondary">
          Tout n'est qu'une histoire de confiance.
        </figcaption>
        <InfiniteMovingLogo speed="fast" aria-roledescription="carousel">
          {logos.map((item, i) => (
            <Image
              key={i}
              src={item.img}
              alt=""
              aria-hidden="true"
              width={item.width}
              height={item.height}
              className={cn(
                "mx-8 object-contain w-[103px] h-[29px] md:w-auto md:h-auto pointer-events-none"
              )}
              loading="lazy"
            />
          ))}
        </InfiniteMovingLogo>
      </figure>
      <div className="block md:hidden px-4">
        <a
          href="https://kymono.co/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir le site Kymono (s'ouvre dans un nouvel onglet)"
          className="flex md:hidden uppercase text-power-main bg-power-secondary font-bold font-nichrome text-[28px] md:w-[204px] w-full h-[60px] justify-center items-center gap-2 mt-8 border-[1px] border-power-secondary hover:bg-power-main hover:text-power-secondary"
        >
          Voir le site
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] h-[20px] scale-130"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default PowerSection;
