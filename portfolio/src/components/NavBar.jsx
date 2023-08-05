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
			<motion.div
      initial={{opacity:0 }}
      
				layout
        style={isOpen? {display: "block",opacity:1} : {display:"none" , opacity:"0"}}
				className={`md:hidden transition-all duration-1000 z-10 opacity-25 flex-col h-full bottom-0`}
				id="mobile-menu"
			>
				<div className="px-2  pt-0 pb-3 sm:px-3 bg-[#000000]  w-full h-full filter opacity-[0.7] border-t border-gray-800 rounded-t-xl overflow-hidden">
					{/* Add your mobile navigation links here */}
					{data.map((item, i) => {
						return <MenuItem key={i} data={item} />;
					})}
				</div>
			</motion.div>
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
								className={` inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white`}
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<img src="/vishnuverselogo.svg" alt="vishnuverse" />
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="70"
										height="50"
										viewBox="0 0 70 50"
										fill="none"
									>
										<rect
											x="2"
											y="7"
											width="66"
											height="36"
											rx="6"
											stroke="url(#paint0_linear_21_23)"
											strokeWidth="4"
										/>
										<rect
											x="20.2531"
											y="14.4957"
											width="6"
											height="35"
											rx="3"
											transform="rotate(-45 20.2531 14.4957)"
											fill="#C2C1FF"
										/>
										<rect
											x="44.9888"
											y="10.2401"
											width="6"
											height="35"
											rx="3"
											transform="rotate(45 44.9888 10.2401)"
											fill="#C2C1FF"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_21_23"
												x1="4.52002e-07"
												y1="11"
												x2="72.167"
												y2="35.206"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#F43F5E" />
												<stop offset="1" stopColor="#4F46E5" />
											</linearGradient>
										</defs>
									</svg>
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
