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
  openGraph: {
    type: "website",
    url: "https://faulix.com",
    title: "Faulix Software",
    description: "Soluciones digitales",
    images: [
      {
        url: "https://res.cloudinary.com/dahu3rii0/image/upload/c_fill,h_630,w_1200,f_png/v1704984495/FS_wwkkak.png",
        width: 1200,
        height: 630,
        alt: "Faulix Software",
      },
    ],
  },
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
