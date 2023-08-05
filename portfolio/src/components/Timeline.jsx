function Timeline() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-200 text-center">
          My Journey Timeline
        </h2>
        <div className="mt-12 flow-root">
          <ul className="-mb-8">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Timeline;


function Item() {
    return (
      <li>
        <div className="relative pb-8">
          <span
            className="absolute top-0 left-8 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
          <div className="relative flex items-start group">
            <div className="relative px-6">
              <span className="h-3 w-3 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-white">
                {/* <svg
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.293 5.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L7 14.586l8.293-8.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </span>
            </div>
            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p className="text-sm text-gray-400">April 2019</p>
                <p className="text-lg font-medium text-gray-200">
                  Started Learning Web Development
                </p>
                <p className="text-sm text-gray-400">
                  Started my journey as a web developer by learning HTML, CSS,
                  and JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
}