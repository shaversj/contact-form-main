import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-karla" });

export const metadata: Metadata = {
  title: "Contact Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.variable}>
        <main className={"grid min-h-screen place-items-center bg-green-200"}>{children}</main>
      </body>
    </html>
  );
}
