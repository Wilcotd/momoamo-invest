"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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
};

const InvestWaitlistModal = ({ isOpen, onClose }: InvestWaitlistModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [capacity, setCapacity] = useState("");
  const [capacityError, setCapacityError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const firstRadioRef = useRef<HTMLInputElement | null>(null);

  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  const resetState = useCallback(() => {
    setStep(1);
    setEmail("");
    setEmailError("");
    setCapacity("");
    setCapacityError("");
    setIsSubmitting(false);
    setSubmitSuccess(false);
  }, []);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailNext = () => {
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
      const res = await fetch("/api/handle-invest-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, capacity, source: "waitlist" }),
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

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    const timer = setTimeout(() => {
      if (step === 1 && emailInputRef.current) {
        emailInputRef.current.focus();
      }
      if (step === 2 && firstRadioRef.current) {
        firstRadioRef.current.focus();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown, resetState, step]);

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
        className="relative w-full h-full md:h-auto md:max-w-[720px] bg-gray-green text-black-green md:mx-6 md:my-10 px-6 md:px-10 pt-8 md:pt-10 pb-10 md:pb-12"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex items-center justify-between text-[#292222]">
          <span className="font-nichrome font-bold uppercase text-[18px] md:text-[20px]">
            MOMOAMO®
          </span>
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
          <h2
            id="invest-waitlist-title"
            className="font-nichrome font-bold uppercase text-[26px] md:text-[32px] leading-[1.1]"
          >
            {step === 1
              ? "Rejoignez la liste d'attente et participez au webinar de lancement de notre seconde opération"
              : "Indiquez votre capacité d’investissement"}
          </h2>
          <p
            id="invest-waitlist-description"
            className="mt-3 font-general font-light text-[16px] md:text-[18px] leading-[1.4]"
          >
            {step === 1
              ? "Entre votre adresse email pour commencer votre inscription."
              : "Complétez le questionnaire pour finaliser votre inscription à la liste d’attente."}
          </p>
        </div>

        {submitSuccess ? (
          <div className="mt-6 text-center">
            <p className="font-nichrome font-bold uppercase text-[26px] md:text-[32px] leading-[1.1]">
              Merci !
            </p>
            <p className="mt-4 font-general font-light text-[16px] md:text-[18px] leading-[1.4]">
              Votre inscription a bien été enregistrée. Vous recevrez les informations du webinar par email.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-8 w-full inline-flex items-center justify-center gap-3 uppercase text-dark-green bg-lime-green font-bold font-nichrome text-[18px] md:text-[20px] h-[52px] md:h-[56px]"
            >
              FERMER
            </button>
          </div>
        ) : step === 1 ? (
          <div className="mt-6">
            <label
              htmlFor="invest-waitlist-email"
              className="sr-only"
            >
              Votre email
            </label>
            <input
              ref={emailInputRef}
              id="invest-waitlist-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Votre email"
              className="w-full border border-[#292222] bg-transparent px-4 py-3 font-general text-[16px] text-[#292222] focus:outline-none"
            />
            {emailError ? (
              <p className="mt-2 text-[14px] text-[#9c2f2f] font-general">
                {emailError}
              </p>
            ) : null}
            <button
              type="button"
              onClick={handleEmailNext}
              className="mt-6 w-full inline-flex items-center justify-center gap-3 uppercase text-dark-green bg-lime-green font-bold font-nichrome text-[18px] md:text-[20px] h-[52px] md:h-[56px]"
            >
              SUIVANT
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
        ) : (
          <div className="mt-6">
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
              className="mt-6 w-full inline-flex items-center justify-center gap-3 uppercase text-dark-green bg-lime-green font-bold font-nichrome text-[18px] md:text-[20px] h-[52px] md:h-[56px] disabled:opacity-60"
            >
              VALIDER MON INSCRIPTION
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
        )}
      </div>
    </div>
  );
};

export default InvestWaitlistModal;
