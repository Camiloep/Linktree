import type { Metadata } from "next";
import { Inter , Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Puedes ajustar los pesos según tus necesidades
  subsets: ['latin'], // Subconjuntos de caracteres
});

export const metadata: Metadata = {
  title: "Camilo Estrada Patiño 👨‍💻",
  description: "Bienvenid@s a mi portfolio"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href='/Images/Logo.svg' />
      </head>
      <body className={`bg-black relative  ${poppins.className}`}>{children}</body>
    </html>
  );
}
