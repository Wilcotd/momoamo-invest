 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { InfiniteMovingLogo } from "@/components/ui/infinite-moving-logo";
import { Input } from "@/components/ui/input";
import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";

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
import InvestHeroImage from "@/assets/images/invest-page/invest-hero.webp";
import InvestHeroItem2Image from "@/assets/images/invest-page/invest-hero-item-2.webp";

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

const valueProps = [
  "TRI Cible 10-14%",
  "Un opérateur unique",
  "Un marché explosif",
];

const MomoamoLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`word flex items-center ${className ?? ""}`}>
      <div className="glyph m-lead" aria-hidden="true">
        <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.210839 186.271L3.86919 0.182617H80.3122L100.078 108.179H100.843L119.899 0.182617H196.342L200 186.271H148.401L150.585 56.1729H150.039L124.103 186.271H74.6336L48.7522 56.1729H48.2062L50.3903 186.271H0.15625H0.210839Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="cluster" aria-hidden="true">
        <span className="glyph o">
          <svg viewBox="0 0 192 191" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M96.0619 190.673C76.9511 190.673 60.1883 186.689 45.8279 178.721C31.6313 170.754 20.6017 159.676 12.6297 145.542C4.65783 131.19 0.671875 114.491 0.671875 95.3363C0.671875 76.2363 4.65783 59.4829 12.6297 45.1306C20.6017 30.7783 31.6859 19.7003 45.8279 11.9511C60.1883 3.98371 76.9511 0 96.0619 0C115.391 0 132.209 3.98371 146.569 11.9511C160.929 19.7549 172.068 30.8329 180.04 45.1306C188.012 59.4829 191.998 76.1817 191.998 95.3363C191.998 114.436 188.012 131.19 180.04 145.542C172.068 159.731 160.929 170.754 146.569 178.721C132.209 186.689 115.391 190.673 96.0619 190.673ZM57.2943 95.3363C57.2943 107.724 60.9527 117.929 68.2148 125.896C75.4769 133.7 84.8684 137.575 96.3895 137.575C107.911 137.575 117.302 133.7 124.564 125.896C131.99 117.929 135.703 107.724 135.703 95.3363C135.703 82.7849 131.99 72.58 124.564 64.7763C117.302 56.9726 107.911 53.098 96.3895 53.098C84.8684 53.098 75.4769 56.9726 68.2148 64.7763C60.8981 72.58 57.2943 82.7849 57.2943 95.3363Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="glyph m">
          <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.210839 186.271L3.86919 0.182617H80.3122L100.078 108.179H100.843L119.899 0.182617H196.342L200 186.271H148.401L150.585 56.1729H150.039L124.103 186.271H74.6336L48.7522 56.1729H48.2062L50.3903 186.271H0.15625H0.210839Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="glyph o">
          <svg viewBox="0 0 192 191" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M96.0619 190.673C76.9511 190.673 60.1883 186.689 45.8279 178.721C31.6313 170.754 20.6017 159.676 12.6297 145.542C4.65783 131.19 0.671875 114.491 0.671875 95.3363C0.671875 76.2363 4.65783 59.4829 12.6297 45.1306C20.6017 30.7783 31.6859 19.7003 45.8279 11.9511C60.1883 3.98371 76.9511 0 96.0619 0C115.391 0 132.209 3.98371 146.569 11.9511C160.929 19.7549 172.068 30.8329 180.04 45.1306C188.012 59.4829 191.998 76.1817 191.998 95.3363C191.998 114.436 188.012 131.19 180.04 145.542C172.068 159.731 160.929 170.754 146.569 178.721C132.209 186.689 115.391 190.673 96.0619 190.673ZM57.2943 95.3363C57.2943 107.724 60.9527 117.929 68.2148 125.896C75.4769 133.7 84.8684 137.575 96.3895 137.575C107.911 137.575 117.302 133.7 124.564 125.896C131.99 117.929 135.703 107.724 135.703 95.3363C135.703 82.7849 131.99 72.58 124.564 64.7763C117.302 56.9726 107.911 53.098 96.3895 53.098C84.8684 53.098 75.4769 56.9726 68.2148 64.7763C60.8981 72.58 57.2943 82.7849 57.2943 95.3363Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="glyph a">
          <svg viewBox="0 0 146 187" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.933594 186.108L34.9508 0.728516H110.138L145.193 186.108H93.6481L90.6996 165.152H54.5529L51.386 186.108H0.933594ZM60.723 123.132H84.6388L72.9539 43.7308H72.4079L60.723 123.132Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="glyph m">
          <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.210839 186.271L3.86919 0.182617H80.3122L100.078 108.179H100.843L119.899 0.182617H196.342L200 186.271H148.401L150.585 56.1729H150.039L124.103 186.271H74.6336L48.7522 56.1729H48.2062L50.3903 186.271H0.15625H0.210839Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      <div className="glyph o-tail" aria-hidden="true">
        <svg viewBox="0 0 192 191" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M96.0619 190.673C76.9511 190.673 60.1883 186.689 45.8279 178.721C31.6313 170.754 20.6017 159.676 12.6297 145.542C4.65783 131.19 0.671875 114.491 0.671875 95.3363C0.671875 76.2363 4.65783 59.4829 12.6297 45.1306C20.6017 30.7783 31.6859 19.7003 45.8279 11.9511C60.1883 3.98371 76.9511 0 96.0619 0C115.391 0 132.209 3.98371 146.569 11.9511C160.929 19.7549 172.068 30.8329 180.04 45.1306C188.012 59.4829 191.998 76.1817 191.998 95.3363C191.998 114.436 188.012 131.19 180.04 145.542C172.068 159.731 160.929 170.754 146.569 178.721C132.209 186.689 115.391 190.673 96.0619 190.673ZM57.2943 95.3363C57.2943 107.724 60.9527 117.929 68.2148 125.896C75.4769 133.7 84.8684 137.575 96.3895 137.575C107.911 137.575 117.302 133.7 124.564 125.896C131.99 117.929 135.703 107.724 135.703 95.3363C135.703 82.7849 131.99 72.58 124.564 64.7763C117.302 56.9726 107.911 53.098 96.3895 53.098C84.8684 53.098 75.4769 56.9726 68.2148 64.7763C60.8981 72.58 57.2943 82.7849 57.2943 95.3363Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <sup className="reg" aria-hidden="true">
        <svg viewBox="0 0 44 46" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.2128 45.0951C18.8821 45.0951 15.9335 44.5494 13.258 43.4579C10.5824 42.3665 8.39833 40.8385 6.54186 38.9285C4.73999 37.0185 3.32035 34.6719 2.33751 31.9434C1.35467 29.2148 0.863281 26.2134 0.863281 22.8845C0.863281 19.5557 1.40936 16.3359 2.556 13.6074C3.70265 10.8788 5.23146 8.5868 7.14254 6.62223C9.05361 4.7668 11.3469 3.29337 13.9678 2.25652C16.5887 1.21966 19.3734 0.728516 22.2673 0.728516C25.4343 0.728516 28.3828 1.21966 31.0037 2.31109C33.6792 3.40252 35.9179 4.87594 37.829 6.78594C39.6854 8.69594 41.1597 11.0425 42.2518 13.7711C43.3438 16.4997 43.8352 19.5557 43.8352 22.8845C43.8352 26.5954 43.2892 29.7605 42.088 32.5437C40.8867 35.3268 39.3033 37.6188 37.3376 39.4742C35.3719 41.2751 33.024 42.6939 30.4031 43.6217C27.7822 44.6039 25.052 45.0405 22.2673 45.0405L22.2128 45.0951ZM22.2128 40.4565C26.9632 40.4565 30.8399 38.9831 33.7884 35.9817C36.7916 32.9802 38.2658 28.6691 38.2658 22.9937C38.2658 17.3182 36.7915 13.2254 33.8976 10.1148C31.0037 7.0588 27.0724 5.47623 22.2128 5.47623C17.3532 5.47623 13.4764 7.00423 10.5825 10.1148C7.68859 13.2254 6.26885 17.4819 6.26885 22.9937C6.26885 28.5054 7.68859 32.9257 10.5825 35.9817C13.4764 38.9831 17.3532 40.5111 22.2128 40.5111V40.4565ZM21.9398 12.0248C23.7963 12.0248 25.3797 12.1885 26.581 12.5705C27.8368 12.9525 28.7104 13.4437 29.4203 14.0439C30.0755 14.6442 30.5669 15.3537 30.7853 16.1177C31.0037 16.9362 31.1129 17.6457 31.1129 18.4097C31.1129 19.9922 30.8946 21.1928 30.4031 22.1205C29.9117 23.0482 28.9835 23.7577 27.673 24.4671L32.1504 33.1985H26.5263L22.8133 25.6131H18.6637V33.1985H13.6948V12.0248H21.8305H21.9398ZM22.4312 21.4657C23.96 21.4657 24.9975 21.1928 25.4343 20.5925C25.8711 20.0468 26.0895 19.3374 26.0895 18.5188C26.0895 17.8094 25.8165 17.1545 25.1613 16.7179C24.506 16.2814 23.4139 16.0085 21.8305 16.0085H18.7728V21.4657H22.4858H22.4312Z"
            fill="currentColor"
          />
        </svg>
      </sup>
    </div>
  );
};

const InvestHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [investmentValue, setInvestmentValue] = useState(20000);
  const [isHeroVisualReady, setHeroVisualReady] = useState(false);
  const { openModal } = useInvestWaitlistModal();
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const formattedAmount = new Intl.NumberFormat("fr-FR").format(
    investmentValue
  );

  useEffect(() => {
    if (!heroVisualRef.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setHeroVisualReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHeroVisualReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(heroVisualRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section aria-label="Hero Invest" className="w-full bg-offsite-main">
      <div className="max-w-[1360px] mx-auto w-full md:pt-8 pt-6">
        <header className="w-full xl:px-14 px-4">
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center">
            <nav className="flex items-center gap-6" aria-label="Réseaux sociaux">
              <a
                href="https://www.instagram.com/momoamo_places/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase leading-none tracking-wider font-nichrome text-offsite-secondary text-[18px] font-bold no-underline cursor-pointer"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedin.com/company/momoamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase leading-none tracking-wider font-nichrome text-offsite-secondary text-[18px] font-bold no-underline cursor-pointer"
              >
                LINKEDIN
              </a>
            </nav>
            <div className="text-center">
              <Link href="/" aria-label="Momoamo" className="inline-flex text-offsite-secondary">
                <MomoamoLogo className="justify-center !w-[250px]" />
              </Link>
            </div>
            <div className="flex justify-end items-center gap-3">
              <button
                type="button"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-secondary text-[18px] w-[159px] h-[44px] border-[1px] bg-transparent border-offsite-secondary transition-all duration-300 ease-in hover:!bg-offsite-secondary hover:!text-offsite-main"
              >
                CONNEXION
              </button>
              <button
                type="button"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-main text-[18px] w-[176px] h-[44px] border-[1px] bg-offsite-secondary border-offsite-secondary transition-all duration-300 ease-in hover:!bg-offsite-main hover:!text-offsite-secondary"
              >
                PRÉ-RÉSERVER
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between">
            <Link href="/" aria-label="Momoamo" className="inline-flex text-offsite-secondary">
              <MomoamoLogo className="!w-[200px]" />
            </Link>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={() => setIsMenuOpen(true)}
              className="w-[44px] h-[44px] flex items-center justify-center border border-offsite-secondary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  className="text-offsite-secondary"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="w-full xl:px-14 px-4 md:mt-[72px] mt-[40px]">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-[60px] md:gap-[180px] items-start">
            <div className="w-full">
              <h1 className="text-offsite-secondary font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
                Participez à la
                <br />
                naissance d&apos;une
                <br />
                collection de
                <br />
                maisons d&apos;exception
              </h1>
              <p className="text-offsite-secondary font-general font-light text-[18px] leading-[1.3] mt-6 max-w-[520px]">
                Investissez dans nos projets immobiliers uniques et contribuez à
                la création d&apos;espaces inspirants pour séjours professionnels.
              </p>

              <div className="mt-8 w-full max-w-[420px]">
                <label
                  htmlFor="invest-email"
                  className="block text-offsite-secondary font-general font-light md:text-[16px] text-[14px]"
                >
                  Inscrivez vous à notre webinar de lancement :
                </label>
                <form className="mt-3 w-full" aria-label="Inscription webinar">
                  <div className="flex w-full">
                    <Input
                      id="invest-email"
                      type="email"
                      placeholder="Votre email"
                      className="h-[52px] rounded-none border-offsite-secondary text-offsite-secondary placeholder:text-offsite-secondary/70 border-r-0"
                      aria-label="Votre email"
                    />
                    <button
                      type="submit"
                      className="w-[52px] h-[52px] flex items-center justify-center bg-offsite-secondary text-offsite-main border border-offsite-secondary"
                      aria-label="Envoyer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <ul className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-3">
                {valueProps.map((item, index) => (
                  <li key={item} className="flex items-center">
                    <span className="text-offsite-secondary font-nichrome font-bold uppercase md:text-[16px] text-[14px] leading-none">
                      {item}
                    </span>
                    {index < valueProps.length - 1 && (
                      <span className="hidden md:inline-block mx-3 text-offsite-secondary">
                        •
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[80%] ml-auto md:ml-0 md:w-full md:mt-2 mt-8">
              <div
                className="relative w-full aspect-[534/671]"
                ref={heroVisualRef}
              >
                <div
                  className={`absolute inset-0 transition duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 motion-reduce:transform-none ${isHeroVisualReady ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"}`}
                >
                  <Image
                    src={InvestHeroImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div
                  className={`w-[58.4%] absolute left-[-21.3%] bottom-[16.1%] transition duration-500 ease-out delay-150 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transform-none ${isHeroVisualReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                >
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={InvestHeroItem2Image}
                      alt=""
                      aria-hidden="true"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40" />
                    <div className="aspect-[312/440] relative flex flex-col justify-between px-4 md:px-6 py-4 md:py-6">
                      <div></div>
                      <div className="text-center text-white">
                        <p className="font-general text-[12px] uppercase tracking-wide">
                          TRI cible annuel
                        </p>
                        <p className="mt-2 font-nichrome font-bold text-[32px] md:text-[44px] leading-none">
                          12%
                        </p>
                      </div>
                      <div className="mt-6 bg-white/90 text-dark-green px-4 py-3 md:px-5 md:py-4">
                        <p className="font-nichrome font-bold uppercase text-[14px] md:text-[16px] leading-none">
                          MORTAGNE-AU-PERCHE
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="inline-flex items-center bg-lime-green px-3 py-1 text-[12px] font-nichrome font-bold uppercase text-dark-green">
                            2,9 M€
                          </span>
                          <span className="text-[12px] md:text-[14px] font-general text-dark-green/80">
                            678 m²
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute left-[19.3%] bottom-[4.4%] w-[68%] md:w-[46%] transition duration-500 ease-out delay-300 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transform-none ${isHeroVisualReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                >
                  <div className="relative overflow-hidden bg-white/15 backdrop-blur-md">
                    <div className="relative px-6 md:px-8 py-6 md:py-7">
                      <p className="text-white font-nichrome font-bold text-[34px] md:text-[44px] leading-none text-center transition-all duration-200 ease-out">
                        {formattedAmount} €
                      </p>
                      <div className="mt-4">
                        <input
                          type="range"
                          min={5000}
                          max={100000}
                          step={500}
                          value={investmentValue}
                          onChange={(event) =>
                            setInvestmentValue(Number(event.target.value))
                          }
                          className="w-full accent-lime-green"
                          aria-label="Montant d'investissement"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={openModal}
                        className="mt-4 w-full uppercase text-dark-green bg-lime-green font-nichrome font-bold text-[18px] md:text-[20px] h-[48px] md:h-[52px] flex items-center justify-center gap-2"
                      >
                        INVESTIR →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:mt-[88px] mt-[56px] pb-[64px]">
        <div className="text-center">
          <h2 className="text-offsite-secondary font-nichrome font-bold uppercase md:text-[24px] text-[20px] leading-none">
            ILS NOUS FONT CONFIANCE
          </h2>
          <p className="text-offsite-secondary font-general font-light text-[18px] mt-2">
            300+ séminaires organisés
          </p>
        </div>
        <div className="mt-6">
          <InfiniteMovingLogo speed="fast" aria-roledescription="carousel">
            {logos.map((item, i) => (
              <Image
                key={i}
                src={item.img}
                alt=""
                aria-hidden="true"
                width={item.width}
                height={item.height}
                className="mx-8 object-contain w-[103px] h-[29px] md:w-auto md:h-auto pointer-events-none"
                loading="lazy"
              />
            ))}
          </InfiniteMovingLogo>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="fixed inset-0 z-[99999] bg-offsite-main md:hidden">
          <div className="w-full px-4 pt-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                aria-label="Momoamo"
                className="inline-flex text-offsite-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                <MomoamoLogo className="!w-[200px]" />
              </Link>
              
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setIsMenuOpen(false)}
                className="w-[44px] h-[44px] flex items-center justify-center border border-offsite-secondary text-offsite-secondary text-[26px] leading-none"
              >
                ×
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-6" aria-label="Menu mobile">
              <button
                type="button"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-secondary text-[20px] text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                CONNEXION
              </button>
              <button
                type="button"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-secondary text-[20px] text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                PRÉ-RÉSERVER
              </button>
              <a
                href="https://www.instagram.com/momoamo_places/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-secondary text-[20px]"
                onClick={() => setIsMenuOpen(false)}
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedin.com/company/momoamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase leading-none tracking-wider font-nichrome font-bold text-offsite-secondary text-[20px]"
                onClick={() => setIsMenuOpen(false)}
              >
                LINKEDIN
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default InvestHero;
