import React from "react";
import trip from "../assets/Trip1.png"
import weather from "../assets/weather2.png"
import greeden from "../assets/Greenden3.png"
import nostra from "../assets/Nostra4.png"
import udemy from "../assets/Udemy5.png"
import actodo from "../assets/Actodo6.png"

const Project = ()=>{

    const Project = [
        {
            id:1,
            src:trip,
            demo:" https://nirmal-nivin.github.io/tripadvisor-clone/",
            code:"https://github.com/nirmal-nivin/tripadvisor-clone",
        },
        {
            id:2,
            src:weather,
            demo:"https://react-weather-app-alpha-seven.vercel.app/",
            code:"https://github.com/nirmal-nivin/React-weather-app",
        },
        {
            id:3,
            src:greeden,
            demo:"https://nirmal-nivin.github.io/Greenden-Tailwind-css/",
            code:"https://github.com/nirmal-nivin/Greenden-Tailwind-css",
        },
        {
            id:4,
            src:nostra,
            demo:"https://nirmal-nivin.github.io/Nostra-js/",
            code:"https://github.com/nirmal-nivin/Nostra-js",
        },
        {
            id:5,
            src:udemy,
            demo:" https://nirmal-nivin.github.io/Udemy-Clone/",
            code:"https://github.com/nirmal-nivin/Udemy-Clone",
        },
        {
            id:6,
            src:actodo,
            demo:"https://actodo-react-ten.vercel.app/",
            code:"https://github.com/nirmal-nivin/Actodo-React",
        },

    ]

    const handleDemo = (demo)=>{
        window.open(demo,"_blank");
    }

    const handleCode = (code) =>{
        window.open(code,"_blank");
    }

    return (
        <div name = "Project"
             className="bg-gradient-to-b from-gray-800 to-gray-800 py-8 text-white w-full md:h-screen">
            <div className="max-w-screen-lg p-6 mb-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold text-center">My <span className="text-cyan-400">Project</span></p>

                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        Project.map(({id,src,demo,code})=>(
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="Project Thumbnail" className="rounded-md duration-200 hover:scale-105"/>
                                    <div className="flex items-center justify-center">
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                                            onClick={()=> handleDemo(demo)}>Demo</button>
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                                            onClick={()=>handleCode(code)}>Code</button>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;