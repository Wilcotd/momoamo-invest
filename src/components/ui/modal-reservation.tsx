"use client";
import { cn } from "@/lib/lib";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { useState, useEffect, useRef, useCallback } from "react";
import { format } from "date-fns";

const ModalReservation = ({
  isOpen,
  onClose,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
}) => {
  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [isFlexibleDates, setIsFlexibleDates] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [participants, setParticipants] = useState("");
  const [message, setMessage] = useState("");

  // Reference to the close button for focus management
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Check if device is desktop (not mobile)
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect if device is desktop on component mount
  useEffect(() => {
    // Simple detection based on user agent
    const checkIfDesktop = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      setIsDesktop(!isMobile);
    };

    checkIfDesktop();
  }, []);

  // Handle keyboard events - only for desktop
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Trap focus within modal - only on desktop
      if (e.key === "Tab" && modalRef.current && isDesktop) {
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
    [onClose, isDesktop]
  );

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";

      // Focus the close button when modal opens - only on desktop
      if (isDesktop) {
        setTimeout(() => {
          if (closeButtonRef.current) {
            closeButtonRef.current.focus();
          }
        }, 100);

      // Add event listener for Escape key and focus trap - only on desktop
        document.addEventListener("keydown", handleKeyDown);
      }
    } else {
      // Allow scrolling when modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scroll is restored and event listeners removed
    return () => {
      document.body.style.overflow = "";
      if (isDesktop) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isOpen, handleKeyDown, isDesktop]);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const payload = {
      prenom,
      nom,
      email,
      phone,
      entreprise,
      participants,
      message,
      arrivalDate: !isFlexibleDates && arrivalDate
        ? Intl.DateTimeFormat("fr-FR").format(arrivalDate)
        : null,
      departureDate: departureDate
        ? !isFlexibleDates && Intl.DateTimeFormat("fr-FR").format(departureDate)
        : null,
      isFlexibleDates,
    };

    try {
      const res = await fetch("/api/handle-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send email or Slack message");
      }
      setSuccessMessage("Votre demande a été envoyée avec succès !");
      // Clear form fields
      setPrenom("");
      setNom("");
      setEmail("");
      setPhone("");
      setEntreprise("");
      setParticipants("");
      setMessage("");
      setArrivalDate(undefined);
      setDepartureDate(undefined);
      setIsFlexibleDates(false);
    } catch (err) {
      console.error(err);
      setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-[99999] inset-0 bg-black/50 flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-title"
        >
          <motion.div
            ref={modalRef}
            className={cn(
              "bg-gray-green w-screen h-[100dvh] overflow-y-auto relative flex flex-col gap-10 px-6 lg:px-40",
              className
            )}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute right-[22px] md:right-10 top-10 text-[#292222] text-3xl focus:outline-none"
              aria-label="Fermer"
              type="button"
            >
              ✕
            </button>
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 h-full py-10 lg:py-20">
              <h2
                id="reservation-title"
                className="font-nichrome font-bold md:text-[64px] text-[58px] uppercase leading-none text-[#292222]"
              >
                Réserver <br /> votre offsite
              </h2>
              <form
                className="flex-1 flex flex-col gap-3 lg:gap-5 pb-[120px]"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col lg:flex-row items-center gap-5">
                  <div className="w-full">
                    <label htmlFor="prenom" className="sr-only">
                      Prénom
                    </label>
                    <Input
                      id="prenom"
                      required
                      placeholder="Prénom *"
                      name="prenom"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="nom" className="sr-only">
                      Nom
                    </label>
                    <Input
                      id="nom"
                      required
                      placeholder="Nom *"
                      name="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-5">
                  <div className="w-full">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <Input
                      id="email"
                      required
                      type="email"
                      placeholder="Mail *"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="sr-only">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      required
                      type="tel"
                      placeholder="Téléphone *"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="entreprise" className="sr-only">
                    Nom de l&apos;entreprise
                  </label>
                  <Input
                    id="entreprise"
                    required
                    placeholder="Nom de l'entreprise *"
                    name="entreprise"
                    value={entreprise}
                    onChange={(e) => setEntreprise(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="participants" className="sr-only">
                    Nombre de participants
                  </label>
                  <Input
                    id="participants"
                    required
                    type="number"
                    placeholder="Nombre de participants *"
                    name="participants"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="flexible-dates"
                      checked={isFlexibleDates}
                      onChange={(e) => setIsFlexibleDates(e.target.checked)}
                      className="sr-only" // Hide the actual checkbox
                    />
                    <div
                      className={`h-5 w-5 border border-black flex items-center justify-center ${
                        isFlexibleDates ? "bg-[#292222]" : "bg-white"
                      }`}
                    >
                      {isFlexibleDates && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-3 h-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <label
                      htmlFor="flexible-dates"
                      className="absolute inset-0 cursor-pointer"
                      aria-hidden="true"
                    ></label>
                  </div>
                  <label
                    htmlFor="flexible-dates"
                    className="text-sm text-[#292222] cursor-pointer"
                  >
                    Je ne connais pas la durée du séjour ou les dates sont
                    flexibles
                  </label>
                </div>

                {!isFlexibleDates && (
                  <div className="flex flex-col lg:flex-row items-center gap-5">
                    <div className="w-full">
                      <label htmlFor="arrival-date" className="sr-only">
                        Date d&apos;arrivée
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="arrival-date"
                            variant="outline"
                            data-empty={!arrivalDate}
                            className="data-[empty=true]:text-[#717171] text-base md:text-sm hover:bg-transparent md:data-[empty=true]:text-sm w-full bg-transparent shadow-none border border-black justify-start text-left font-normal transition-none"
                            aria-labelledby="arrival-date-label"
                          >
                            {arrivalDate ? (
                              format(arrivalDate, "dd/MM/yyyy")
                            ) : (
                              <span>Date d&apos;arrivée</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-full p-0">
                          <Calendar
                            mode="single"
                            selected={arrivalDate}
                            onSelect={setArrivalDate}
                            disabled={{ before: new Date() }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="w-full">
                      <label htmlFor="departure-date" className="sr-only">
                        Date de départ
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="departure-date"
                            variant="outline"
                            data-empty={!departureDate}
                            className="data-[empty=true]:text-[#717171] text-base md:text-sm hover:bg-transparent md:data-[empty=true]:text-sm w-full bg-transparent shadow-none border border-black justify-start text-left font-normal transition-none"
                            aria-labelledby="departure-date-label"
                          >
                            {departureDate ? (
                              format(departureDate, "dd/MM/yyyy")
                            ) : (
                              <span>Date de départ</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-full p-0">
                          <Calendar
                            mode="single"
                            selected={departureDate}
                            onSelect={setDepartureDate}
                            disabled={{ before: arrivalDate || new Date() }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor="message" className="sr-only">
                    Compléter ma demande
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Compléter ma demande"
                    rows={8}
                    maxLength={5000}
                    className="min-h-[190px]"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 py-2 hover:!bg-transparent hover:text-black hover:border hover:border-black uppercase text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[18px] text-[28px] w-full lg:w-fit px-4 flex justify-center items-center gap-2 relative"
                  disabled={loading}
                  style={loading ? { cursor: "not-allowed" } : {}}
                >
                  {loading && (
                    <span className="absolute inset-0 flex items-center justify-center z-10">
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    </span>
                  )}
                  <span className={loading ? "opacity-40" : "opacity-100"}>
                    Envoyer ma demande
                  </span>
                </button>
                {errorMessage && (
                  <div
                    className="mt-3 text-red-600 text-base font-semibold"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div
                    className="mt-3 text-green-600 text-base font-semibold"
                    role="status"
                  >
                    {successMessage}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalReservation;
