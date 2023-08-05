"use client";

import Link from "next/link";
import { useState } from "react";
import navconfig from "../app/configs/navconfig.json";
import { motion } from "framer-motion";

const MenuBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const data = JSON.parse(JSON.stringify(navconfig));

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className=" bottom-0  fixed  md:top-0 left-0 right-0 px-0 box-border overflow-hidden h-fit w-full bg-clip-padding backdrop-filter backdrop-blur-sm transform-gpu bg-opacity-10 z-50">
			<div
				style={isOpen ? { display: "block" } : { display: "none" }}
				className={` ${isOpen ? "block" : "none"} transition-all duration-1000 z-10  flex-col h-full bottom-0`}
				id="mobile-menu"
			>
				<div className="px-2  pt-0 pb-3 sm:px-3 bg-[#000000]  w-full h-full filter opacity-[0.7] border-t border-gray-800 rounded-t-xl overflow-hidden">
					{/* Add your mobile navigation links here */}
					{data.map((item, i) => {
						return <MenuItem key={i} data={item} />;
					})}
				</div>
			</div>
			<div className="flex px-4 items-center justify-center  box-border bg-black  opacity-[0.8] ">
				<div className="items-center justify-center flex box-border w-full py-4 sm:px-0 md:py-6 md:px-2 ">
					<div
						onClick={toggleMenu}
						className="flex w-fit justify-center items-center   px-20 rounded-md"
					>
						<div className="-mr-2 flex md:hidden  ">
							<button
								onClick={toggleMenu}
								type="button"
								className={` inline-flex h-10 items-center justify-center p-2 rounded-md text-gray-300 hover:text-white`}
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<img src="/vishnuverselogo.svg" alt="vishnuverse" />
								) : (
									<img src="/closenavbtn.svg" alt="closenav" />
								)}
							</button>
						</div>

						<h2 className="hidden w-fit md:block font-bold text-[1.4rem] bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent ">
							Vishnuverse
						</h2>
					</div>
					<div className="hidden xs:hidden  md:flex w-full flex-row justify-center items-center">
						<div className="flex justify-center box-border w-full h-fit">
							{/* links */}
							{data.map((item, i) => {
								return <MenuItem key={i} data={item} />;
							})}
						</div>
					</div>
					<div className="  md:w-[200px]"></div>
				</div>
			</div>
		</nav>
	);
};

export default MenuBar;

function MenuItem({ data }) {
	const { name, url } = data;
	return (
		<Link
			scroll={true}
			href={url}
			className="text-gray-300 py-6  hover:scale-125 transition-transform hover:bg-[#262626]  bottom-1 hover:text-white flex justify-center  px-[3%] md:py-2  rounded-md text-sm font-medium "
		>
			{name}
		</Link>
	);
}
