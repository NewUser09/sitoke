import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "SITOKE",
  description: "Temukan berbagai produk elektronik pilihan melalui katalog SITOKE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} bg-gray-50 min-h-full flex flex-col`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
