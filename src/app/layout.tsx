import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      style: "medium",
      weight: "500",
    },
  ],
});

export const metadata: Metadata = {
  title: "Flight Search",
  description: "Made by Gayatri Patil with ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.className} antialiased text-text-primary`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
