function Footer() {
    return (
      <footer className="p-4 md:p-8 lg:p-10 ">
        <div className="mx-auto max-w-screen-xl text-center ">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold bg-gradient-to-r from-rose-500 to-indigo-600 bg-clip-text text-transparent"
          >
            Vishnuverse
          </a>
          <p className="my-2 text-gray-500 dark:text-gray-400">Made with</p>
          {/* <ul className="flex flex-wrap justify-center items-center mb-6 ">
            <li>
              <a href="#" className="mr-4 my-5 hover:underline ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 my-5 hover:underline ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 my-5 hover:underline  ">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 my-5 hover:underline ">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 my-5 hover:underline ">
                Achievements
              </a>
            </li>
          </ul> */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©2023-2024{" "}
            {/* <a href="#" className="hover:underline ">
              Vishnuxx
            </a> */}
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
}

export default Footer;