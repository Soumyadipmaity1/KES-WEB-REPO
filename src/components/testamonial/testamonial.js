import Stu1 from './anirbanbhaiya.jpg'
import Stu2 from './bishawayanbhaiya.jpg'
import Quote1 from './quote.png'
import Quote2 from './quote.svg'

import { Link } from "react-router-dom";
import React, { useState } from 'react';


function StudentTestimonials() {
  return (
    <div className="bg-[#091e42] pb-16">
      <div className="h-auto w-full flex flex-wrap items-center text-center p-2 md:px-96 md:pt-10 pt-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-[#a1c6fe] font-extrabold text-4xl text-center md:px-5 pt-5 pb-2 p-2 font-mono mb-1">Student Testimonial</p>
          <div className="w-44 h-2 border-b-4 border-yellow-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-8 justify-evenly py-10 pb-5 px-10">
        <div className="p-8 rounded-lg w-[45%] h-auto bg-gradient-to-r from-[#091e42] to-[#0065ff] rounded-r-full">
          <div>
            <img className="p-2 pr-4 pb-5" src={Quote1} alt="" />
          </div>
          <blockquote className="px-4 text-justify pr-12 text-sm  font-italic text-white">
            My journey with KES started from 13th November 2020. I have given the very hard test for KES, even during exams if I have done anything wrong, it'll be disqualification. After the first and hard interview, they have selected 23 members only from the entire 400 people. After it's an incredible journey throughout these 3.5 years. KES gives me everything knowledge, leadership skills, team management, most importantly very precious juniors. KES has their legacy to do something new & innovate something different, always fly high. We are always with you!
          </blockquote>
          <div className="flex items-center justify-start mt-10">
            <img src={Stu1} alt="Author" className="h-12 w-12 rounded-full mr-4" />
            <div>
              <p className="text-md text-yellow-400 font-semibold">Anirban Sadhukhan</p>
              <p className="text-gray-300">1903052</p>
            </div>
          </div>
        </div>

        <div className="p-8 pl-4 flex-col justify-center rounded-lg w-[45%] h-auto bg-gradient-to-r from-[#0065ff] to-[#091e42] rounded-l-full">
          <img style={{ transform: 'rotate(180deg)' }} className="lg:pr-[90%] lg:place-items-end pt-5" src={Quote2} alt="" />
          <blockquote className="px-4 pl-12 xl:text-sm sm:text-[12px] font-italic text-justify text-white">
            Hi, myself Bishwayan Ghosh, graduated from KIIT in 2023. I have been with KES since 2019. KES has always been a family for me. Learnings from seniors and passing the same to the future has always been an interesting journey! The Society helped me to explore my areas of interest, which were not covered by the Curriculum subjects. I was the Asst Coordinator for KES from 2021-22, and coordinator from 2022-23. We have successfully organized various events, exhibitions, competitions, seminars, webinars, etc during this period. The experience which KES has provided me is something that "cannot be purchased at any cost". And these experiences always help me, even today! Another most memorable part was the farewell ceremony, which the juniors had organized for us. For me, KES is the perfect blend of work, skills, happiness, experiences, and of course great memories!
          </blockquote>
          <div className="flex items-center justify-end mt-6 mb-1">
            <div className="text-right">
              <p className="text-md text-yellow-400 font-semibold">Bishwayan Ghosh</p>
              <p className="text-gray-300">1905528</p>
            </div>
            <img src={Stu2} alt="Author" className="h-12 w-12 rounded-full ml-4" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-[#0065ff] items-center text-white hover:bg-white hover:text-[#091e42] font-bold py-2 px-3 rounded-md text-xs shadow-lg">
          <a href="achieve.html">Read more <i className="fa-solid fa-arrow-right fa-fade"></i></a>
        </button>
      </div>
    </div>
  );
};

export default StudentTestimonials;
