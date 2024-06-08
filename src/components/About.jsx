import React from "react";

const About = () => {
  return (
    <div 
    name="About"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold justify-center text-center ">About<span className="text-cyan-400"> Me</span></p>
          <p className="mt-20 text-xl">
            I’m a Full Stack Developer with a strong foundation in HTML, CSS,
            JavaScript, Tailwind CSS, MongoDB, Node.js, Express.js, React.js, Git and Github.
            I’m passionate about using these skills to develop
            innovative web applications that are user-friendly. I’m always eager
            to learn more about web development and marketing. I enjoy the
            challenge of coding and solving real-world problems. Currently, I’m
            looking for opportunities to join a team that values innovation and
            shares my enthusiasm for technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
