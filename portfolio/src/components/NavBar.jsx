"use client";

import Link from "next/link";
import { useState } from "react";
import navconfig from "../app/constants/navdata.json";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = JSON.parse(JSON.stringify(navconfig));

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
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M23.3333 15.0002H16.6667C16.2246 15.0002 15.8007 15.1758 15.4882 15.4883C15.1756 15.8009 15 16.2248 15 16.6668V23.3335C15 23.7755 15.1756 24.1994 15.4882 24.512C15.8007 24.8246 16.2246 25.0002 16.6667 25.0002H23.3333C23.7754 25.0002 24.1993 24.8246 24.5118 24.512C24.8244 24.1994 25 23.7755 25 23.3335V16.6668C25 16.2248 24.8244 15.8009 24.5118 15.4883C24.1993 15.1758 23.7754 15.0002 23.3333 15.0002ZM21.6667 21.6668H18.3333V18.3335H21.6667V21.6668ZM35 21.6668C35.442 21.6668 35.866 21.4912 36.1785 21.1787C36.4911 20.8661 36.6667 20.4422 36.6667 20.0002C36.6667 19.5581 36.4911 19.1342 36.1785 18.8217C35.866 18.5091 35.442 18.3335 35 18.3335H31.6667V15.0002H35C35.442 15.0002 35.866 14.8246 36.1785 14.512C36.4911 14.1994 36.6667 13.7755 36.6667 13.3335C36.6667 12.8915 36.4911 12.4675 36.1785 12.155C35.866 11.8424 35.442 11.6668 35 11.6668H31.3667C31.1178 10.9678 30.7165 10.333 30.1918 9.80833C29.6672 9.28367 29.0323 8.88236 28.3333 8.6335V5.00016C28.3333 4.55814 28.1577 4.13421 27.8452 3.82165C27.5326 3.50909 27.1087 3.3335 26.6667 3.3335C26.2246 3.3335 25.8007 3.50909 25.4882 3.82165C25.1756 4.13421 25 4.55814 25 5.00016V8.3335H21.6667V5.00016C21.6667 4.55814 21.4911 4.13421 21.1785 3.82165C20.866 3.50909 20.442 3.3335 20 3.3335C19.558 3.3335 19.1341 3.50909 18.8215 3.82165C18.5089 4.13421 18.3333 4.55814 18.3333 5.00016V8.3335H15V5.00016C15 4.55814 14.8244 4.13421 14.5118 3.82165C14.1993 3.50909 13.7754 3.3335 13.3333 3.3335C12.8913 3.3335 12.4674 3.50909 12.1548 3.82165C11.8423 4.13421 11.6667 4.55814 11.6667 5.00016V8.6335C10.9677 8.88236 10.3328 9.28367 9.80817 9.80833C9.28351 10.333 8.8822 10.9678 8.63333 11.6668H5C4.55797 11.6668 4.13405 11.8424 3.82149 12.155C3.50893 12.4675 3.33333 12.8915 3.33333 13.3335C3.33333 13.7755 3.50893 14.1994 3.82149 14.512C4.13405 14.8246 4.55797 15.0002 5 15.0002H8.33333V18.3335H5C4.55797 18.3335 4.13405 18.5091 3.82149 18.8217C3.50893 19.1342 3.33333 19.5581 3.33333 20.0002C3.33333 20.4422 3.50893 20.8661 3.82149 21.1787C4.13405 21.4912 4.55797 21.6668 5 21.6668H8.33333V25.0002H5C4.55797 25.0002 4.13405 25.1758 3.82149 25.4883C3.50893 25.8009 3.33333 26.2248 3.33333 26.6668C3.33333 27.1089 3.50893 27.5328 3.82149 27.8453C4.13405 28.1579 4.55797 28.3335 5 28.3335H8.63333C8.8822 29.0325 9.28351 29.6673 9.80817 30.192C10.3328 30.7167 10.9677 31.118 11.6667 31.3668V35.0002C11.6667 35.4422 11.8423 35.8661 12.1548 36.1787C12.4674 36.4912 12.8913 36.6668 13.3333 36.6668C13.7754 36.6668 14.1993 36.4912 14.5118 36.1787C14.8244 35.8661 15 35.4422 15 35.0002V31.6668H18.3333V35.0002C18.3333 35.4422 18.5089 35.8661 18.8215 36.1787C19.1341 36.4912 19.558 36.6668 20 36.6668C20.442 36.6668 20.866 36.4912 21.1785 36.1787C21.4911 35.8661 21.6667 35.4422 21.6667 35.0002V31.6668H25V35.0002C25 35.4422 25.1756 35.8661 25.4882 36.1787C25.8007 36.4912 26.2246 36.6668 26.6667 36.6668C27.1087 36.6668 27.5326 36.4912 27.8452 36.1787C28.1577 35.8661 28.3333 35.4422 28.3333 35.0002V31.3668C29.0323 31.118 29.6672 30.7167 30.1918 30.192C30.7165 29.6673 31.1178 29.0325 31.3667 28.3335H35C35.442 28.3335 35.866 28.1579 36.1785 27.8453C36.4911 27.5328 36.6667 27.1089 36.6667 26.6668C36.6667 26.2248 36.4911 25.8009 36.1785 25.4883C35.866 25.1758 35.442 25.0002 35 25.0002H31.6667V21.6668H35ZM28.3333 26.6668C28.3333 27.1089 28.1577 27.5328 27.8452 27.8453C27.5326 28.1579 27.1087 28.3335 26.6667 28.3335H13.3333C12.8913 28.3335 12.4674 28.1579 12.1548 27.8453C11.8423 27.5328 11.6667 27.1089 11.6667 26.6668V13.3335C11.6667 12.8915 11.8423 12.4675 12.1548 12.155C12.4674 11.8424 12.8913 11.6668 13.3333 11.6668H26.6667C27.1087 11.6668 27.5326 11.8424 27.8452 12.155C28.1577 12.4675 28.3333 12.8915 28.3333 13.3335V26.6668Z"
                      fill="url(#paint0_linear_1273_29)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1273_29"
                        x1="8.33333"
                        y1="3.3335"
                        x2="31.6667"
                        y2="34.1668"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF21A6" />
                        <stop offset="1" stopColor="#1882FF" />
                      </linearGradient>
                    </defs>
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
    <Link
      scroll={true}
      href={url}
      className="text-gray-300 py-6  hover:scale-125 transition-transform hover:bg-[#212121]  bottom-1 hover:text-gray-100 flex justify-center  px-[3%] md:py-2  rounded-md text-sm font-medium "
    >
      {name}
    </Link>
  );
}
