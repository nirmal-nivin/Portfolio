import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import hero from "../assets/hero.png";
import { Link } from "react-scroll";
import {Typewriter} from "react-simple-typewriter"

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-indigo-950 to-indigo-950 flex items-center">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Hi, I am</p>
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
            Nirmal Kumar
          </h2>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl mt-2">
            I'm a <span className="text-cyan-400 font-serif">
                <Typewriter 
                  loop
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={['MERN Stack Developer','Frontend Developer','Backend Developer']}/>
            </span>
          </h1>
          <p className="text-white mt-2 text-lg sm:text-xl lg:text-2xl max-w-md mx-auto md:mx-0">
            Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality
          </p>

          <div className="mt-4">
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 mt-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <MdArrowRightAlt />
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img src={hero} alt="my profile" className="rounded-2xl w-4/5 max-w-sm md:max-w-md lg:max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
