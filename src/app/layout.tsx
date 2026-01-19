import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GSAPProvider } from "@/contexts/GSAPContext";

const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

const nichrome = localFont({
  src: [
    {
      path: "../fonts/MDNichrome-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MDNichrome-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/MDNichrome-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-md-nichrome",
});

export const metadata: Metadata = {
  title: "MOMOAMO | Votre prochain offsite commence ici",
  description: "Découvrez la toute première maison Momoamo: un domaine de 90 hectares en Sologne, à l'est de la forêt d'Orléans à moins d'1h10 de Paris, pensé pour que chaque séjour d'équipe devienne une expérience unique.",
  keywords: ["offsite", "séjour professionnel", "séminaire", "maison d'exception", "équipe", "entreprise", "événement professionnel", "luxe", "France"],
  authors: [{ name: "MOMOAMO" }],
  creator: "MOMOAMO",
  publisher: "MOMOAMO",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://momoamo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MOMOAMO | Votre prochain offsite commence ici",
    description: "Découvrez la toute première maison Momoamo: un domaine de 90 hectares en Sologne, à l'est de la forêt d'Orléans à moins d'1h10 de Paris, pensé pour que chaque séjour d'équipe devienne une expérience unique.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://momoamo.com",
    siteName: "MOMOAMO",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MOMOAMO - Expériences de séjour uniques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOMOAMO | Votre prochain offsite commence ici",
    description: "Découvrez la toute première maison Momoamo: un domaine de 90 hectares en Sologne, à l'est de la forêt d'Orléans à moins d'1h10 de Paris, pensé pour que chaque séjour d'équipe devienne une expérience unique.",
    images: ["/og-image.png"],
    creator: "@momoamo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${generalSans.variable} ${nichrome.variable}`}>
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
