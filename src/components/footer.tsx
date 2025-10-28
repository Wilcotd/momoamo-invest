"use client";

import Image from "next/image";
import { useFooterAnimations } from "@/animations/scrollAnimations";
import Img3 from "@/assets/images/offsite/img3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const PrivacyPolicyModal = ({
  isOpen,
  onClose,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}) => {
  // Reference to the close button for focus management
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Trap focus within modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        // If shift+tab and on first element, move to last element
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // If tab and on last element, move to first element
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";

      // Focus the close button when modal opens
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 100);

      // Add event listener for Escape key and focus trap
      document.addEventListener("keydown", handleKeyDown);
    } else {
      // Allow scrolling when modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scroll is restored and event listeners removed
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Dynamic content based on title
  const getModalContent = () => {
    if (title === "Cookie Policy") {
      return (
        <>
          <p className="mb-[16px]">
            Cette politique explique comment Momoamo utilise les cookies et
            technologies similaires sur le site{" "}
            <a
              href="https://momoamo.com"
              target="_blank"
              className="link-6 text-underline"
            >
              momoamo.com
            </a>
            .
          </p>

          <hr className="border-[#292222] my-6" />

          <h3 className="font-nichrome font-bold text-[24px] mb-3">
            Qu'est-ce qu'un cookie ?
          </h3>
          <p className="mb-[16px]">
            Un cookie est un petit fichier enregistré sur votre appareil
            (ordinateur, mobile, tablette) lors de la consultation du site. Il
            permet de reconnaître votre navigateur et de mémoriser certaines
            informations utiles afin d'assurer le bon fonctionnement du site ou
            d'améliorer votre expérience de navigation.
          </p>

          <hr className="border-[#292222] my-6" />

          <h3 className="font-nichrome font-bold text-[24px] mb-3">
            Quels types de cookies utilisons-nous ?
          </h3>
          <p className="mb-[16px]">
            Nous utilisons uniquement des cookies essentiels, qui permettent :
          </p>
          <ul className="list-disc pl-8 mb-[16px]">
            <li>d'assurer la sécurité et le bon fonctionnement du site,</li>
            <li>
              de faciliter la navigation (session, préférences, affichage).
            </li>
          </ul>
          <p className="mb-[16px]">
            Pour le moment, aucun cookie publicitaire ou de mesure d'audience
            n'est déposé.
          </p>
          <p className="mb-[16px]">
            Si des outils de statistiques (ex : Google Analytics) sont ajoutés à
            l'avenir, cette politique sera mise à jour et votre consentement
            sera demandé avant toute installation.
          </p>

          <hr className="border-[#292222] my-6" />

          <h3 className="font-nichrome font-bold text-[24px] mb-3">
            Pourquoi utilisons-nous ces cookies ?
          </h3>
          <p className="mb-[16px]">Ces cookies sont nécessaires pour :</p>
          <ul className="list-disc pl-8 mb-[16px]">
            <li>permettre l'accès au site et à ses fonctionnalités,</li>
            <li>garantir sa sécurité,</li>
            <li>assurer une navigation fluide.</li>
          </ul>

          <hr className="border-[#292222] my-6" />

          <h3 className="font-nichrome font-bold text-[24px] mb-3">
            Consentement
          </h3>
          <p className="mb-[16px]">
            Les cookies essentiels ne nécessitent pas de consentement (directive
            ePrivacy). Aucun cookie non essentiel n'est installé sans votre
            accord.
          </p>

          <hr className="border-[#292222] my-6" />

          <h3 className="font-nichrome font-bold text-[24px] mb-3">
            Durée de conservation
          </h3>
          <p className="mb-[16px]">
            Les cookies essentiels sont conservés uniquement pendant la durée
            nécessaire à leur finalité (souvent le temps de la session).
          </p>

          <hr className="border-[#292222] my-6" />

          <h3 className="font-nichrome font-bold text-[24px] mb-3">
            Gestion des cookies
          </h3>
          <p className="mb-[16px]">
            Vous pouvez désactiver les cookies à tout moment depuis les
            paramètres de votre navigateur. Attention : cela peut empêcher le
            bon fonctionnement du site.
          </p>

          <hr className="border-[#292222] my-6" />

          <h3 className="font-nichrome font-bold text-[24px] mb-3">Contact</h3>
          <p className="mb-[16px]">
            Pour toute question concernant cette politique, vous pouvez nous
            contacter à :{" "}
            <a
              href="mailto:contact@momoamo.co"
              className="underline hover:opacity-70"
            >
              contact@momoamo.co
            </a>
          </p>
          <p className="mb-[16px]">&copy; Momoamo - All rights reserved 2025</p>
        </>
      );
    } else {
      // Default Privacy Policy content
      return (
        <>
          <p className="mb-[16px]">
            Les sites{" "}
            <a
              href="https://momoamo.com"
              target="_blank"
              className="link-6 text-underline"
            >
              https://momoamo.com
            </a>{" "}
            sont édités par la société OAK Estate Operations, Société par
            Actions Simplifiée au capital social de 1000 euros, immatriculée au
            registre du commerce et des sociétés de Paris sous le numéro 928 249
            044 et dont le siège social est situé au 43 rue Godot de Mauroy,
            75009 Paris.
          </p>
          <p className="mb-[16px]">
            Directeur de la publication: Oak Estate Operations
          </p>
          <p className="mb-[16px]">Hébergement: Oak Estate Operations</p>
          <p className="mb-[16px]">Numéro SIRET: 928 249 044</p>
          <p className="mb-[16px]">Dernière modification: 18/10/2025</p>
          <p className="mb-[16px]">Tous droits réservés.</p>
          <p className="mb-[16px]">&copy; Momoamo - All rights reserved 2025</p>
        </>
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-[99999] inset-0 bg-black/50 flex justify-center items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            ref={modalRef}
            className="pt-[120px] bg-gray-green w-screen h-[100dvh] overflow-y-auto relative flex flex-col md:gap-5 p-6 lg:px-40"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="fixed right-[22px] md:right-10 top-10 text-[#292222] text-3xl focus:outline-none"
              aria-label="Fermer"
              type="button"
            >
              ✕
            </button>
            <header className="flex justify-between items-center mb-4">
              <h2
                id="modal-title"
                className="font-nichrome font-bold md:text-[64px] text-[58px] uppercase leading-none text-[#292222]"
              >
                {title}
              </h2>
            </header>
            <div className="text-[#292222] text-[1rem] font-nichrome">
              {getModalContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FooterSection = ({
  setIsScroll,
  setStop,
}: {
  setIsScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { topContentRef, imageRef, linksRef } = useFooterAnimations();
  const router = useRouter();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [title, setTitle] = useState("Privacy Policy");
  const footerImageRef = useRef<HTMLDivElement>(null);
  const joinCommunitySectionRef = useRef<HTMLDivElement>(null);
  const lastStopRef = useRef<boolean>(false);

  useEffect(() => {
    const el = joinCommunitySectionRef.current;
    if (!el) return;

    const thresholds = Array.from({ length: 20 }, (_, i) => i / 20); // 0, 0.05, 0.1 ... 1

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // Check if the bottom of the section is intersecting with the bottom of the viewport
        const boundingRect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;
        const bottomIntersecting = boundingRect.bottom <= windowHeight;

        if (bottomIntersecting !== lastStopRef.current) {
          lastStopRef.current = bottomIntersecting;
          setStop(bottomIntersecting);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: thresholds,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [setStop]);

  return (
    <>
      <footer
        className="w-full mx-auto relative md:pt-[123px] pt-[64px]"
        aria-label="Site footer"
        ref={footerImageRef}
      >
        <div
          id="join-the-community"
          ref={joinCommunitySectionRef}
          className="max-w-[1360px] px-4 xl:px-14 mx-auto w-full flex md:flex-row flex-col justify-between md:gap-[28px] gap-[32px]"
        >
          <header ref={topContentRef} className="w-full">
            <h2 className="text-lime-green font-nichrome font-bold md:text-[86px] text-[58px] uppercase leading-none mb-[32px] md:mb-[24px]">
              Join the <br /> community
            </h2>
            <p className="text-lime-green font-normal font-nichrome md:text-[36px] text-[23px] tracking-normal leading-[1.1] mb-[32px] md:mb-[24px]">
              Pour les lève-tôt abonnés à notre newsletter et les clients de
              Kymono qui participent, nous avons une surprise très spéciale pour
              vous. Petit indice : ça ne se reproduira pas !
            </p>
            <button className="!border-[2px] md:mt-6 mt-8 uppercase text-dark-green border-lime-green bg-lime-green font-bold font-nichrome text-[26px] md:w-[228px] w-full h-[60px] flex justify-center items-center gap-2 transition-all duration-300 ease-in hover:!bg-dark-green hover:!text-lime-green hover:border-lime-green">
              BE FIRST TO JOIN{" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px] scale-130"
              >
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </header>
          <figure ref={imageRef} className="w-full">
            <Image
              src={Img3.src}
              alt=""
              width={357}
              height={465}
              className="w-full h-auto aspect-[698/517] object-cover pointer-events-none"
              aria-hidden="true"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="max-w-[1360px] px-4 xl:px-14 mx-auto w-full md:mt-[124px] mt-16 flex md:flex-row flex-col justify-between md:gap-7 gap-8">
          <nav
            className="w-full flex flex-col relative z-[50]"
            aria-label="Social media links"
          >
            <a
              href="https://www.instagram.com/momoamo_places/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative cursor-pointer w-fit group touch-manipulation md:mb-[24px]"
              aria-label="Instagram (opens in a new tab)"
            >
              <span className="text-lime-green font-nichrome font-bold md:text-[86px] text-[58px] uppercase leading-18 hover:opacity-50 transition-all duration-300 ease-in">
                INSTAGRAM
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative cursor-pointer w-fit group touch-manipulation z-[50]"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <span className="text-lime-green font-nichrome font-bold hover:opacity-50 md:text-[86px] relative z-[10] text-[58px] uppercase leading-18 transition-all duration-300 ease-in">
                LINKEDIN
              </span>
            </a>
          </nav>
          <nav
            ref={linksRef}
            className="w-full flex flex-col justify-between md:min-h-[192px] min-h-[154px]"
            aria-label="Legal information"
          >
            <div className="w-full">
              <h3 className="text-lime-green font-nichrome font-bold text-[18px] uppercase leading-none">
                MORE
              </h3>
              <button
                onClick={() => {
                  setShowPrivacy(true);
                  setTitle("Privacy Policy");
                }}
                className="text-lime-green block font-general font-light text-[16px] mt-[19px] cursor-pointer hover:opacity-50 transition-all duration-300 ease-in text-left"
                type="button"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => {
                  setShowPrivacy(true);
                  setTitle("Cookie Policy");
                }}
                className="text-lime-green block font-general font-light text-[16px] mt-2 cursor-pointer hover:opacity-50 transition-all duration-300 ease-in text-left"
                type="button"
              >
                Cookie Policy
              </button>
            </div>
            <div className="w-full">
              <p className="text-lime-green font-general font-light text-[16px] leading-[1.3]">
                &copy; Momoamo - All rights reserved 2025
              </p>
            </div>
          </nav>
        </div>
        <button
          className="cursor-pointer md:mt-[56px] pb-[76px] md:pb-0 mt-8 relative z-[1] w-full border-0 !bg-transparent"
          onClick={() => router.push("#hero")}
          aria-label="Back to top"
          type="button"
        >
          <div className="word px-[14px] md:px-0 md:!-ml-[9%] md:!w-[121%]">
            <div className="glyph m-lead" aria-label="M">
              <svg
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M0.210839 186.271L3.86919 0.182617H80.3122L100.078 108.179H100.843L119.899 0.182617H196.342L200 186.271H148.401L150.585 56.1729H150.039L124.103 186.271H74.6336L48.7522 56.1729H48.2062L50.3903 186.271H0.15625H0.210839Z"
                  fill="#DEFF4E"
                />
              </svg>
            </div>
            <div className="cluster" aria-label="OMOAM">
              <span className="glyph o" aria-hidden="true">
                <svg
                  viewBox="0 0 192 191"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M96.0619 190.673C76.9511 190.673 60.1883 186.689 45.8279 178.721C31.6313 170.754 20.6017 159.676 12.6297 145.542C4.65783 131.19 0.671875 114.491 0.671875 95.3363C0.671875 76.2363 4.65783 59.4829 12.6297 45.1306C20.6017 30.7783 31.6859 19.7003 45.8279 11.9511C60.1883 3.98371 76.9511 0 96.0619 0C115.391 0 132.209 3.98371 146.569 11.9511C160.929 19.7549 172.068 30.8329 180.04 45.1306C188.012 59.4829 191.998 76.1817 191.998 95.3363C191.998 114.436 188.012 131.19 180.04 145.542C172.068 159.731 160.929 170.754 146.569 178.721C132.209 186.689 115.391 190.673 96.0619 190.673ZM57.2943 95.3363C57.2943 107.724 60.9527 117.929 68.2148 125.896C75.4769 133.7 84.8684 137.575 96.3895 137.575C107.911 137.575 117.302 133.7 124.564 125.896C131.99 117.929 135.703 107.724 135.703 95.3363C135.703 82.7849 131.99 72.58 124.564 64.7763C117.302 56.9726 107.911 53.098 96.3895 53.098C84.8684 53.098 75.4769 56.9726 68.2148 64.7763C60.8981 72.58 57.2943 82.7849 57.2943 95.3363Z"
                    fill="#DEFF4E"
                  />
                </svg>
              </span>
              <span className="glyph m" aria-hidden="true">
                <svg
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M0.210839 186.271L3.86919 0.182617H80.3122L100.078 108.179H100.843L119.899 0.182617H196.342L200 186.271H148.401L150.585 56.1729H150.039L124.103 186.271H74.6336L48.7522 56.1729H48.2062L50.3903 186.271H0.15625H0.210839Z"
                    fill="#DEFF4E"
                  />
                </svg>
              </span>
              <span className="glyph o" aria-hidden="true">
                <svg viewBox="0 0 192 191" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M96.0619 190.673C76.9511 190.673 60.1883 186.689 45.8279 178.721C31.6313 170.754 20.6017 159.676 12.6297 145.542C4.65783 131.19 0.671875 114.491 0.671875 95.3363C0.671875 76.2363 4.65783 59.4829 12.6297 45.1306C20.6017 30.7783 31.6859 19.7003 45.8279 11.9511C60.1883 3.98371 76.9511 0 96.0619 0C115.391 0 132.209 3.98371 146.569 11.9511C160.929 19.7549 172.068 30.8329 180.04 45.1306C188.012 59.4829 191.998 76.1817 191.998 95.3363C191.998 114.436 188.012 131.19 180.04 145.542C172.068 159.731 160.929 170.754 146.569 178.721C132.209 186.689 115.391 190.673 96.0619 190.673ZM57.2943 95.3363C57.2943 107.724 60.9527 117.929 68.2148 125.896C75.4769 133.7 84.8684 137.575 96.3895 137.575C107.911 137.575 117.302 133.7 124.564 125.896C131.99 117.929 135.703 107.724 135.703 95.3363C135.703 82.7849 131.99 72.58 124.564 64.7763C117.302 56.9726 107.911 53.098 96.3895 53.098C84.8684 53.098 75.4769 56.9726 68.2148 64.7763C60.8981 72.58 57.2943 82.7849 57.2943 95.3363Z"
                    fill="#DEFF4E"
                  />
                </svg>
              </span>
              <span className="glyph a" aria-hidden="true">
                <svg viewBox="0 0 146 187" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.933594 186.108L34.9508 0.728516H110.138L145.193 186.108H93.6481L90.6996 165.152H54.5529L51.386 186.108H0.933594ZM60.723 123.132H84.6388L72.9539 43.7308H72.4079L60.723 123.132Z"
                    fill="#DEFF4E"
                  />
                </svg>
              </span>
              <span className="glyph m" aria-hidden="true">
                <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.210839 186.271L3.86919 0.182617H80.3122L100.078 108.179H100.843L119.899 0.182617H196.342L200 186.271H148.401L150.585 56.1729H150.039L124.103 186.271H74.6336L48.7522 56.1729H48.2062L50.3903 186.271H0.15625H0.210839Z"
                    fill="#DEFF4E"
                  />
                </svg>
              </span>
            </div>
            <div className="glyph o-tail" aria-label="O">
              <svg viewBox="0 0 192 191" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M96.0619 190.673C76.9511 190.673 60.1883 186.689 45.8279 178.721C31.6313 170.754 20.6017 159.676 12.6297 145.542C4.65783 131.19 0.671875 114.491 0.671875 95.3363C0.671875 76.2363 4.65783 59.4829 12.6297 45.1306C20.6017 30.7783 31.6859 19.7003 45.8279 11.9511C60.1883 3.98371 76.9511 0 96.0619 0C115.391 0 132.209 3.98371 146.569 11.9511C160.929 19.7549 172.068 30.8329 180.04 45.1306C188.012 59.4829 191.998 76.1817 191.998 95.3363C191.998 114.436 188.012 131.19 180.04 145.542C172.068 159.731 160.929 170.754 146.569 178.721C132.209 186.689 115.391 190.673 96.0619 190.673ZM57.2943 95.3363C57.2943 107.724 60.9527 117.929 68.2148 125.896C75.4769 133.7 84.8684 137.575 96.3895 137.575C107.911 137.575 117.302 133.7 124.564 125.896C131.99 117.929 135.703 107.724 135.703 95.3363C135.703 82.7849 131.99 72.58 124.564 64.7763C117.302 56.9726 107.911 53.098 96.3895 53.098C84.8684 53.098 75.4769 56.9726 68.2148 64.7763C60.8981 72.58 57.2943 82.7849 57.2943 95.3363Z"
                  fill="#DEFF4E"
                />
              </svg>
            </div>
            <sup className="reg" aria-label="Registered">
              <svg viewBox="0 0 44 46" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.2128 45.0951C18.8821 45.0951 15.9335 44.5494 13.258 43.4579C10.5824 42.3665 8.39833 40.8385 6.54186 38.9285C4.73999 37.0185 3.32035 34.6719 2.33751 31.9434C1.35467 29.2148 0.863281 26.2134 0.863281 22.8845C0.863281 19.5557 1.40936 16.3359 2.556 13.6074C3.70265 10.8788 5.23146 8.5868 7.14254 6.62223C9.05361 4.7668 11.3469 3.29337 13.9678 2.25652C16.5887 1.21966 19.3734 0.728516 22.2673 0.728516C25.4343 0.728516 28.3828 1.21966 31.0037 2.31109C33.6792 3.40252 35.9179 4.87594 37.829 6.78594C39.6854 8.69594 41.1597 11.0425 42.2518 13.7711C43.3438 16.4997 43.8352 19.5557 43.8352 22.8845C43.8352 26.5954 43.2892 29.7605 42.088 32.5437C40.8867 35.3268 39.3033 37.6188 37.3376 39.4742C35.3719 41.2751 33.024 42.6939 30.4031 43.6217C27.7822 44.6039 25.052 45.0405 22.2673 45.0405L22.2128 45.0951ZM22.2128 40.4565C26.9632 40.4565 30.8399 38.9831 33.7884 35.9817C36.7916 32.9802 38.2658 28.6691 38.2658 22.9937C38.2658 17.3182 36.7915 13.2254 33.8976 10.1148C31.0037 7.0588 27.0724 5.47623 22.2128 5.47623C17.3532 5.47623 13.4764 7.00423 10.5825 10.1148C7.68859 13.2254 6.26885 17.4819 6.26885 22.9937C6.26885 28.5054 7.68859 32.9257 10.5825 35.9817C13.4764 38.9831 17.3532 40.5111 22.2128 40.5111V40.4565ZM21.9398 12.0248C23.7963 12.0248 25.3797 12.1885 26.581 12.5705C27.8368 12.9525 28.7104 13.4437 29.4203 14.0439C30.0755 14.6442 30.5669 15.3537 30.7853 16.1177C31.0037 16.9362 31.1129 17.6457 31.1129 18.4097C31.1129 19.9922 30.8946 21.1928 30.4031 22.1205C29.9117 23.0482 28.9835 23.7577 27.673 24.4671L32.1504 33.1985H26.5263L22.8133 25.6131H18.6637V33.1985H13.6948V12.0248H21.8305H21.9398ZM22.4312 21.4657C23.96 21.4657 24.9975 21.1928 25.4343 20.5925C25.8711 20.0468 26.0895 19.3374 26.0895 18.5188C26.0895 17.8094 25.8165 17.1545 25.1613 16.7179C24.506 16.2814 23.4139 16.0085 21.8305 16.0085H18.7728V21.4657H22.4858H22.4312Z"
                  fill="#DEFF4E"
                />
              </svg>
            </sup>
          </div>
        </button>
      </footer>
      <PrivacyPolicyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title={title}
      />
    </>
  );
};

export default FooterSection;
