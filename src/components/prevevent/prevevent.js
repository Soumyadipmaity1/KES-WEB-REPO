import React from 'react';

import Event1 from './eventpic1.jpg';
import Event2 from './eventpic2.jpg';

const Prevevent = () => {
  return (
    <div className="bg-gray-600 lg:pt-20 lg:pb-20 pb-10 lg:flex-row flex flex-col lg:justify-evenly items-center">
      <div className="h-auto flex flex-wrap items-center md:text-start p-2 md: md:pt-10 pt-5 lg:pb-0 pb-4 ">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-white font-bold lg:text-4xl text-2xl text-center lg:p-5 p-2 lg:font-mono  lg:mb-1">
            Event Highlights
          </p>
          <div className="w-36 h-2 border-b-4 border-yellow-400  rounded-full"> </div>
        </div>
      </div>

      <ul className="flex-row shadow-black shadow-md">
        <li>
          <img className="w-72 h-auto  " src={Event1} alt="" />
        </li>
        <ul className="bg-gray-700 md:pt-8 text-yellow-600 hover:bg-slate-200 hover:text-yellow-600 md:text-base text-sm ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://news.kiit.ac.in/ksac/tech-expo-organized-by-kiit-electrical-society/"
          >
            <li>
              <h2 className="md:pb-4 pb-2 px-3 font-bold text-start pt-2 w-72">
                KIIT Electrical Society (KES) Organizes Innovation Challenge ‘Kreate & Konquer’
              </h2>
            </li>
            <li className="text-start px-3 font-semibold pb-4 text-gray-500 md:text-sm text-xs"> Mar 6, 2023</li>
          </a>
        </ul>
      </ul>

      <br className="lg:hidden" />

      <ul className="flex-row shadow-black shadow-md ">
        <li>
          <img className="w-72 h-auto  " src={Event2} alt="" />
        </li>
        <ul className="bg-gray-700 md:pt-8 text-yellow-600 hover:bg-slate-200 hover:text-yellow-600 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://news.kiit.ac.in/ksac/tech-expo-organized-by-kiit-electrical-society/"
          >
            <li>
              <h2 className="md:pb-4 pb-2 px-3 font-bold text-start pt-2 w-72">Tech-Expo Organized By KIIT Electrical Society</h2>
            </li>
            <li className="text-start px-3 font-semibold md:pb-10 pb-4 text-gray-500 text-sm"> Mar 3, 2023</li>
          </a>
        </ul>
      </ul>
    </div>
  );
};

export default Prevevent;
