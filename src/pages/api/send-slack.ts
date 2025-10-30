import { isProdEnv } from "@/utils/env";
import { WebClient } from "@slack/web-api";
import { ReservationFormData } from "./types";

const getSlackChannel = () => (isProdEnv ? "momoamo-requests" : "test-bot");

export const sendSlackMessage = async ({
  prenom,
  nom,
  email,
  phone,
  entreprise,
  participants,
  message,
  arrivalDate,
  departureDate,
  isFlexibleDates,
}: ReservationFormData) => {
  const slack = new WebClient(process.env.SLACK_WEB_CLIENT_TOKEN);
  const channel = getSlackChannel();

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        emoji: true,
        text: `Nouvelle demande :  ${entreprise}  :tada:`,
      },
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Nom :* ${nom}`,
        },
        {
          type: "mrkdwn",
          text: `*Prénom :* ${prenom}`,
        },
        {
          type: "mrkdwn",
          text: `*Email :* ${email}`,
        },
        {
          type: "mrkdwn",
          text: `*Phone :* ${phone}`,
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Nb. participants :* ${participants}`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Dates flexibles ? :* ${isFlexibleDates ? "Oui" : "Non"}`,
      },
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Date d'arrivée :* ${arrivalDate ?? ""}`,
        },
        {
          type: "mrkdwn",
          text: `*Date de départ :* ${departureDate ?? ""}`,
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Message :* \n\n${message}`,
      },
    },
    {
      type: "divider",
    },
  ];

  try {
    const result = await slack.chat.postMessage({
      channel,
      blocks,
    });

    console.log("Message sent:", result.ts);
    return result;
  } catch (error) {
    console.error("Error:", JSON.stringify(error));
    throw error;
  }
};
