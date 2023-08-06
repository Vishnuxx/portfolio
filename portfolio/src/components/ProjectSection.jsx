import React, { useState } from "react";
import projectsconfig from "../app/configs/projectsconfig.json";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsSection = () => {
	const [showCard, setShowCard] = useState("pinned");

	const handleProject = (category) => {
		setShowCard(category);
	};

	return (
		<>
			<section className="pt-20 pb-12 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  min-h-screen">
				<div className="container">
					<div className=" w-full mb-12 flex flex-col justify-center items-center">
						<div className="w-full ">
							<div className="mx-auto  max-w-[510px] text-center">
								<h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
									{'Projects'}
								</h2>
								<p className="text-base text-body-color">
									{'Some of my favourite projects'}
								</p>
							</div>
						</div>
					</div>

					<Tab handleProject={handleProject} showCard={showCard}></Tab>

					<div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-auto lg:grid-rows-auto">
						{projectsconfig.map((item, i) => {
							if (showCard == "pinned" || item.category == showCard) {
								return (
									<motion.div
										key={i}
										layout
										initial={{
											opacity: 0,
											transform: "rotateX(-60deg) rotateY(-60deg",
										}}
										whileInView={{
											opacity: 1,
											transform: "rotateX(0) rotateY(0)",
										}}
										transition={{ duration: "0.2", delay: 0.2 }}
									>
										<PortfolioCard
											ImageHref={item.thumbnail}
											category={item.category}
											title={item.title}
											description={item.description}
											projectlink={item.projectlink}
										/>
									</motion.div>
								);
							}
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectsSection;

const Tab = ({ handleProject, showCard }) => {
	const tabitem = [
		{
			name: "Pinned Projects",
			filter: "pinned",
		},
		{
			name: "Brandings",
			filter: "branding",
		},
		{
			name: "UI/UX Designs",
			filter: "design",
		},
		{
			name: "Marketing",
			filter: "marketing",
		},
		{
			name: "Development",
			filter: "development",
		},
	];
	return (
		<div className="w-full flex flex-wrap justify-center ">
			<div className="w-full ">
				<ul className="flex flex-wrap justify-center space-x-1">
					{tabitem.map((item, i) => {
						return (
							<li key={i} className="mb-0 text-gray-500 hover:text-white ">
								<button
									onClick={() => handleProject(item.filter)}
									style={
										item.filter == showCard
											? { background: "#202020", color: "white" }
											: {}
									}
									className={`text-gray-400 hover:bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text  hover:scale-110 inline-block rounded-lg py-2 px-2 m-2 text-center text-base  transition md:py-2 lg:px-4 
                    // showCard === "all"
                    //   ? "activeClasses bg-primary"
                    //   : "inactiveClasses"
                  `}
								>
									{item.name}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

const PortfolioCard = ({
	showCard,
	category,
	ImageHref,
	title,
	description,

	projectlink,
}) => {
	return (
		<>
			<div
				className={`rounded-lg max-w-[500px] shadow-lg overflow-hidden relative  ${
					showCard ? "flex" : "none"
				}  `}
			>
				<div
					style={{ display: `${projectlink == "" ? "none" : "flex"}` }}
					className={`w-full  text-sm  justify-end absolute top-4 right-4`}
				>
					<a
						href={projectlink}
						className="bg-gray-700 hover:bg-gray-500 px-4 py-1 rounded-md  "
					>
						{'Visit'}
					</a>
				</div>

				<div className="flex  items-center w-full h-[200px] justify-center rounded-md bg-[#262626] overflow-hidden text-white">
					{/* Add an icon of the skill */}

					<object data="" type="" className="overflow-hidden">
						<Image
							width="250"
							height="150"
							objectFit="cover"
							layout="responsive"
							src={ImageHref}
							alt={title}
						/>
					</object>
				</div>
				<div className="mt-5 pb-6 ">
					<h3 className="text-lg  text-gray-100 font-bold text-ellipsis line-clamp-1">
						{title ? title : "Title"}
					</h3>
					<p className="mt-2 text-gray-400 text-sm line-clamp-2 h-14">
						{description ? description : "Description"}
					</p>
				</div>

				<div className="bg-gradient-to-r from-rose-500 to-indigo-600   h-[3px] w-full origin-[0%]  " />
			</div>
		</>
	);
};
