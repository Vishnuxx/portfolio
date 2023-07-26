export default function About() {
  return (
    <div className="relative isolate overflow-hidden px- py-9 sm:py-32 lg:overflow-visible lg:px-0">
      <div className=" mx-auto grid  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 text-justify hyphens-auto">
            <div className="lg:max-w-lg flex flex-col items-center ">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600 ">
                Showcase your tech projects
              </p> */}
              <h1 className="mt-2 mb-6  text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                About Me
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Hey there, fellow tech geeks! Vishnu here! I'm just an ordinary
                guy with an extraordinary love for all things . They call me a
                budding entrepreneur, but honestly, I'm just a passionate soul
                who can't resist the allure of code, creativity, and, of course,
                mouthwatering food!
              </p>
            </div>
          </div>
        </div>
        <div className=" -mt-12 p-12 lg:sticky w-full flex justify-center  items-center lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10  object-contain"
            src="Vishnuxx-sm.png"
            alt="Portfolio Screenshot"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 text-justify hyphens-auto">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-400 lg:max-w-lg">
              <p>
                My journey into the world of coding started with nothing more
                than a trusty mobile phone in hand. Yep, you heard that right!
                While most kids were playing games and texting, I was diving
                into the fascinating world of reverse engineering with a group
                of ingenious minds. We were all about unraveling the mysteries
                of Java Android mobile apps and tinkering with code like
                mischievous wizards.
                <br />
                <br />
                Imagine me, in my younger days, hunched over my tiny mobile
                screen, decompiling apps, and trying to decipher the secrets
                hidden within. I felt like a digital Sherlock Holmes, and trust
                me, it was as thrilling as it sounds! As I stumbled upon lines
                of code, I couldn't help but experiment, making little changes
                here and there, just for the fun of it.
                <br />
                <br />
                And you know what they say – practice makes perfect. Or in my
                case, practice makes a decent coder! With each daring exploit, I
                honed my skills, and soon enough, I was crafting my own simple
                hacking tools on my trusty mobile device. I might not have had a
                top-of-the-line laptop, but boy, did I have determination!
                <br />
                <br /> As I grew in confidence, I embarked on a freelance
                journey, whipping up apps that made life a tad bit easier for
                people out there. It was rewarding to see my creations being put
                to good use by others. It's like leaving a piece of yourself in
                every project you work on – a digital signature of sorts.
                <br />
                <br />
                But my tech adventure didn't stop there. Oh no, siree! I
                ventured into some side projects, each one pushing the
                boundaries of my creativity. I always try to do it in my own
                way. From coding to whipping up delectable dishes in the kitchen
                (yes, I'm a chef too!), my world was a beautiful medley of bits
                and bites.
                <br />
                <br />
                I couldn't stop at just one passion. Art beckoned, and I
                answered. Drawing and painting became my escape from lines of
                code, letting my imagination run wild on the canvas. And when I
                needed to soothe my soul, I turned to music – composing melodies
                that dance with the stars LOL.
                <br />
                <br />
              </p>
              {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-indigo-500">
                      IoT Projects.
                    </strong>{" "}
                    I have a keen interest in the Internet of Things and have
                    developed several smart home automation projects using
                    Raspberry Pi and Arduino.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-teal-500">
                      Web Development.
                    </strong>{" "}
                    Building web applications and websites is my passion. I am
                    skilled in front-end technologies like React and back-end
                    technologies like Node.js.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-yellow-500">
                      Machine Learning.
                    </strong>{" "}
                    I am fascinated by the potential of machine learning. I have
                    worked on projects involving image recognition and natural
                    language processing.
                  </span>
                </li>
              </ul> */}
              <p className="mt-8">
                Technology is an ever-evolving field, and I am always eager to
                learn and embrace new challenges. Through my portfolio, I hope
                to inspire and connect with fellow tech enthusiasts who share a
                similar passion for innovation and problem-solving.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-200">
                Let's Collaborate!
              </h2>
              <p className="mt-6">
                I believe in the power of collaboration and open-source
                contributions. If you have a project idea or want to collaborate
                on an exciting tech venture, feel free to reach out to me. Let's
                create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
