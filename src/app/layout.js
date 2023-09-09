import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";


import Script from "next/script";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import AnimatePage from "../components/AnimatePage/AnimatePage";

const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata = {
  title: "Aplus Multi Kreasi",
  description:
    "Aplus Multi Kreasi are a creative agency in the marketing spehere that focuses on Event, Production and Branding.",
};

const GTM_ID = "G-LJ0KYVQ00T"

export default function RootLayout({ children }) {
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
        <ToastContainer theme="dark" />
        <AnimatePage>
          <Navbar />
          {children}
          <Footer />
        </AnimatePage>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
