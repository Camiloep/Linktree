import type { Metadata } from "next";
import { Inter , Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Puedes ajustar los pesos según tus necesidades
  subsets: ['latin'], // Subconjuntos de caracteres
});

export const metadata: Metadata = {
  title: "Camilo Estrada Patiño — Desarrollador de Software",
  description: "Portfolio de Camilo Estrada Patiño. Desarrollador de software con conocimientos en HTML, CSS, JavaScript, React y TypeScript. Colombia.",
  metadataBase: new URL("https://camiloep.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Camilo Estrada Patiño — Desarrollador de Software",
    description: "Portfolio de Camilo Estrada Patiño. Desarrollador de software con conocimientos en HTML, CSS, JavaScript, React y TypeScript. Colombia.",
    url: "https://camiloep.vercel.app",
    siteName: "Camilo Estrada Patiño",
    locale: "es_CO",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Camilo Estrada Patiño — Desarrollador de Software",
    description: "Portfolio de Camilo Estrada Patiño. Desarrollador de software con conocimientos en HTML, CSS, JavaScript, React y TypeScript.",
    creator: "@milosx0818",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href='/Images/Logo.svg' />
      </head>
      <body className={`bg-black relative  ${poppins.className}`}>{children}</body>
    </html>
  );
}
