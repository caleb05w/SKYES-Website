import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const foundersGrotesk = localFont({
  src: [
    {
      path: "../fonts/TestFoundersGrotesk-Light-BF66175e9730f02.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/TestFoundersGrotesk-Regular-BF66175e972ac1c.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TestFoundersGrotesk-Medium-BF66175e9723b7a.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TestFoundersGrotesk-Semibold-BF66175e972c958.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/TestFoundersGrotesk-Bold-BF66175e9700615.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-founders-grotesk",
  display: "swap",
});

const neueHaas = localFont({
  src: [
    { path: "../fonts/NeueHaasDisplayLight.ttf", weight: "300", style: "normal" },
    { path: "../fonts/NeueHaasDisplayRoman.ttf", weight: "400", style: "normal" },
    { path: "../fonts/NeueHaasDisplayMediu.ttf", weight: "500", style: "normal" },
    { path: "../fonts/NeueHaasDisplayBold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata = {
  title: "SKYES",
  description: "Where we empower all underprivileged youth globally with Entrepreneurial Education to drive local economic development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${foundersGrotesk.variable} ${neueHaas.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}