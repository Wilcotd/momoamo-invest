"use client";

import { useInvestWaitlistModal } from "@/components/modals/InvestWaitlistModalProvider";

const InvestWebinarCtaSection = () => {
  const { openModal } = useInvestWaitlistModal();
  return (
    <section
      aria-label="Inscription webinar"
      className="w-full bg-lime-green overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 py-[20px] md:py-[24px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8">
          <p className="text-dark-green font-nichrome font-bold uppercase text-[18px] md:text-[24px] leading-[1.2] text-center">
            INSCRIVEZ VOUS POUR LE WEBINAR DE LANCEMENT DE NOTRE SECONDE OPÉRATION
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={openModal}
              className="uppercase text-lime-green bg-dark-green font-nichrome font-bold text-[16px] md:text-[20px] px-[24px] py-[10px] shrink-0"
            >
              JE M&apos;INSCRIS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestWebinarCtaSection;
