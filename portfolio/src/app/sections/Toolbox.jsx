import { motion } from "framer-motion";

import toolboxconfig from "../configs/toolboxconfig.json";
import Image from "next/image";

function Toolbox() {
	return (
		<div className=" py-3 ">
			<div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
				<div className="text-center">
					<h2 className="py-4 text-3xl font-extrabold text-gray-100 sm:text-4xl">
						{`My Toolbox`}
					</h2>
					<p className="py-6 text-lg text-gray-400 text-center hyphens-auto">
						{`Here are some of the key technologies I've explored as a tech
						hobbyist.`}
					</p>
				</div>
				<div className="overflow-hidden w-full">
					<ToolboxItems></ToolboxItems>
				</div>
			</div>
		</div>
	);
}

export default Toolbox;

function ToolboxItems() {
	const data = JSON.parse(JSON.stringify(toolboxconfig));
	return (
		<div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 w-full scroll-content ">
			{data.map((item, i) => {
				return (
					<div
						key={i}
						className=" rounded-md flex flex-col justify-center items-center select-none"
					>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: "0.2", delay: 0.002 * i }}
							className="w-20 h-20 m-2 bg-gray-800 rounded-md flex flex-col justify-center items-center hover:bg-gray-700"
						>
							<Image
								width="30"
								height="30"
								layout="fixed"
								src={item.icon}
								alt={item.name}
							/>
						</motion.div>
					</div>
				);
			})}
		</div>
	);
}
