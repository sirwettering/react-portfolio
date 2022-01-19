import React from "react";

export default function Contact() {
    return (
      <section id="contact" className="relative">
        <div className="bg-green-900 overflow-hidden p-5 flex-col md:flex-row items-center">
            <div className="bg-green-900 relative flex flex-wrap py-6">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs">
                  ADDRESS:
                </h2>
                <p className="mt-1 text-purple-200">
                  801 E Jefferson St, Apt. 8 <br />
                  Franklin, IN 46131
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs">
                  EMAIL:
                </h2>
                <a className="text-purple-200 leading-relaxed">
                  williamtwettering@hotmail.com
                </a>
                <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs mt-4">
                  CELL PHONE:
                </h2>
                <p className="leading-relaxed text-purple-200">123-456-7890</p>
              </div>
            </div>
        
        </div>
      </section>
    );
  }