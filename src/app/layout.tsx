import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "CILCA: cursos holísticos",
  description: "CILCA: cursos holísticos",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
