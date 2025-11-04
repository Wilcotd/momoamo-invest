import { isProdEnv } from "@/utils/env";
import { google } from "googleapis";
import { ReservationFormData } from "./types";
import { FormSubmissionStatus } from "./handle-submission";

const testEmail = "tech-tests@momoamo.com";

const getEmail = (email: string) => (isProdEnv ? email : testEmail);

const makeSubject = (subject: string) =>
  isProdEnv ? subject : `[TEST] ${subject}`;

const getGMailClient = async () => {
  const credentials = JSON.parse(process.env.GOOGLE_API_CREDENTIALS!);
  const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

  const authConfig = {
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
    subject: "contact@momoamo.com", // the authenticated user
  };

  const auth = new google.auth.JWT(authConfig);

  const gmail = google.gmail({ version: "v1", auth });

  return gmail;
};

function makeEmailBody({
  from,
  to,
  subject,
  html,
  text,
}: {
  from: string;
  to: string;
  subject: string;
  html?: string;
  text?: string;
}) {
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString("base64")}?=`;

  const headerParts = [
    "MIME-Version: 1.0",
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${utf8Subject}`,
    `Content-Type: text/${html ? "html" : "plain"}; charset=utf-8`,
  ];

  const header = headerParts.join("\n");

  const body = html ? html : text || "";

  const message = `${header}\n\n${body}`;

  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export const sendNotificationEmail = async ({
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
  const gmail = await getGMailClient();

  const customerEmail = {
    from: "Momoamo<contact@momoamo.com>",
    to: getEmail(`${prenom} ${nom}<${email}>`),
    subject: makeSubject("Votre expérience Momoamo commence ici"),
    html: `
      <p>Hello ${prenom},</p>
      <p>Merci beaucoup pour votre demande de réservation !</p>
      <p>L'équipe Momoamo l'étudie en ce moment même et reviendra très vite vers vous pour confirmer tous les détails de votre expérience.</p>
      <p>On a hâte de vous accueillir et de faire de ce séjour un moment inoubliable.</p>
      <p>En attendant, si vous avez la moindre question, vous pouvez simplement répondre à cet e-mail.<p>
      <p>À très vite !</p>
      <p>L'équipe Momoamo</p>`,
  };

  const customerEmailRaw = makeEmailBody(customerEmail);

  const notificationEmail = {
    from: "Momoamo<contact@momoamo.com>",
    to: getEmail("contact@momoamo.com"),
    subject: makeSubject(`Nouvelle demande : ${entreprise}`),
    text: `Prénom : ${prenom}\nNom : ${nom}\nEmail : ${email}\nTéléphone : ${phone}\nNb. participants : ${participants}\nDates flexibles : ${
      isFlexibleDates ? "Oui" : "Non"
    }\nDate d'arrivée : ${arrivalDate ?? ""}\nDate de départ : ${
      departureDate ?? ""
    }\nMessage : \n${message}`,
  };

  const notificationEmailRaw = makeEmailBody(notificationEmail);

  try {
    const customerResult = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: customerEmailRaw,
      },
    });
    console.log(JSON.stringify(customerResult.data, null, 2));
  } catch (err) {
    console.error("Failed to send customer email:", err);
    throw err;
  }

  try {
    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: notificationEmailRaw,
      },
    });
  } catch (err) {
    console.error("Failed to send notification email:", err);
    throw err;
  }
};

export const sendErrorNotificationEmail = async (
  status: FormSubmissionStatus,
  data: ReservationFormData
) => {
  const gmail = await getGMailClient();

  const errorNotificationEmail = {
    from: "Momoamo<contact@momoamo.com>",
    to: "tech@momoamo.com",
    subject: makeSubject(`Form submission error notification`),
    text: `Submission statuses: \n${JSON.stringify(
      status,
      null,
      2
    )}\n\nForm data: \n${JSON.stringify(data, null, 2)}`,
  };

  const errorMailRaw = makeEmailBody(errorNotificationEmail);

  try {
    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: errorMailRaw,
      },
    });
  } catch (err) {
    console.error("Failed to send error notification email:", err);
    throw err;
  }
};
