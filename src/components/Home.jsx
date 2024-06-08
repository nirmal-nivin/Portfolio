import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
// import hero from "../assets/hero.png"
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-indigo-950 to-indigo-950">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-2xl sm:text-4xl font-bold text-white">Hi, I am</p>
          <h2 className="text-white font-bold text-2xl sm:text-4xl mt-2">
            Nirmal kumar
          </h2>
          <h1 className="text-white text-3xl font-bold sm:text-4xl mt-2">
            I'm a <span className="text-cyan-400">Full Stack Developer</span>
          </h1>
          <p className="text-white mt-2 text-xl max-w-md">
            Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality
          </p>

          <div>
            <Link to="Project" 
            smooth duration={500} 
            className="group text-white w-fit px-6 py-3 mt-2 my-2 gap-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt />
              </span>
            </Link>
          </div>
{/* 
          <div className="">
            <img src={hero} 
              alt="my profile"
              className="mt-4 rounded mx-auto w-2/3 md:w-full" />
            </div> */}
        </div>
      </div>
    </div>
  );
}; 

export default Home;
