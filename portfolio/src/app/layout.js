import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishnuverse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-[100%]">
      <meta charSet="UTF-8"></meta>
      <meta
        name="description"
        content="Self Taught Developer Entrepreneur"
      ></meta>
      <meta
        name="keywords"
        content="Vishnu , Vishnuxx , Vishnu VS , Student , Entrepreneur"
      ></meta>
      <meta name="author" content="Vishnuxx"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body
        className={`bg-black text-white h-screen flex flex-col box-border w-screen m-0 p-0 ${inter.className}`}
      >
        <Navbar></Navbar>
        <main className="h-fit w-full flex flex-col">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
