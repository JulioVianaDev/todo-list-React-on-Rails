import React from 'react'
import me from '../../../images/eu.jpg'
function AboutTitle() {
  return (
    <>
       <h1 className="text-4xl text-white text-center md:text-6xl	mt-4 mb-8">About me!</h1>
       <div className="md:flex mt-4 md:justify-center md:items-center md:flex-row md:space-x-10 items-center justify-center flex flex-col  ">
        <div className=" max-w-md p-3 rounded-xl text-justify ">
          <p className="text-white w-72 text-2xl md:text-2xl md:min-w-250 max-w-xl shadow-2xl	 "> I am a fullStack Developer mid-level, i use in my projects Rails, React, Tailwind and styled components.
            i have my own ead platform with most of 600 people that use every day.
          </p>
        </div>
        <div className="md:text-2xl md:min-w-250 max-w-xl shadow-2xl mt-8 	">
          <img src={me} alt="" className="w-64 md:w-48 lg:w-72 mb-4 rounded-2xl"/>
        </div>
      </div>
    </>
  )
}

export default AboutTitle