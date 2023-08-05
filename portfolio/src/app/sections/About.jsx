export default function About() {
  return (
		<div className="relative isolate overflow-hidden px- py-9 sm:py-32 lg:overflow-visible lg:px-0">
			<div className=" mx-auto grid  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4 text-justify hyphens-auto">
						<div className="lg:max-w-lg flex flex-col items-center ">
							<h1 className="mt-2 mb-6  text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
								About Me
							</h1>
							<h2>
								A Versatile Tech Enthusiast, Entrepreneur, Designer, Developer
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-400">
								Hey there! I'm Vishnu VS, a spirited computer science student
								with a flair for turning wild ideas into super cool interactive
								digital adventures. I'm all about tech-powered transformations
								that make our world shine brighter. I'm on a thrilling mission
								to craft user-tastic solutions that stick around and rock
								everyone's socks off. And guess what? I'm head over heels in
								love with creating open source developer magic that's all about
								teaming up, dreaming big, and making the tech universe high-five
								with creativity!
							</p>
						</div>
					</div>
				</div>
				<div className=" -mt-12 p-12 lg:sticky w-full flex justify-center  items-center lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
					<img
						className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10  object-contain"
						src="Vishnu_avatar.png"
						alt="Portfolio Screenshot"
					/>
				</div>
				<div className=" lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 text-justify hyphens-auto ">
          <div className="lg:pr-4 flex ">
           
				</div>
				</div>
			</div>
		</div>
	);
}
