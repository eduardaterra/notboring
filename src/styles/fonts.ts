import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

export const fontPrimary = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const fontSecondary = localFont({
  src: [
    {
      path: "../styles/localFonts/CabinetGrotesk-Black.woff2",
      weight: "900",
      style: "black",
    },
    {
      path: "../styles/localFonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../styles/localFonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../styles/localFonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../styles/localFonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../styles/localFonts/CabinetGrotesk-Thin.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../styles/localFonts/CabinetGrotesk-ExtraLight.woff2",
      weight: "200",
      style: "extralight",
    },
  ],
});
