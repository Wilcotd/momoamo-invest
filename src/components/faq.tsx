"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFAQAnimations } from "@/animations/scrollAnimations";

const data = [
  {
    title: "Réservation",
    children: [
      {
        title: "Comment réserver ?",
        description:
          "La réservation se fait directement en ligne via notre formulaire de pré-réservation. Une fois votre demande envoyée, nous vous recontactons rapidement pour confirmer les dates, le nombre de participants et les éventuels services supplémentaires (restauration, activités, transport). Vous êtes accompagné à chaque étape pour que la réservation soit simple et fluide.",
      },
      {
        title: "Quels sont les horaires de check-in/out ?",
        description:
          "L’arrivée se fait généralement à partir de 18h et le départ à 10h. En fonction des disponibilités, nous pouvons adapter ces horaires pour vous offrir plus de flexibilité. N’hésitez pas à nous en faire la demande lors de la réservation.",
      },
      {
        title: "Puis-je ajouter des participants en dernière minute ?",
        description:
          "Oui, il est possible d’ajouter des personnes tant que la capacité maximale de la maison n’est pas dépassée. Nous vous conseillons toutefois de nous prévenir le plus tôt possible pour ajuster l’hébergement et la restauration si nécessaire.",
      },
      {
        title: "Y a-t-il une caution ?",
        description:
          "Oui, une caution est demandée au moment de la réservation. Elle est uniquement bloquée et n’est pas débitée de votre compte, sauf en cas de dommages constatés.",
      },
      {
        title: "Quelles sont les conditions d’annulation ?",
        description:
          "Notre politique d’annulation est simple et progressive :\n\n- De la signature à J-60 : report gratuit sur une saison similaire, ou annulation avec retenue de 25%.\n- Entre J-60 et J-30 : report avec retenue de 25%, ou annulation avec retenue de 50%.\n- Entre J-30 et J-15 : report avec retenue de 50%, ou annulation avec retenue de 75%.\n- Moins de 15 jours avant l’arrivée : retenue de 100% du montant.",
      },
    ],
  },
  {
    title: "Accès",
    children: [
      {
        title: "Les maisons sont-elles facilement accessibles ?",
        description:
          "Oui, nos maisons sont situées à proximité de gares desservies par des trains directs depuis Paris et accessibles en voiture en moins de 2 heures.",
      },
      {
        title: "Quelle est la gare la plus proche ?",
        description:
          "Pour le Domaine de Courtigis, la gare la plus proche est Montargis, située à seulement 15 minutes en voiture.",
      },
      {
        title: "Y a-t-il un service de transfert ?",
        description:
          "Oui, nous pouvons organiser des transferts privés depuis la gare ou même directement depuis Paris. Cela permet de simplifier la logistique et d’éviter de louer plusieurs véhicules.",
      },
      {
        title: "Les maisons disposent-elles d’un parking privé ?",
        description:
          "Oui, un parking privé est à disposition de votre groupe. Certaines maisons sont également équipées de bornes de recharge pour véhicules électriques.",
      },
    ],
  },
  {
    title: "Hébergement",
    children: [
      {
        title: "Combien de personnes peuvent dormir sur place ?",
        description:
          "Nos maisons peuvent accueillir jusqu’à 44 personnes, avec des chambres doubles en usage single, twinables et plus, toutes équipées pour garantir confort et intimité.",
      },
      {
        title: "Le linge de maison est-il fourni ?",
        description:
          "Oui, tout est inclus : draps, serviettes, linge de toilette et produits essentiels. Vous n’avez rien à apporter, tout est prêt pour votre arrivée.",
      },
      {
        title: "La cuisine est-elle équipée pour les grands groupes ?",
        description:
          "Absolument. Vous trouverez une cuisine professionnelle ou semi-professionnelle avec suffisamment de vaisselle, d’ustensiles, de casseroles et de plats pour cuisiner facilement pour de grands groupes.",
      },
      {
        title: "Puis-je faire venir un chef ou un traiteur ?",
        description:
          "Oui ! Nous travaillons avec des chefs et traiteurs partenaires qui connaissent parfaitement nos lieux et s’adaptent à vos besoins. Si vous préférez, vous pouvez aussi faire appel à vos propres prestataires.",
      },
      {
        title: "Y a-t-il du matériel de travail ?",
        description:
          "Oui : Wi-Fi haut débit, écrans, paperboards et plusieurs espaces modulables adaptés à des ateliers, plénières ou sous-groupes de travail.",
      },
      {
        title:
          "Les maisons sont-elles adaptées aux personnes à mobilité réduite ?",
        description:
          "Oui, certaines chambres et salles de bain sont accessibles au rez-de-chaussée et adaptées aux PMR.",
      },
      {
        title: "Les animaux sont-ils acceptés ?",
        description:
          "Non, pour des raisons d’hygiène et de confort pour l’ensemble des participants.",
      },
    ],
  },
  {
    title: "Activités",
    children: [
      {
        title: "Quelles sont les activités incluses sur place ?",
        description:
          "Selon les maisons, vous trouverez : une piscine chauffée, terrains de padel et de tennis, un green de golf, des vélos à disposition, ainsi que de nombreux espaces extérieurs pour se détendre ou pratiquer des activités collectives.\n\nÀ l’intérieur, vous pourrez également profiter d’un espace gaming (PS5), d’un karaoké et un espace festif dédié (🤫).",
      },
      {
        title: "La piscine est-elle sécurisée et chauffée ?",
        description:
          "Oui, toutes nos piscines sont chauffées et sécurisées via des dispositifs d’alarmes.",
      },
      {
        title: "Peut-on pratiquer des activités à proximité ?",
        description:
          "Oui, nos maisons sont situées dans des environnements propices aux balades, aux découvertes culturelles et aux activités sportives. Nous pouvons vous suggérer des itinéraires ou organiser des sorties pour le groupe.",
      },
      {
        title: "Peut-on faire la fête ?",
        description:
          "Oui, vous pouvez organiser des soirées et animations, tant que cela reste respectueux du lieu et du voisinage. Nos maisons sont conçues pour accueillir des événements festifs.",
      },
    ],
  },
  {
    title: "Services Momoamo",
    children: [
      {
        title: "Puis-je être accompagnée dans l’organisation de mon séjour ?",
        description:
          "Oui ! Grâce à notre partenariat avec Kymono Life, nous pouvons vous aider à concevoir un séjour sur-mesure, depuis la logistique jusqu’aux activités de cohésion. Vous profitez d’un accompagnement personnalisé pour créer une expérience unique pour votre équipe.",
      },
      {
        title: "Proposez-vous un service de conciergerie ?",
        description:
          "Oui, nous vous aidons à organiser toutes les étapes de votre offsite : transport, restauration, activités, matériel, animations. Vous pouvez tout déléguer si vous le souhaitez.",
      },
      {
        title: "Y a-t-il un référent sur place ?",
        description:
          "Oui, un couple d’hôtes vit sur place et vous accueillera lors de votre arrivée. Ils gèrent la logistique, coordonnent les prestataires et restent disponibles en cas de besoin pendant tout votre séjour.",
      },
      {
        title: "Y a-t-il un service de petit-déjeuner ou de repas ?",
        description:
          "Oui, plusieurs formules sont possibles : chef sur place, traiteur, livraison de repas ou de kits prêts à cuisiner. Nous adaptons les menus à vos besoins (ex. repas végétariens, options sans allergènes).",
      },
    ],
  },
];

const FAQSection = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestions, setOpenQuestions] = useState<
    Record<number, number | null>
  >({});
  const { titleRef } = useFAQAnimations();
  const [isShow, setIsShow] = useState(false);

  const toggleQuestion = (catIdx: number, qIdx: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [catIdx]: prev[catIdx] === qIdx ? null : qIdx,
    }));
  };

  return (
    <section
      id="FAQ"
      className="max-w-[1360px] px-4 xl:px-14 w-full mx-auto relative overflow-hidden md:py-[100px] py-[64px]"
    >
      <div className="w-full flex md:flex-row flex-col gap-4 justify-between items-start">
        {/* Header */}
        <header
          ref={titleRef}
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => {
            setIsShow(!isShow);
            setOpenCategory(null);
            setOpenQuestions({});
          }}
        >
          <h2 className="text-[#292222] font-nichrome font-bold md:text-[64px] text-[58px] uppercase leading-14">
            FAQ
          </h2>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isShow ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="size-14 stroke-[#292222]"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </header>

        {/* Content */}
        <AnimatePresence initial={false}>
          {isShow && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col flex-1 md:max-w-[915px] w-full"
            >
              {data.map((category, catIdx) => (
                <li
                  key={catIdx}
                  className="py-8 border-t border-[#312C2C] last:border-b"
                >
                  {/* Category */}
                  <button
                    onClick={() =>
                      setOpenCategory(openCategory === catIdx ? null : catIdx)
                    }
                    className="w-full flex justify-between items-center text-left"
                    aria-expanded={openCategory === catIdx ? "true" : "false"}
                    aria-controls={`category-content-${catIdx}`}
                    type="button"
                  >
                    <span className="font-general font-bold text-[18px] uppercase text-black-green leading-none">
                      {category.title}
                    </span>
                    <motion.span
                      animate={{ rotate: openCategory === catIdx ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="accordion-item__icon cursor-pointer"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Questions */}
                  <AnimatePresence initial={false}>
                    {openCategory === catIdx && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden flex flex-col"
                        id={`category-content-${catIdx}`}
                        role="region"
                      >
                        {category.children.map((child, qIdx) => (
                          <li
                            key={qIdx}
                            className="border-b border-[#312C2C] py-4 first:pt-8 last:border-b-0 last:pb-0"
                          >
                            {/* Question */}
                            <button
                              onClick={() => toggleQuestion(catIdx, qIdx)}
                              className="w-full flex justify-between items-center text-left"
                              aria-expanded={
                                openQuestions[catIdx] === qIdx
                                  ? "true"
                                  : "false"
                              }
                              aria-controls={`question-content-${catIdx}-${qIdx}`}
                              type="button"
                            >
                              <span className="font-general font-medium text-lg uppercase text-black-green leading-none">
                                {child.title}
                              </span>
                              <motion.span
                                animate={{
                                  rotate:
                                    openQuestions[catIdx] === qIdx ? 45 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="accordion-item__icon cursor-pointer"
                                aria-hidden="true"
                              />
                            </button>
                            {/* Answer */}
                            <AnimatePresence initial={false}>
                              {openQuestions[catIdx] === qIdx && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                  }}
                                  className="overflow-hidden"
                                  id={`question-content-${catIdx}-${qIdx}`}
                                  role="region"
                                >
                                  <div className="pt-4">
                                    <p className="text-black-green text-[16px] leading-relaxed whitespace-pre-line">
                                      {child.description}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FAQSection;
