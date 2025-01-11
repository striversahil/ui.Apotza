import Sidebar from "@/components/content/Sidebar";
import { Navbar } from "@repo/ui_patterns/Navbar";
import type { Metadata } from "next";

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
    <aside suppressHydrationWarning>
      {/* <Navbar /> */}
      <Sidebar />
      {children}
    </aside>
  );
}
