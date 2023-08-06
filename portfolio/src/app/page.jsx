"use client";

import ProjectsSection from "@/components/ProjectSection";
import About from "./sections/About";
import Toolbox from "./sections/Toolbox";
import AreasSection from "./sections/Areas";
import Timeline from "@/components/Timeline";
import TypewriterComponent from "typewriter-effect";


export default function Home() {
  return (
		<main className="h-fit w-full  ">
			<div className="bg-gradient-to-r from-rose-500 to-indigo-600 z-50 fixed bottom-0 left-0 right-0 h-[3px] origin-[0%]  " />
			{/* Hero section */}
			<section
				id="hero"
				className="w-[full] h-screen flex flex-col overflow-x-hidden  justify-center items-center "
			>
				<div className="animate-intro will-change-transform font-bold lg:text-[8rem] md:text-[5rem] sm:text-[4rem] text-[3rem] bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent ">
					{"Vishnuverse"}
				</div>
				<div className="flex flex-row justify-center items-center lg:text-[1.2rem] md:text-[1.1rem] sm:text-[1rem] text-[0.7rem]">
					<p className=" animate-intro will-change-transform mr-2 ">
						{"A World of a "}
					</p>
					<div className="font-bold bg-rose-500 bg-clip-text text-transparent">
						<TypewriterComponent
							options={{
								strings: [
									"Crazy Hobbyst",
									"Developer",
									"Designer",
									"Entrepreneur",
								],
								autoStart: true,
								loop: true,
								delay: 50,

								deleteSpeed: 2,
							}}
							// onInit={(typewriter) => {
							// 	typewriter
							// 		.typeString("Hello World!")
							// 		.callFunction(() => {
							// 			console.log("String typed out!");
							// 		})
							// 		.pauseFor(2500)
							// 		.deleteAll()
							// 		.callFunction(() => {
							// 			console.log("All strings were deleted");
							// 		})
							// 		.start();
							// }}
						/>
					</div>
				</div>
			</section>
			<section
				id="about"
				className="w-full h-fit flex flex-col px-8 items-center"
			>
				<About></About>
			</section>
			<section
				id="skills"
				className="w-full h-fit flex flex-col px-8 items-center"
			>
				<AreasSection></AreasSection>
			</section>

			<section
				id="projects"
				className="w-full h-fit flex flex-col px-8 items-center"
			>
				<ProjectsSection></ProjectsSection>
			</section>
			<section
				id="tools"
				className="w-full h-fit flex flex-col px-8 items-center"
			>
				<Toolbox></Toolbox>
			</section>

			<section
				id="experiences"
				className="w-full h-fit flex flex-col px-8 items-center"
			>
				<Timeline></Timeline>
			</section>
		</main>
	);
}
