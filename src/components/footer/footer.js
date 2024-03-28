import { Link } from "react-router-dom";

import keslogo from "./keslogo.png"
const Footer = () => {
  return (
    <>
    <footer className="w-full bg-[#020319] xl:px-4  hidden  pt-6 p-1 lg:flex font-medium flex-row flex-wrap justify-between">

      <div>
        <div className="flex flex-wrap">
          <p className="md:ps-20 ps-28 md:pt-5 font-semibold text-neutral-300 text-xl">KIIT Electrical Society</p>
        </div>
        <div className="md:ms-20 ms-28 mt-2 w-48 h-1 border-b-2 border-yellow-300 "></div>
        <div className="flex-col text-gray-400 justify-center items-start md:items-start flex ps-32 md:ps-0">
          <p className=" text-sm font-semibold pt-4 md:ps-20">
            <i className="fa-solid fa-address-book py-2 pr-2"></i> Campus 3, KIIT University, Odisha
          </p>
          <p className=" font-semibold text-sm pt-2 hover:text-white md:ps-20">
            <i className="fa-solid fa-phone fa-beat py-2 pr-2"></i>
            <a href="tel:+919641208005">9641208005</a>
          </p>
          <p className=" font-semibold text-sm pt-2 md:ps-20">
            <i className="fa-solid fa-envelope py-2 pr-2"></i>
            <a href="mailto:kiitelectricalsociety@gmail.com" className="hover:text-white">kiitelectricalsociety@gmail.com</a>
          </p>
          <p className=" font-semibold text-sm pt-2 md:ps-20">
            <i className="fa-solid fa-clock py-2 pr-2"></i> 10am to 8pm
          </p>
        </div>
        <ul className="md:pt-4 md:pl-8 md:ps-0 md:flex flex justify-center">
          <li className="mx-[8px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kiitelectricalsociety/">
              <i className="text-2xl  fa-brands fa-facebook-f hover:bg-white rounded px-2 hover:text-black text-font text-slate-300"></i>
            </a>
          </li>
          <li className="mx-[8px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/kiit_electrical_society?igshid=MzRlODBiNWFlZA==">
              <i className="text-2xl  fa-brands fa-instagram hover:bg-white rounded px-2 hover:text-black text-font text-slate-300"></i>
            </a>
          </li>
          <li className="mx-[8px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/company/kiit-electrical-society">
              <i className="text-2xl  fa-brands fa-linkedin hover:bg-white rounded px-2 hover:text-black text-font text-slate-300"></i>
            </a>
          </li>
          <li className="mx-[8px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@kiitelectricalsociety6552?si=VwlOYk_lbrgxOwPZ">
              <i className="text-2xl  fa-brands fa-youtube hover:bg-white rounded px-2 hover:text-black  text-slate-300"></i>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold pt-5 text-neutral-300 text-xl md:ps-0 ps-28">Quick Links</h2>
        <div className="mt-2 w-24 md:ms-0 ms-28 h-1  border-b-2 border-amber-300 "></div>
        <div className="text-gray-400 ps-32 md:ps-0">
          <p className="pt-4 py-2 cursor-pointer hover:text-white">
            <a target="_blank" rel="noopener noreferrer" href="https://kiit.ac.in/">KIIT</a>
          </p>
          <p className=" py-2 cursor-pointer hover:text-white">
            <a target="_blank" rel="noopener noreferrer" href="https://kiss.ac.in/">KISS Foundation</a>
          </p>
          <p className="py-2 cursor-pointer hover:text-white">
            <a target="_blank" rel="noopener noreferrer" href="https://ksac.kiit.ac.in/">KSAC</a>
          </p>
          <p className="py-2 cursor-pointer hover:text-white h-screen">
            <a target="_blank" rel="noopener noreferrer" href="https://news.kiit.ac.in/kiit-review/">KIIT review</a>
          </p>
        </div>
      </div>

      <div className="pr-16 w-96">
        <h2 className="font-semibold md:ps-28 ps-28 pt-5 text-neutral-300 text-xl">Location</h2>
        <div className="mt-2 w-20 ms-28 h-1 md:ms-28  border-b-2 border-amber-300 "></div>
        <iframe
          className="md:w-68 md:h-28 pt-6 pb-8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29925.654340525904!2d85.7959338347656!3d20.353728000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190922a9222b5f%3A0xc570193489d46e7!2sKIIT%20School%20Of%20Electrical%20Engineering!5e0!3m2!1sen!2sus!4v1698475865024!5m2!1sen!2sus"
          
          style={{ border: '0', width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-6">
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
        <span className="text-sm text-gray-500 flex justify-center text-center dark:text-gray-400">
          © 2023 <a href="index.html" className="hover:underline">KIIT Electrical Society™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>

    <footer className="block bg-[#020319] lg:hidden p-8 pt-10">
<div className=" text-center  ">
  <img className="mx-auto" src={keslogo}  alt=""   />
  <h1 className=" font-bold text-yellow-400 p-5 text-xl">"Build Small, Think Big"</h1>
</div>

<div>
<ul className=" flex justify-center p-2">
          <li className="mx-[12px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kiitelectricalsociety/">
              <i className="text-2xl  fa-brands fa-facebook-f hover:bg-white rounded px-2 hover:text-black text-font text-slate-300"></i>
            </a>
          </li>
          <li className="mx-[12px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/kiit_electrical_society?igshid=MzRlODBiNWFlZA==">
              <i className="text-2xl  fa-brands fa-instagram hover:bg-white rounded px-2 hover:text-black text-font text-slate-300"></i>
            </a>
          </li>
          <li className="mx-[12px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/company/kiit-electrical-society">
              <i className="text-2xl  fa-brands fa-linkedin hover:bg-white rounded px-2 hover:text-black text-font text-slate-300"></i>
            </a>
          </li>
          <li className="mx-[12px] cursor-pointer">
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@kiitelectricalsociety6552?si=VwlOYk_lbrgxOwPZ">
              <i className="text-2xl  fa-brands fa-youtube hover:bg-white rounded px-2 hover:text-black  text-slate-300"></i>
            </a>
          </li>
        </ul>
</div>

<div>
  <h1>Contact Us</h1>
  <div className=" text-center text-xl font-bold pb-3 text-white ">Contact Us</div>
        <div className="text-center text-gray-400" >
          <p className=" text-sm font">
            <i className="fa-solid fa-address-book pb-2  "></i> Campus 3, KIIT University, Odisha
          </p>
         
          <p className="  text">
            <i className="fa-solid fa-envelope py-2 pr-1 "></i>
            <a href="mailto:kiitelectricalsociety@gmail.com" className="hover:text-white">kiitelectricalsociety@gmail.com</a>
          </p>
          <p className="  text">
            <i className="fa-solid fa-clock py-2 pr-1"></i> 10am to 8pm
          </p>
        </div>
</div>

<div className="text-center text-white">
<h1 className="text-xl pt-6 p-4 font-bold">Quick Links</h1>

<div className="text-gray-400  text-center">
          <p className=" cursor-pointer ">
            <a target="_blank" rel="noopener noreferrer" href="https://kiit.ac.in/">KIIT</a>
          </p>
     
          <p className="cursor-pointer ">
            <a target="_blank" rel="noopener noreferrer" href="https://ksac.kiit.ac.in/">KSAC</a>
          </p>
          <p className="cursor-pointer ">
            <a target="_blank" rel="noopener noreferrer" href="https://news.kiit.ac.in/kiit-review/">KIIT review</a>
          </p>

</div>
</div>

<div className="w-full  mx-auto p-2 md:py-6">
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
        <span className="text-sm text-gray-500 flex justify-center text-center dark:text-gray-400">
          ©2024 <Link to="/" className="hover:underline px-1"> KIIT Electrical Society™</Link>
        </span>
      </div>
    </footer>
    </>
  );
};

export default Footer;
