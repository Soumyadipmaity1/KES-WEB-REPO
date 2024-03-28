import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anirban from './anirbanbhaiya.jpg'
import bishayan from './bishawayanbhaiya.jpg'
const MobileTestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="text-white pt-8 bg-testimonial font-semibold ">
      <div className="h-auto w-full flex flex-wrap items-center text-center p-2  pt-">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <p className="text-[#c1d8fc] font-extrabold text-3xl text-center md:px-5 pt-5 pb-2 p-2 font-mono mb-1">
            Student Testimonial
          </p>
          <div className="w-44 h-2 border-b-4 border-yellow-400 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-full  ">
          <Slider {...settings}>
            <div className=" text-white  text-4xl mx-auto">
              <div class=" sm:w-96 w-80 py-4 px-2 mx-auto bg-test-card border-2 border-blue-900 hover:border-2  hover:border-indigo-500  rounded-3xl my-20 transform hover:scale-110 transition-transform duration-500">
                <div class="flex justify-center -mt-20">
                  <img
                    class="w-28 h-28 object-cover rounded-full border-4 border-indigo-500"
src={bishayan}
                  />
                </div>
                <div class="text-center  pt-2">
                  <p class="py-4 text-sm font-extralight text-gray-200">
                    Hi, myself Bishwayan Ghosh, graduated from KIIT in 2023. I
                    have been with KES since 2019. KES has always been a family
                    for me. Learnings from seniors and passing the same to the
                    future has always been an interesting journey! The Society
                    helped me to explore my areas of interest, which were not
                    covered by the Curriculum subjects. I was the Asst
                    Coordinator for KES from 2021-22, and coordinator from
                    2022-23. We have successfully organized various events,
                    exhibitions, competitions, seminars, webinars, etc during
                    this period. The experience which KES has provided me is
                    something that "cannot be purchased at any cost". And these
                    experiences always help me, even today! Another most
                    memorable part was the farewell ceremony, which the juniors
                    had organized for us. For me, KES is the perfect blend of
                    work, skills, happiness, experiences, and of course great
                    memories!
                  </p>
                  <h2 class="text-[#13ff17] text-base pt-4 font-semibold">
                    Bishwayan Ghosh{" "}
                  </h2>
                </div>
                <div class="flex justify-center mt-1">
                  <a href="#" class="text-xs font-medium text-[#9d9e9c]">
                    1905528
                  </a>
                </div>
              </div>{" "}
            </div>
            <div className=" text-white text-4xl">
              <div class=" sm:w-96 w-80 py-4 px-2 mx-auto bg-test-card border-2 border-blue-900 hover:border-2  hover:border-indigo-500  rounded-3xl my-20 transform hover:scale-110 transition-transform duration-500">
                <div class="flex justify-center -mt-20">
                  <img
                    class="w-28 h-28 object-cover rounded-full border-4 border-indigo-500"
src={anirban}
                  />
                </div>
                <div class="text-center  pt-2">
                  <p class="py-4 text-sm font-extralight text-gray-200">
                    My journey with KES started from 13th November 2020. I have
                    given the very hard test for KES, even during exams if I
                    have done anything wrong, it'll be disqualification. After
                    the first and hard interview, they have selected 23 members
                    only from the entire 400 people. After it's an incredible
                    journey throughout these 3.5 years. KES gives me everything
                    knowledge, leadership skills, team management, most
                    importantly very precious juniors. KES has their legacy to
                    do something new & innovate something different, always fly
                    high. We are always with you!
                  </p>
                  <h2 class="text-[#13ff17] text-base pt-4 font-semibold">
                    Anirban Sadhukhan
                  </h2>
                </div>
                <div class="flex justify-center mt-1">
                  <a href="#" class="text-xs font-medium text-[#9d9e9c]">
                    1903052
                  </a>
                </div>
              </div>{" "}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MobileTestimonialSlider;
