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

        <Script id="meta-pixel-code" strategy="afterInteractive">
          {`
           !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image height="1" width="1" style={{ display: 'none' }} alt="meta"
          src={`https://www.facebook.com/tr?id=${process.env.PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <meta name="facebook-api-access-token" content={`${process.env.FACEBOOK_API_ACCESS_TOKEN}`} />

      </head>
      <body className={`bg-black relative  ${poppins.className}`}>{children}</body>
    </html>
  );
}
