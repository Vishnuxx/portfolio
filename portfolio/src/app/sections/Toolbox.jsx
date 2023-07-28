import { motion } from "framer-motion";

import toolboxconfig from "../constants/toolboxdata.json";

function Toolbox() {
  return (
    <div className=" py-3 ">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="py-4 text-3xl font-extrabold text-gray-100 sm:text-4xl">
            My Toolbox
          </h2>
          <p className="py-6 text-lg text-gray-400 text-center hyphens-auto">
            Here are some of the key technologies I've explored as a tech
            hobbyist.
          </p>
        </div>
        <div className="overflow-hidden w-full">
          <ToolboxItems></ToolboxItems>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#101010] rounded-lg shadow-lg overflow-hidden">
            <div className="py-8 px-6  ">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-100">
                  Web Development
                </h3>
                <p className="mt-2 text-base text-gray-400">
                  Proficient in building responsive and dynamic web applications
                  using modern front-end frameworks like React and Angular.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-500 to-indigo-600 z-50  h-[3px] w-full origin-[0%]  " />
          </div>
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
              <img
                className="w-10 h-10 object-contain "
                src={item.icon}
                alt={item.name}
                loading="true"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
