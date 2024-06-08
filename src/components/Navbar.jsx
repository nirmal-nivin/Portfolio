import React, { useState } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () =>{

  const [nav,setNav] = useState(false);

    const links = [
        {
          id: 1,
          link: "Home",
        },
        {
          id: 2,
          link: "About",
        },
        {
          id: 3,
          link: "Skills",
        },
        {
          id: 4,
          link: "Project",
        },
        {
          id: 5,
          link: "Contact",
        },
      ];

    return(
        <div className="flex justify-between items-center px-4 w-full h-20 text-white bg-indigo-950 fixed">
            <div className="text-3xl font-bold ml-2">
                <h1 className="text-cyan-400">Portfolio</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({id, link}) => {
                    return(
                    <li key={id} className="px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200">
                      <Link to={link} smooth duration={500}>
                        {link}
                      </Link>
                    </li>)
                })}
            </ul>

            <div onClick={()=>setNav(!nav)}
              className="cursor-pointer pr-4 z-10 text-white md:hidden">
              {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
            </div>

                {nav && (
                  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-[60%] h-screen
                      bg-gradient-to-b from-indigo-950 to-indigo-950 text-cyan-500 font-semibold">

                      {links.map(({id, link}) => (
                        <li key={id} className="px-4 cursor-pointer py-6 text-3xl">
                          <Link onClick={()=> setNav(!nav)}
                              to={link}
                              smooth duration={500}>
                            {link}
                          </Link>
                        </li>
                      ))}
                 </ul>
                )}
        </div>
    );
};

export default Navbar;