import { Poppins, Abril_Fatface } from "next/font/google";
import "./globals.css";

import Intro from "@/components/Intro";
import Footer from "@/components/Footer";

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  weight: '400',
  subsets: ['latin']
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: "Greg Rich | Software Developer",
  description: "The personal portfolio for Greg Rich, a software developer, based out of Brooklyn, NY. Greg specializes in front-end development, with a focus on React and Next.js. He has more than 10 years experience in the field and has won numerous awards for his work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abrilFatface.variable} ${poppins.variable}`}>
        <Intro />
        {children}
        <Footer />
      </body>
    </html>
  );
}
