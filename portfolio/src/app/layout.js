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
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta
				name="description"
				content="Vishnu VS - Computer Science Student, Web & App Developer, Open Source Enthusiast"
			/>
			<meta
				name="keywords"
				content="Vishnu VS, Computer Science, Web Developer, App Developer, Open Source, Portfolio"
			/>
			<meta name="author" content="Vishnu VS"></meta>

			<link rel="icon" href="/vishnuverselogo.svg" type="image/x-icon"></link>

			<body
				className={`bg-black  text-white h-screen flex flex-col box-border w-screen m-0 p-0 ${inter.className}`}
			>
				<Navbar></Navbar>
				<main className="h-fit w-full flex flex-col ">
					{children}
				</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
