import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apotza Ui Kit",
  description: "Apotza Ui Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
