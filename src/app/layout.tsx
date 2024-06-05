import "../../styles/bootstrap.min.css";
import "animate.css";
import "../../styles/boxicons.min.css";
import "../../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../../styles/style.css";
import "../../styles/responsive.css";
import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans, Dosis } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import ScrollToTop from "@/components/Layouts/ScrollToTop";

// Prismic
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

// For all body text font
const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

// For all heading font
const dosis = Dosis({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-dosis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apointoo - Booking software for healthcare practices.",
  description:
    "Simplify appointment booking and management for your healthcare practice with Appointoo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${open_sans.variable} ${dosis.variable}`}>
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />

        <AosAnimation />

        <ScrollToTop />
      </body>
    </html>
  );
}
