import React from "react";

export default function About() {
  return (
    <section className="overflow-hidden p-5 flex-col md:flex-row items-center bg-purple-200" id="about">
      <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-purple-200">
        <div className="bg-purple-200 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-700">
            Hi, I'm William Wettering.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a recent graduate of the Butler Executive Education Coding Bootcamp. I first gained a love of Web Development when I was in high school, circa 2008. I have been a CMM Programmer for the last 5 years. Web Developmet kept calling out to me. I am a quick learner and I enjoy working with others.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-600 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 hover:text-white rounded text-lg">
              See My Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./about.jpg"
          />
        </div>
      </div>
    </section>
  );
}