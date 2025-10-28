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
      user: "no-reply@momoamo.com",
      pass: "sjcv tkxw jrws nnoz",
    },
  });

  console.log("Preparing to send emails to:", email);

  const customerMail = {
    from: "Momoamo<contact@momoamo.com>",
    to: email,
    subject: "Votre expérience Momoamo commence ici",
    html: `
      <p>Hello ${prenom},</p>
      <p>Merci beaucoup pour votre demande de réservation !</p>
      <p>L'équipe Momoamo l'étudie en ce moment même et reviendra très vite vers vous pour confirmer tous les détails de votre expérience.</p>
      <p>On a hâte de vous accueillir et de faire de ce séjour un moment inoubliable.</p>
      <p>En attendant, si vous avez la moindre question, vous pouvez simplement répondre à cet e-mail.<p>
      <p>À très vite !</p>
      <p>L'équipe Momoamo</p>`,
  };

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

  await transporter.sendMail(customerMail);

  await transporter.sendMail(notificationMail);
}
