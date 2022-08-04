import { useState } from "react";
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../images/tomate.png'
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="px-2 w-full shadow bg-white border-x-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b-2">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className=" py-3 md:py-5 md:block container flex flex-wrap justify-between items-center mx-auto">
                    <Link className=" flex items-center" to='/'>      
                      <img src={icon} alt="icone" className="mr-3 h-6 sm:h-10"/>
                      <span className="self-center text-x1 font-semibold whitespace-nowrap dark:text-white">To-mate-do-list</span>
                    </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                   <p>aberto</p>
                                ) : (
                                    <p>fechado</p>
                                )}
                            </button>
                        </div>
              </div>
            </div>
            <div>
              <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                      navbar ? "block" : "hidden"
                  }`}
              >
               <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 " >
                <Link  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white" to='/'>
                  Home
                </Link>
                <Link  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to='/about'>
                  <li>About</li>
                </Link>
                <Link  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to='/lists'>
                  <li>Lists</li>
                </Link>
              </ul>
              </div>
            </div>
          </div>
        </nav>
    );
}