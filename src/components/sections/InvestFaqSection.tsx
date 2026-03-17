"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFAQAnimations } from "@/animations/scrollAnimations";

const data = [
  {
    title: "Fonctionnement",
    children: [
      {
        title: "Comment fonctionnent nos club deals ?",
        description:
          `<p>Chez Momoamo, on vous propose un modèle de club deal unique sur le marché, conçu pour maximiser votre rendement et minimiser vos risques :</p><ul><li>La plupart des plateformes du marché sont des intermédiaires : chez Momoamo vous investissez aux côtés des fondateurs, dans des projets qu'ils portent eux-mêmes en capital, en responsabilité et en réputation.</li><li>Le marché vous demande de choisir entre opération de marchand de bien et investissement locatif : chez Momoamo vous profitez des deux : la création de valeur à l'actif (acquisition décotée + rénovation) et la sécurité des flux locatifs générés par l'exploitation (l’accueil de séminaires d’entreprise).</li><li>Le marché spécule, vous laissant seul porter l'incertitude de la sortie d’acheteur : chez momoamo la sortie est déjà sécurisée : c’est nous qui vous rachetons à 3-5 ans pour exploiter les biens nous-même.</li></ul>`,
      },
      {
        title: "Qui peut investir ?",
        description:
          `<p>L'accès aux opportunités Momoamo est éligible à tous, que vous investissiez à titre personnel ou via une personne morale (holding IS, SCI, SAS, etc).</p><p>Le ticket minimum est fixé à 10 000 € par opération.</p>`,
      },
      {
        title: "Quel calendrier de distributions ?",
        description:
          `<p>Deux options selon votre situation :</p><ul><li><strong>Coupons mensuels</strong> : versement d’intérêts dès la mise en exploitation du bien, généralement entre 18 et 24 mois après l'acquisition.</li><li><strong>Capitalisation in fine</strong> : accumulation du rendement sur toute la durée, versé en une seule fois à la sortie — particulièrement adapté aux investisseurs souhaitant optimiser leur fiscalité (notamment dans le cadre du dispositif 150-0 B ter).</li></ul>`,
      },
      {
        title: "Quelle liquidité ?",
        description:
          `<p>L'investissement en Club Deal immobilier est par nature illiquide sur la durée de l'opération. La sortie intervient au moment du refinancement bancaire, que nous estimons entre 3 et 5 ans après l'acquisition.</p><p>Nos projets se financeront en plusieurs tranches (l’acquisition, les travaux, les finitions..) espacés d’environ 6 mois pour optimiser le cout du capital. Les souscripteurs des dernières tranches bénéficient mécaniquement d'un horizon de placement plus court.</p>`,
      },
      {
        title: "Quels sont les frais ?",
        description:
          `<p>Les rendements affichés sont nets de frais.<br />Notre marge est réalisée sur l'exploitation, pas sur la collecte.</p><p>Nous appliquons des frais de structuration à l'entrée, destinés à couvrir les coûts d'audit, de montage juridique et d'acte notarié.</p>`,
      },
      {
        title: "Quel rendement viser et quelle durée d'investissement ?",
        description:
          `<p>Nos clubs deal vise un Taux de Rendement Interne (TRI) net investisseur compris de 12%*, sur un horizon d'investissement généralement compris entre 3 et 5 ans. Cette durée permet de mettre en œuvre notre stratégie : acquisition, travaux de repositionnement, montée en charge de l'exploitation, puis refinancement bancaire dans des conditions optimisées.</p><p>* Les performances passées ne préjugent pas des résultats futurs. Investir comporte des risques de perte en capital et d'illiquidité. Les objectifs de rendement ne sont pas garantis.</p>`,
      },
    ],
  },
  {
    title: "Comprendre Momoamo",
    children: [
      {
        title: "Pourquoi le marché du séminaire d’entreprise ?",
        description:
          `<p>À l'origine, c’est un problème concret : avec Kymono nous ne trouvions pas de lieux adaptés pour notre offre de séminaires d'entreprise. Nous avons décidé de la créer.</p><p>Ce point de départ a révélé une thèse d'investissement solide :</p><ul><li><strong>Industrie performante :</strong> l'hôtellerie figure parmi les classes d'actifs les plus défensives en immobilier.</li><li><strong>Secteur résilient :</strong> la demande de séminaires hors-site est structurelle, peu sensible aux cycles économiques et en forte croissance.</li><li><strong>Fort potentiel value-add :</strong> les domaines historiques se négocient à des valeurs résidentielles ; un repositionnement événementiel et des travaux maîtrisés suffisent à créer un écart de valorisation significatif.</li></ul>`,
      },
      {
        title: "Comment créez vous de la valeur ?",
        description:
          `<p>Notre modèle repose sur une maîtrise totale de la chaîne de valeur :</p><ul><li>Ciblage de biens sous-valorisés ou mal entretenus avec marge de sécurité.</li><li>Travaux standardisés et maîtrisés grâce à un modèle répétable.</li><li>Réduction des capex via Enky : l’ameublement passe en charge mensuelle plutôt qu’en investissement initial.</li><li>Changement de destination vers l’événementiel haut de gamme.</li><li>Exploitation directe des biens par Momoamo.</li><li>Remplissage sécurisé : Kymono (10 000 clients) s’engage à utiliser en priorité les lieux Momoamo.</li></ul><p>*La concurrence a un taux de remplissage d’environ 80% (citer la source) et nous atteignons l’équilibre dès 35%.</p>`,
      },
      {
        title: "Comment sélectionnez-vous les opportunités ?",
        description:
          `<p>Notre sourcing cible une catégorie d'actifs délibérément étroite : des domaines historiques, à moins de 2h de Paris, présentant une décote significative à l'acquisition.</p><p>Chaque opportunité fait l'objet d'une analyse économique approfondie — rénovation, repositionnement, optimisation locative — avant d'être présentée aux investisseurs.</p>`,
      },
      {
        title: "Combien d'opérations sont proposées chaque année ?",
        description:
          `<p>Nous privilégions la qualité à la quantité. Nous visons une sélection rigoureuse d'opportunités à forte valeur ajoutée. Le nombre exact dépend des conditions de marché, mais notre objectif est de proposer 2 à 3 club deals par an, chacun financés sur 2 à 3 tranches.</p><p>Cela représente 4 à 6 fenêtres d’investissements par an sur notre plateforme.</p>`,
      },
      {
        title: "Quel est le parcours type d'un investissement ?",
        description:
          `<p>Le cycle d'investissement suit 5 étapes clés pour garantir transparence et efficacité :</p><ol><li><strong>Découverte :</strong> annonce de l'opération par email</li><li><strong>Analyse :</strong> accès au deck, business plan et data room</li><li><strong>Collecte :</strong> ouverture en plusieurs tranches, signature électronique puis versement des fonds</li><li><strong>Visite des lieux :</strong> pendant la phase de travaux/aménagement</li><li><strong>Suivi :</strong> reporting trimestriel jusqu’au refinancement et distribution</li></ol>`,
      },
    ],
  },
  // {
  //   title: "Juridique, frais, risques",
  //   children: [
  //     {
  //       title: "Quel est le montage juridique ?",
  //       description:
  //         "Chaque opération est isolée dans une structure dédiée (SPV), généralement une SA.\n\nEn investissant, vous devenez associé de cette société, qui :\n- détient l’actif immobilier\n- exploite l’activité de séminaires\n\nVous détenez donc indirectement une part du bien immobilier proportionnelle à votre investissement.",
  //     },
  //     {
  //       title: "Quelles sont les garanties en cas de défaillance ?",
  //       description:
  //         "Premier niveau : égalité entre investisseurs\n- tous les investisseurs sont traités à égalité\n- remboursement au prorata des montants investis\n\nDeuxième niveau : garantie sur les titres Momoamo\nSi le capital ne peut être intégralement restitué via le SPV :\n- les investisseurs reçoivent des titres de la holding Momoamo\n- permettant de percevoir des dividendes jusqu'au remboursement total",
  //     },
  //     {
  //       title: "Quels types de titres puis-je souscrire ?",
  //       description:
  //         "Deux instruments sont proposés :\n\nActions\n- vous devenez associé du projet\n- éligible aux dispositifs fiscaux (dont 150-0 B ter)\n- rendement capitalisé et versé à la sortie\n\nObligations\n- vous devenez créancier de la société\n- coupons mensuels dès exploitation (18–24 mois)\n- une partie du rendement distribuée pendant la vie du projet",
  //     },
  //     {
  //       title: "Traitement égalitaire",
  //       description:
  //         "Actionnaires et obligataires sont traités à égalité lors de la sortie.\n\nLes obligataires renoncent contractuellement à leur rang de séniorité :\nle remboursement intervient au même moment et au même prorata que les actionnaires, y compris en cas de défaillance.",
  //     },
  //   ],
  // },
];

const InvestFaqSection = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openQuestions, setOpenQuestions] = useState<
    Record<number, number | null>
  >({ 0: 0 });
  const { titleRef } = useFAQAnimations();
  const [isShow, setIsShow] = useState(true);

  const toggleQuestion = (catIdx: number, qIdx: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [catIdx]: prev[catIdx] === qIdx ? null : qIdx,
    }));
  };

  return (
    <section
      id="FAQ"
      className="max-w-[1360px] px-4 xl:px-14 w-full mx-auto relative overflow-hidden md:py-[100px] py-[64px] overflow-hidden"
    >
      <div className="w-full flex md:flex-row flex-col gap-4 justify-between items-start">
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
                                    <div
                                      className="text-black-green text-[16px] leading-relaxed [&_p]:mt-3 [&_p:first-child]:mt-0 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_li]:leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-black-green/40 hover:[&_a]:decoration-black-green [&_em]:italic [&_strong]:font-semibold"
                                      dangerouslySetInnerHTML={{
                                        __html: child.description,
                                      }}
                                    />
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

export default InvestFaqSection;
