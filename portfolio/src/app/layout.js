import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishnuverse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-[100%]">
     
      <body
        className={`bg-black text-white h-screen flex flex-col box-border w-screen m-0 p-0 ${inter.className}`}
      >
        <main className="h-fit w-full flex flex-col">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
