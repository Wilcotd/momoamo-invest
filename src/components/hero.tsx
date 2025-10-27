"use client";

import Image from "next/image";
import {
  useHeroAnimations,
  useHeroInteractiveAnimations,
  useHeroScrollAnimations,
} from "@/animations/hero";
import { AnimatePresence, motion } from "framer-motion";
const MotionImage = motion(Image);

// Images
import User3Image from "@/assets/images/hero/hero-attr-2.webp";
import User2Image from "@/assets/images/hero/new-hero-or-2.jpg";
import User4Image from "@/assets/images/hero/hero-attr-3.webp";
import User1Image from "@/assets/images/hero/new-hero-or-1.webp";
import HouseImage from "@/assets/images/hero/new-hero-or-3.webp";
import Link from "next/link";
import Letters from "./ui/letters";
import { useState, useEffect } from "react";
import ModalReservation from "./ui/modal-reservation";

const HeroSection = ({
  isScroll,
  stop,
}: {
  isScroll: boolean;
  stop: boolean;
}) => {
  // Initialize animations
  const { headerRef, lettersRef, titleRef, buttonRef } = useHeroAnimations();
  const { heroRef } = useHeroScrollAnimations(lettersRef, titleRef);
  useHeroInteractiveAnimations();
  const [isModal, setIsModal] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <ModalReservation
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        title="Réserver votre offsite"
      />
      <section
        ref={heroRef}
        aria-label="Hero section"
        className="max-w-[1360px] mx-auto w-full py-7 relative md:h-auto md:pb-[16vw] h-[840px]"
      >
        <header
          ref={headerRef}
          className="w-full xl:px-14 px-4 flex justify-between items-center opacity-0"
        >
          <nav className="flex md:justify-start justify-between items-center gap-6 w-full">
            <a
              href="https://www.instagram.com/momoamo_places/"
              className="uppercase leading-none tracking-wider font-nichrome text-lime-green text-[18px] font-bold no-underline cursor-pointer"
            >
              instagram
            </a>
            <a
              href="https://www.linkedin.com/company/momoamo/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 uppercase leading-none tracking-wider font-nichrome text-lime-green text-[18px] font-bold no-underline cursor-pointer"
            >
              linkedin
            </a>
          </nav>
          <div className="justify-end items-center gap-6 hidden md:flex">
            <button
              type="button"
              onClick={() => setIsModal(true)}
              className="uppercase leading-none tracking-wider font-nichrome font-bold text-dark-green text-2xl w-[159px] h-[44px] border-[1px] bg-lime-green hover:!bg-dark-green hover:!text-lime-green border-lime-green transition-all duration-300 ease-in"
            >
              réserver
            </button>
          </div>
        </header>
        <Letters
          isScroll={isScroll}
          stop={stop}
          direction={scrollDirection || "down"}
        />
        <main className="w-full h-full md:mt-10 mt-[18px]">
          <article className="w-full h-[28%]">
            <header
              ref={titleRef}
              className="w-full max-w-[745px] mx-auto flex flex-col justify-center items-center md:mt-[87px] mt-[83px] relative z-[3] md:px-0 px-4"
            >
              <h1 className="hero-title uppercase text-center leading-none font-nichrome text-lime-green font-bold md:text-[72px] text-[58px] tracking-normal opacity-0 w-[367px] max-w-full md:w-full">
                Votre prochain offsite commence ici
              </h1>
              <p className="hero-title my-6 text-center text-lime-green font-general text-[18px] font-light tracking-normal opacity-0 w-[367px] max-w-full md:w-full">
                Une collection de maisons d'exception créée pour vos séjours en
                équipe
              </p>
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsModal(true)}
                  ref={buttonRef}
                  className="group hero-button uppercase text-dark-green bg-lime-green font-bold font-nichrome md:text-[28px] text-2xl sm:w-[340px] md:h-[64px] w-full h-[60px] flex md:justify-center justify-between items-center gap-2 opacity-0 md:py-5 py-4 px-6 transition-all duration-300 ease-out border-[1px] border-lime-green hover:!bg-dark-green hover:!text-lime-green leading-none"
                >
                  RÉSERVER VOTRE OFFSITE{" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-auto h-auto transition-all duration-300 ease-in scale-130"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </header>
            {/* Images with overlay */}
            <figure
              className="w-full h-full max-w-[1360px] mx-auto"
              aria-label="Featured images"
            >
              <MotionImage
                src={HouseImage.src}
                alt=""
                width={355}
                height={533}
                aria-hidden="true"
                className="hero-image w-[219px] h-[310px] md:h-auto object-cover absolute -right-[50px] bottom-[387px] lg:w-[calc(50%-400px)] lg:aspect-[355/533] lg:bottom-auto lg:top-[27.8%] lg:right-[56px] pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                loading="eager"
              />
              <MotionImage
                src={User1Image.src}
                alt=""
                width={162}
                height={243}
                aria-hidden="true"
                className="hero-image w-[129px] h-[193px] object-cover absolute bottom-[118px] left-0 z-[2] lg:aspect-[162/243] lg:h-auto lg:w-[10%] lg:left-[10.22%] lg:bottom-[29%] xl:left-[12.22%] xl:bottom-[32%] pointer-events-none"
                initial={{ opacity: 0, zIndex: 2 }}
                animate={{ opacity: 1, zIndex: 2 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                loading="eager"
              />
              <MotionImage
                src={User2Image.src}
                alt=""
                width={206}
                height={309}
                aria-hidden="true"
                className="hero-image w-[164px] h-[245px] object-cover absolute -bottom-[50px] left-[31px] z-[1] lg:aspect-[200/300] lg:h-auto lg:w-[12.33%] lg:left-[13.33%] xl:w-[13.33%] xl:left-[15.33%] lg:bottom-[8%] pointer-events-none"
                initial={{ opacity: 0, zIndex: 1 }}
                animate={{ opacity: 1, zIndex: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                loading="eager"
              />
              <MotionImage
                src={User4Image.src}
                alt=""
                width={206}
                height={309}
                aria-hidden="true"
                className="hero-image hidden lg:block w-[164px] h-[245px] object-cover absolute -bottom-[50px] z-[1] md:aspect-[200/300] md:h-auto lg:w-[12.33%] lg:right-0 xl:w-[13%] md:bottom-[8%] pointer-events-none"
                initial={{ opacity: 0, zIndex: 1 }}
                animate={{ opacity: 1, zIndex: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                loading="eager"
              />
              <MotionImage
                src={User3Image.src}
                alt=""
                width={201}
                height={250}
                aria-hidden="true"
                className="hero-image absolute bottom-0 left-0 w-[201px] h-[250px] object-cover lg:block hidden md:left-[-1%] md:bottom-[-2%] md:aspect-[200/250] md:w-[13%] md:h-auto pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.4 }}
                loading="eager"
              />
            </figure>
          </article>
        </main>
        <AnimatePresence>
          {!stop && (
            <motion.nav
              key="desktop-nav"
              aria-label="Main navigation"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isScroll && scrollDirection === "down" ? 1 : 0,
                y: isScroll && scrollDirection === "down" ? 0 : 50,
              }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed bottom-4 z-[9999] left-1/2 -translate-x-1/2 w-fit mx-auto p-2 lg:flex gap-2 bg-gray-green shadow-[0px_43px_90.1px_0px_rgba(41,34,34,0.2)] hidden"
            >
              <Link
                href="#NOS-MAISONS"
                className="h-[58px] hover:!opacity-100 hover:bg-[#27391F1A] text-[18px] hover:border-[#ffffff1a] w-[130px] uppercase flex items-center justify-center border border-[#273A1F33] font-nichrome font-bold text-dark-green transition-all duration-300 ease-in"
              >
                NOS MAISONS
              </Link>
              <Link
                href="#LEXPERIENE"
                className="h-[58px] hover:!opacity-100 hover:bg-[#27391F1A] text-[18px] hover:border-[#ffffff1a] w-[130px] uppercase flex items-center justify-center border border-[#273A1F33] font-nichrome font-bold text-dark-green transition-all duration-300 ease-in"
              >
                L'EXPERIENCE
              </Link>
              <Link
                href="#NOS-PRINCIPES"
                className="h-[58px] hover:!opacity-100 hover:bg-[#27391F1A] text-[18px] hover:border-[#ffffff1a] w-[130px] uppercase flex items-center justify-center border border-[#273A1F33] font-nichrome font-bold text-dark-green transition-all duration-300 ease-in"
              >
                NOS PRINCIPES
              </Link>
              <Link
                href={"#savoir-faire"}
                className="h-[58px] hover:!opacity-100 hover:bg-[#27391F1A] text-[18px] hover:border-[#ffffff1a] w-[130px] uppercase flex items-center justify-center border border-[#273A1F33] font-nichrome font-bold text-dark-green transition-all duration-300 ease-in"
              >
                SAVOIR-FAIRE
              </Link>
              <Link
                href={"#FAQ"}
                className="h-[58px] hover:!opacity-100 hover:bg-[#27391F1A] text-[18px] hover:border-[#ffffff1a] w-[130px] uppercase flex items-center justify-center border border-[#273A1F33] font-nichrome font-bold text-dark-green transition-all duration-300 ease-in"
              >
                FAQ
              </Link>
              <button
                type="button"
                onClick={() => setIsModal(true)}
                className={[
                  "group hover:bg-transparent hover:text-black hover:border hover:border-black flex items-center justify-center gap-[10px] uppercase leading-none tracking-wider font-nichrome font-bold text-[#ECE3D5] text-[18px] w-[152px] h-[58px] bg-black-green transition-all duration-300 ease-in",
                ].join(" ")}
              >
                réserver
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:invert transition-all duration-300 ease-in"
                  aria-hidden="true"
                >
                  <mask
                    id="mask0_292_2305"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="26"
                    height="26"
                  >
                    <rect width="26" height="26" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_292_2305)">
                    <path
                      d="M17.5297 14.1935H3.90625V11.8064H17.5297L11.3051 5.58182L13.0016 3.89453L22.1071 12.9999L13.0016 22.0953L11.3051 20.4181L17.5297 14.1935Z"
                      fill="#ECE3D5"
                    />
                  </g>
                </svg>
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!stop && (
            <motion.button
              key="mobile-nav"
              type="button"
              aria-label="Réserver votre offsite"
              onClick={() => setIsModal(true)}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isScroll ? 1 : 0,
                y: isScroll ? 0 : 50,
              }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed bottom-0 z-[9999] left-1/2 -translate-x-1/2 text-gray-green font-nichrome font-bold text-2xl w-full h-19 bg-black-green md:hidden flex items-center justify-between p-6"
            >
              RÉSERVER VOTRE OFFSITE
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <mask
                  id="mask0_288_1999"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="26"
                  height="26"
                >
                  <rect width="26" height="26" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_288_1999)">
                  <path
                    d="M17.5297 14.1935H3.90625V11.8064H17.5297L11.3051 5.58182L13.0016 3.89453L22.1071 12.9999L13.0016 22.0953L11.3051 20.4181L17.5297 14.1935Z"
                    fill="white"
                  />
                </g>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default HeroSection;
