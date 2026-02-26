import Image from "next/image";
import HouseImage from "@/assets/images/house/house-2.jpg";

const projectDetails = [
  { label: "Lieu", value: "Normandie" },
  { label: "Projet global", value: "6m€" },
  { label: "Acquisition", value: "Mars 2024" },
  { label: "Ouverture", value: "Mars 2025" },
  { label: "Rendement locatif net", value: "20% (900k€/an)" },
];

const InvestProjectSection = () => {
  return (
    <section aria-label="Projet Momoamo" className="w-full bg-gray-green">
      <div className="max-w-[1360px] mx-auto w-full xl:px-14 px-4 md:py-[120px] py-[64px]">
        <h2 className="text-center text-black-green font-nichrome font-bold uppercase leading-none md:text-[86px] text-[58px]">
          NOTRE PREMIER PROJET
        </h2>

        <div className="relative mt-10 md:mt-12">
          <Image
            src={HouseImage}
            alt=""
            aria-hidden="true"
            width={1360}
            height={560}
            className="w-full h-[680px] object-cover"
            loading="lazy"
          />

          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[88%] md:w-[480px] max-w-full md:left-[50px] md:bottom-[50px] md:translate-x-0 md:top-auto backdrop-blur-md bg-black/40 border border-white/15 shadow-lg">
            <div className="p-6 md:p-8">
              <h3 className="text-[#EEE5D7] font-nichrome font-bold uppercase text-[28px] leading-tight">
                DOMAINE DE COURTIGIS
              </h3>

              <div className="mt-6 border-t border-white/15">
                {projectDetails.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[1fr_auto] gap-6 py-4 border-b border-white/15"
                  >
                    <p className="text-[#EEE5D7] font-normal font-general text-[16px] tracking-normal leading-[1.2]">
                      {item.label}
                    </p>
                    <p className="text-[#EEE5D7] font-semibold font-general text-[16px] tracking-normal leading-[1.2]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-6 pt-4">
                <p className="text-[#EEE5D7] font-semibold font-general text-[16px] tracking-normal leading-[1.2]">
                  TRI cible opération
                </p>
                <span className="inline-flex items-center justify-center bg-lime-green text-dark-green font-nichrome font-bold uppercase text-[16px] px-4 py-1">
                  12%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestProjectSection;
