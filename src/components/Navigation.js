import React from 'react'
import chatGptIcon from '../images/ChatGPT.svg'


export default function Navigation() {
  return (
    
    <nav class="bg-white dark:bg-white fixed w-full top-0 left-0 border-b border-gray-300 shadow-xl">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center ml-20">
                <span class="self-center text-3xl whitespace-nowrap dark:text-black font-bold">FinTech™</span>
            </a>
            <div class="flex md:order-2 mr-14">
            <button type="button" class="hover:ring-4 flex flex-row text-black bg-[#00A67E]  focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center items-center ">
                <img className="w-7 mr-1" src={chatGptIcon}/>
                Utilize our AI tools
            </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-[17px]">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-200 md:dark:bg-white dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Financial Markets</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Our Team</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}
