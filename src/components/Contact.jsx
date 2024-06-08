import React from "react";

const Contact = () =>{
    return(
        <div name='Contact' className="w-full h-screen bg-gradient-to-b from-indigo-950 to-indigo-950 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-6 mt-10">
                    <p className="text-4xl font-bold justify-center text-center">Contact <span className="text-cyan-400">Me</span></p>
                    
                </div>

                <div className="flex justify-center items-center">
                     <form action="#" className="flex flex-col w-full md:w-1/2">

                        <input type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                        />

                        <input type="text"
                        name="email"
                        placeholder="Enter your email"
                        className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                        />

                        <textarea
                         name="message"
                         placeholder="Enter your message"
                         rows="10"
                         className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
                         </textarea>

                         <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 
                            px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                Lets's Talk
                        </button>
                    </form>
                </div>

                <div className="font-normal text-xl max-w-screen-lg mx-auto h-full">
                    <p>Copyright © 2024 by @Nirmalkumar | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;