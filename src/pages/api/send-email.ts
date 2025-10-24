import nodemailer from "nodemailer";

export async function sendEmail({
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
}: {
  prenom: string;
  nom: string;
  email: string;
  phone: string;
  entreprise: string;
  participants: string;
  message: string;
  arrivalDate?: string;
  departureDate?: string;
  isFlexibleDates?: boolean;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "contact@momoamo.com",
      pass: "pidx hrud ioqq lbxu",
    },
  });
  const notificationMail = {
    from: "Momoamo<no-reply@momoamo.com>",
    to: "contact@momoamo.com",
    subject: `Nouvelle demande : ${entreprise}`,
    text: `Prénom : ${prenom}\nNom : ${nom}\nEmail : ${email}\nTéléphone : ${phone}\nNb. participants : ${participants}\nDates flexibles : ${
      isFlexibleDates ? "Oui" : "Non"
    }\nDate d'arrivée : ${arrivalDate ?? ""}\nDate de départ : ${
      departureDate ?? ""
    }\nMessage : \n${message}`,
  };

  const customerMail = {
    from: "Momoamo<contact@momoamo.com>",
    to: email,
    subject: "Merci pour votre demande de réservation",
    html: `
      <p>Hello ${prenom},</p>
      <p>Merci beaucoup pour votre demande de réservation pour un offsite avec Momoamo.</p>
      <p>L'équipe Momoamo va rapidement examiner votre demande et vous recontacter très vite pour vous confirmer les détails de votre expérience.</p>
      <p>Si vous avez des questions, n'hésitez pas à nous contacter en répondant à ce mail.<p>
      <p>À très vite !</p>
      <p>L'équipe Momoamo</p>`,
  };

  await transporter.sendMail(customerMail);

  await transporter.sendMail(notificationMail);
}
