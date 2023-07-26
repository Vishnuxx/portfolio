"use client";

import About from "./sections/About";

export default function Home() {
  return (
    <main className="h-fit w-full">
      <div className="bg-gradient-to-r from-rose-500 to-indigo-600 z-50 fixed bottom-0 left-0 right-0 h-[3px] origin-[0%]  " />
      {/* Hero section */}
      <section
        id="hero"
        className="w-[full] h-screen flex flex-col overflow-x-hidden  justify-center items-center "
      >
        <div className="animate-intro will-change-transform font-bold lg:text-[8rem] md:text-[5rem] sm:text-[4rem] text-[3rem] bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent ">
          Vishnuverse
        </div>
        <p className=" animate-intro will-change-transform lg:text-[1.2rem] md:text-[1.1rem] sm:text-[1rem] text-[0.7rem]">
          A World of a Crazy Hobbyst
        </p>
      </section>
      <section
        id="about"
        className="w-full h-fit flex flex-col px-8 items-center"
      >
        <About></About>
      </section>
    </main>
  );
}
