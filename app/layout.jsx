"use client";

import { useState, useEffect } from "react";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import SplashScreen from "@/components/SplashScreen";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 3000); // match with SplashScreen timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Anunay Nayan - Portfolio</title>
        <link rel="icon" href="/app/favicon.ico" />
      </head>
      <body className={jetbrainsMono.variable}>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        {!showSplash && (
          <>
            <Header />{children}
            {/* <StairTransition /> */}
            {/* <PageTransition></PageTransition> */}
          </>
        )}
      </body>
    </html>
  );
}
