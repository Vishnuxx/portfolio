import interestconfig from "../configs/interestconfig.json"
import { motion } from "framer-motion";

function AreasSection() {
    const data = JSON.parse(JSON.stringify(interestconfig))
    return (
			<div className="max-w-7xl  mx-auto px-2 py-9  sm:px-6 lg:px-8 w-full">
				<div className="mx-auto  max-w-[510px] text-center">
					<h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
						{`Interest Areas`}
					</h2>
					<p className="text-base text-body-color">
						{`Some of my interested areas that I'm skilled in`}
					</p>
				</div>

				<div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
					{data.map((item, i) => {
						return (
							<motion.div
								key={i}
								initial={{
									opacity: 0,
									transform: "rotateY(-60deg) rotateY(-60deg",
								}}
								whileInView={{
									opacity: 1,
									transform: "rotateY(0) rotateY(0)",
								}}
							>
								<Item name={item.name} />
							</motion.div>
						);
					})}
				</div>
			</div>
		);
}

export default AreasSection;


function Item({name}) {
    return (
      <div className="bg-[#191919] rounded-lg shadow-lg overflow-hidden">
        <div className="py-8 px-6  ">
         
          <div className="mt-5">
            <h3 className="text-lg font-medium text-gray-100">
              {name}
            </h3>
            {/* <p className="mt-2 text-base text-gray-400">
              Proficient in building responsive and dynamic web applications
            </p> */}
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-500 to-indigo-600 z-50  h-[3px] w-full origin-[0%]  " />
      </div>
    );
}