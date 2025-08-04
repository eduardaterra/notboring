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
    </html>
  );
}
