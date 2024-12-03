import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/providers/Providers";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buscanime",
  description: "Encontramos qualquer anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Providers>
        <body className={`${mulish.className} antialiased flex flex-col min-h-dvh content-between`}>
          <Header />

          <div className="container-full py-6">{children}</div>

          <Footer />
        </body>
      </Providers>
    </html>
  );
}
