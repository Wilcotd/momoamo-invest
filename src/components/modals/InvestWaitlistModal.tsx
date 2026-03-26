"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import Button_Arrow_Svg from "@/assets/images/svgs/arrow_forward.svg";

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

const capacityOptions = [
  "Moins de 5k€",
  "Entre de 5k€ et 20k€",
  "Entre 20k€ et 50k€",
  "Entre 50k€ et 100k€",
  "Entre 100k€ et 500k€",
  "Plus de 500k€",
];

type InvestWaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  initialStep?: 1 | 2;
  initialFirstName?: string;
  initialLastName?: string;
};

const InvestWaitlistModal = ({
  isOpen,
  onClose,
  initialEmail,
  initialStep,
  initialFirstName,
  initialLastName,
}: InvestWaitlistModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [capacity, setCapacity] = useState("");
  const [capacityError, setCapacityError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const firstRadioRef = useRef<HTMLInputElement | null>(null);

  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  const resetState = useCallback(() => {
    setStep(1);
    setFirstName("");
    setLastName("");
    setFirstNameError("");
    setEmail("");
    setEmailError("");
    setCapacity("");
    setCapacityError("");
    setIsSubmitting(false);
    setSubmitSuccess(false);
  }, []);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailNext = () => {
    if (!firstName.trim()) {
      setFirstNameError("Veuillez entrer votre prénom.");
      return;
    }
    setFirstNameError("");
    if (!email.trim() || !isValidEmail(email)) {
      setEmailError("Veuillez entrer une adresse email valide.");
      return;
    }
    setEmailError("");
    setStep(2);
  };

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!capacity) {
      setCapacityError("Veuillez sélectionner une option.");
      return;
    }
    setCapacityError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/activecampaign-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, capacity, firstName, lastName, listid: 3 }),
      });
      if (res.ok) {
        setSubmitSuccess(true);
      } else {
        setCapacityError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setCapacityError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab" || !modalRef.current) return;
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements.length) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (!isOpen) {
      resetState();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      return;
    }

    const nextStep = initialStep ?? 1;
    setStep(nextStep);
    setFirstName(initialFirstName ?? "");
    setLastName(initialLastName ?? "");
    setFirstNameError("");
    setEmail(initialEmail ?? "");
    setEmailError("");
    setCapacity("");
    setCapacityError("");
    setIsSubmitting(false);
    setSubmitSuccess(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    const timer = setTimeout(() => {
      if (nextStep === 1 && firstNameInputRef.current) {
        firstNameInputRef.current.focus();
      }
      if (nextStep === 2 && firstRadioRef.current) {
        firstRadioRef.current.focus();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    isOpen,
    handleKeyDown,
    resetState,
    initialEmail,
    initialStep,
    initialFirstName,
    initialLastName,
  ]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-start justify-center bg-black/50 backdrop-blur-sm md:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="invest-waitlist-title"
      aria-describedby="invest-waitlist-description"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="relative w-full h-full md:h-auto md:max-w-[628px] bg-gray-green text-black-green md:mx-6 md:my-10 p-[32px] md:p-[48px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex items-center justify-end text-[#292222]">
          <span className="absolute left-1/2 -translate-x-1/2 font-general text-[14px] md:text-[16px]">
            {step}/2
          </span>
          <button
            type="button"
            aria-label="Fermer"
            onClick={closeModal}
            className="text-[#292222] text-[28px] leading-none"
          >
            ×
          </button>
        </div>

        <div className="mt-6">
          <div className="flex justify-center">
            <MomoamoLogo className="!w-[256px] md:!w-[300px] justify-center text-[#292222]" />
          </div>
          {!submitSuccess ? (
            <>
              <h2
                id="invest-waitlist-title"
                className="mt-[40px] md:mt-[24px] text-black-green font-normal font-nichrome md:text-[32px] text-[24px] tracking-normal leading-[1.1]"
              >
                {step === 1
                  ? "Rejoignez la liste d'attente et participez au webinar de lancement de notre seconde opération"
                  : "Indiquez votre capacité d’investissement"}
              </h2>
              <p
                id="invest-waitlist-description"
                className="mt-[8px] text-black-green font-general font-light text-[14px] md:text-[18px] leading-[1.5]"
              >
                {step === 1
                  ? "Entre votre adresse email pour commencer votre inscription."
                  : "Complétez le questionnaire pour finaliser votre inscription à la liste d’attente."}
              </p>
            </>
          ) : null}
        </div>

        {submitSuccess ? (
          <div className="mt-[40px] text-center">
            <p className="font-nichrome font-bold uppercase text-[26px] md:text-[32px] leading-[1.1]">
              Merci !
            </p>
            <p className="mt-4 font-general font-light text-[16px] md:text-[18px] leading-[1.4]">
              Votre inscription a bien été enregistrée. Vous recevrez les informations du webinar par email.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="group mt-[24px] w-full !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-dark-green hover:text-lime-green text-dark-green bg-lime-green font-bold font-nichrome text-[22px] md:text-[32px] h-[52px] md:h-[56px] flex md:justify-center justify-between items-center gap-3 md:py-4 py-3 px-6 transition-all duration-300 ease-in border-lime-green leading-[1.1]"
            >
              FERMER
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
        ) : step === 1 ? (
          <div className="mt-[40px]">
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <label htmlFor="invest-waitlist-first-name" className="sr-only">
                  Votre prénom
                </label>
                <input
                  ref={firstNameInputRef}
                  id="invest-waitlist-first-name"
                  type="text"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    if (firstNameError) setFirstNameError("");
                  }}
                  placeholder="Votre prénom *"
                  className="w-full border border-[#292222] bg-transparent px-4 py-3 font-general text-[16px] text-[#292222] focus:outline-none"
                  aria-required="true"
                />
                <label htmlFor="invest-waitlist-last-name" className="sr-only">
                  Votre nom
                </label>
                <input
                  id="invest-waitlist-last-name"
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Votre nom"
                  className="w-full border border-[#292222] bg-transparent px-4 py-3 font-general text-[16px] text-[#292222] focus:outline-none"
                />
              </div>
              {firstNameError ? (
                <p className="text-[14px] text-[#9c2f2f] font-general">
                  {firstNameError}
                </p>
              ) : null}
              <label htmlFor="invest-waitlist-email" className="sr-only">
                Votre email
              </label>
              <input
                id="invest-waitlist-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (emailError) setEmailError("");
                }}
                placeholder="Votre email *"
                className="w-full border border-[#292222] bg-transparent px-4 py-3 font-general text-[16px] text-[#292222] focus:outline-none"
              />
              {emailError ? (
                <p className="text-[14px] text-[#9c2f2f] font-general">
                  {emailError}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={handleEmailNext}
              className="group mt-[24px] w-full !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-dark-green hover:text-lime-green text-dark-green bg-lime-green font-bold font-nichrome text-[22px] md:text-[32px] h-[52px] md:h-[56px] flex md:justify-center justify-between items-center gap-3 md:py-4 py-3 px-6 transition-all duration-300 ease-in border-lime-green leading-[1.1]"
            >
              SUIVANT
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
        ) : (
          <div className="mt-[40px]">
            <fieldset>
              <legend className="sr-only">Capacité d’investissement</legend>
              <div className="flex flex-col gap-4">
                {capacityOptions.map((option, index) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer font-general text-[16px] md:text-[18px]"
                  >
                    <span className="relative flex items-center justify-center">
                      <input
                        ref={index === 0 ? firstRadioRef : null}
                        type="radio"
                        name="invest-capacity"
                        value={option}
                        checked={capacity === option}
                        onChange={() => setCapacity(option)}
                        className="peer h-[20px] w-[20px] appearance-none rounded-full border border-[#292222]"
                      />
                      <span className="pointer-events-none absolute h-[10px] w-[10px] rounded-full bg-[#292222] opacity-0 peer-checked:opacity-100" />
                    </span>
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
            {capacityError ? (
              <p className="mt-3 text-[14px] text-[#9c2f2f] font-general">
                {capacityError}
              </p>
            ) : null}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="group mt-[24px] w-full !border-[2px] uppercase hover:!bg-transparent hover:border hover:border-dark-green hover:text-lime-green text-dark-green bg-lime-green font-bold font-nichrome text-[22px] md:text-[32px] h-[52px] md:h-[56px] flex md:justify-center justify-between items-center gap-3 md:py-4 py-3 px-6 transition-all duration-300 ease-in border-lime-green leading-[1.1] disabled:opacity-60"
            >
              VALIDER MON INSCRIPTION
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
        )}
      </div>
    </div>
  );
};

export default InvestWaitlistModal;
