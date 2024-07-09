import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`bg-black relative ${inter.className}`}>{children}</body>
    </html>
  );
}
