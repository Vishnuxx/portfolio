"use client";

import Link from "next/link";
import { useState } from "react";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "",
    },
    {
      name: "Skills",
      url: "",
    },
    {
      name: "Projects",
      url: "",
    },
    {
      name: "Achievements",
      url: "",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bottom-0   fixed  md:top-0 left-0 right-0 px-0 box-border overflow-hidden h-fit w-full bg-clip-padding backdrop-filter backdrop-blur-sm transform-gpu bg-opacity-10 z-50">
      <div
        className={`md:hidden transition-all duration-1000 ${
          isOpen ? "block" : "hidden"
        }  z-10 flex flex-col h-full bottom-0`}
        id="mobile-menu"
      >
        <div className="px-2 pt-0 pb-3 sm:px-3 bg-[#000000]  w-full h-full filter opacity-[0.8] ">
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
                className={` inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white`}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <h2 className="hidden md:block font-bold text-[1.1rem] bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent ">
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
    <Link scroll={true}
      href={url}
     className="text-gray-300 py-6  hover:bg-[#212121]  bottom-1 hover:text-white flex justify-center  px-[3%] md:py-2 box-border rounded-md text-sm font-medium hover:font-bold"
    >
      {name}
    </Link>
  );
}
