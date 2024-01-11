import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WsButton from "@/components/WsButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faulix Software",
  description: "Soluciones digitales",
  metadataBase: new URL("https://faulix.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <WsButton tlf={1156160290} />
        <Footer />
      </body>
    </html>
  );
}
