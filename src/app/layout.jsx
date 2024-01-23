"use client"

import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import AOSInit from "@/components/AOSInit";



const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap", });


const GTM_ID = "G-LJ0KYVQ00T"

export default function RootLayout({ children, session }) {



  return (
    <html lang="en">
      {/* Google tag (gtag.js)  */}

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
          `}
      </Script>

      <body className={`${poppins.className} `}>

        <AOSInit />
        <ToastContainer position="top-center" />
        <SessionProvider session={session} >
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
