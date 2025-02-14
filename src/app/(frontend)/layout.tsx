import type { Metadata } from "next";
import { fontPrimary } from "@/styles/fonts";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "NotBoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable}`}>{children}</body>
    </html>
  );
}
