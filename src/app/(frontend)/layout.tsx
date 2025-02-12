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
      <link
        rel="preload"
        href={process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000/"}
      />
      <body className={`${fontPrimary.variable}`}>{children}</body>
    </html>
  );
}
