import { GoogleAnalytics } from "@next/third-parties/google";
import { fontPrimary } from "@/styles/fonts";
import "@/styles/global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable}`}>{children}</body>
      <GoogleAnalytics gaId={"G-MF4BP8NZ83"} />
    </html>
  );
}
