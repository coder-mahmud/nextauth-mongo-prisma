import type { Metadata } from "next";

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AOSInit from "@/components/shared/AOSInit";

const inter = Inter({
  subsets:['latin'],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets:['latin'],
  variable: "--font-playfair", 
})


export const metadata: Metadata = {
  title: {
    template:`%s | Bornomala`,
    default: 'Bornomala'
  },
  description: `Learn French for Bangladeshi students`,
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-inter antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <AOSInit />
      </body>
    </html>
  );
}
