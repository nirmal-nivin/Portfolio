import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwindcss from "../assets/tailwind.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongodb.jpg";
import expressjs from "../assets/expressjs.jpg";
import nodejs from "../assets/node.png";
import github from "../assets/github.png";

const Skills = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:tailwindcss,
            title:'TAILWIND CSS',
            style:'shadow-cyan-500',
        },
        {
            id:5,
            src:react,
            title:'REACT.JS',
            style:'shadow-blue-500',
        },
        {
            id:6,
            src:mongodb,
            title:'MONGO DB',
            style:'shadow-green-500',
        },
        {
            id:7,
            src:expressjs,
            title:'EXPRESS.JS',
            style:'shadow-white',
        },
        {
            id:7,
            src:nodejs,
            title:'NODE.JS',
            style:'shadow-green-500',
        },
        {
            id:8,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-500',
        },
    ];

    return(
        <div name='Skills' className="bg-gradient-to-b from-indigo-950 to-indigo-950 w-full md:h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

                <div className="mt-16">
                    <p className="text-4xl font-bold p-2 justify-center text-center">Technical <span className="text-cyan-400">Skills</span></p>
                   
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 mb-12 sm:px-0">

                        {
                            techs.map(({id, src, title, style}) => (
                                <div key={id} 
                                     className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img src={src} alt="techie" className="w-20 mx-auto"/>
                                    <p className="mt-4">{title}</p>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    ) ;
};

export default Skills;