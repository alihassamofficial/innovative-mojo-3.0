import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import AOSProvider from "@/providers/AOSProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const monaSans = localFont({
  src: [
    {
      path: "../fonts/mona-sans/Mona-Sans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/mona-sans/Mona-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/mona-sans/Mona-Sans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/mona-sans/Mona-Sans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/mona-sans/Mona-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/mona-sans/Mona-Sans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/mona-sans/Mona-Sans-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innovative Mojo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${monaSans.variable} antialiased`}
    >
      <body className="relative flex min-h-screen flex-col bg-background text-foreground">
        <AOSProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
