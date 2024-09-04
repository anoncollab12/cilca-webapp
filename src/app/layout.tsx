import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "CILCA: cursos holísticos",
  description: "CILCA: cursos holísticos",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es" className={`${GeistSans.variable}`}>
        <body>
          <NavBar />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
