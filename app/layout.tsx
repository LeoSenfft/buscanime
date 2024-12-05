import type { Metadata } from "next";
import "./globals.css";
import { Mulish } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/providers/Providers";
import { getCookie } from "cookies-next/server";
import { cookies } from "next/headers";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buscanime",
  description: "Encontramos qualquer anime",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getCookie("theme", { cookies });

  return (
    <html lang="pt-BR" data-theme={theme ?? "light"}>
      <body className={`${mulish.className} antialiased flex flex-col min-h-dvh content-between`}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
