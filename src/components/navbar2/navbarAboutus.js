import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import kiitlogo from './kiit_logo2.png'

const ksac = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837286/KSAC_logo_adc2vn.png';
const keslogo = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837281/keslogo_deweab.png";


function NavbarAboutus() {
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <nav className="mx-auto rounded-none bg-transparent sticky box-shadow1 box-shadow z-50 md:top-5 md:mb-8 lg:w-[78%] 2lg:w-[72%] xl:w-[65%] sm:w-[85%]  h-16 md:items-center text-center md:justify-between md:rounded-full sm:text-sm   md:font-bold">
            <div className="md:flex justify-between md:pt-1">
                <div className="flex justify-between md:w-full md:justify-between md:px-16 px-8">
                    <div className="flex w-full md:justify-between">
                    <div>
              <ul className="flex justify-between">
                <a href="https://www.kiit.ac.in/" target="_blank">
                  <li>
                    <img
                      className=" md:h-[47px] bg-white px-[0.7px] pt-[1.4px]  mx-[8px]  sm:h-[40px] text-shadow1  md:mt-[5px]  bg-transparent rounded-full    md:flex hidden "
                      src={kiitlogo}
                      alt="kiit logo"
                    />
                  </li>{" "}
                </a>

                <a href="https://ksac.kiit.ac.in/" target="_blank">
                  <li>
                    <img
                      className="lg:h-[46px] h-[47px] rounded-full py-[5px]  bg-white mx-[8px]  lg:py-[5px] text-shadow1  box-shadow  md:mt-[5px] mt-2 "
                      src={ksac}
                      alt="KES LOGO"
                    />
                  </li>
                </a>
                <Link to="/">
                  {" "}
                  <li>
                    <img
                      className="lg:h-12 h-12   mx-[8px] text-shadow1 box-shadow md:mt-[5px] mt-2 "
                      src={keslogo}
                      alt="KES LOGO"
                    />
                  </li>
                </Link>
              </ul>
            </div>
                        <div className="hidden  md:text-[10px] 2lg:text-[12.5px]   xl:text-[14px] md:flex md:text-center">
                            <Link to="/" className="xl:mx-[12px] lg:mx-[8px] 2lg:mx-[10px]  cursor-pointer mt-4  text-shadow  text-white box-shadow2 px-2  hover:text-blue-500 start  ">HOME</Link>
                            <Link to="/aboutus" className="xl:mx-[12px] lg:mx-[8px] 2lg:mx-[10px] cursor-pointer px-2  text-shadow1   mt-4 box-shadow2  text-blue-500 start transition duration-500">ABOUT US</Link>
                            <Link to="/events" className="xl:mx-[12px] lg:mx-[8px] 2lg:mx-[10px] cursor-pointer px-2 mt-4 text-shadow box-shadow2 text-white hover:text-blue-500 start transition duration-500  ">EVENTS</Link>
                            <Link to="/projects" className="xl:mx-[12px] lg:mx-[8px] 2lg:mx-[10px]  cursor-pointer text-shadow px-2 mt-4  box-shadow2 text-white hover:text-blue-500 start transition duration-500">PROJECTS</Link>
                            <Link to="/achievement" className="xl:ml-[10px] lg:mx-[8px] mt-4  cursor-pointer box-shadow3 px-2 text-white hover:text-blue-500 text-shadow start transition duration-500">ACHIEVEMENTS</Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center pt-2 pr-3">
    <button className="outline-none focus:outline-none" onClick={toggleMenu}>
        <svg className="w-8 h-8 text-white hover:text-blue-500 transition-colors duration-300 ease-in-out" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
</div>
                </div>
            </div>
            <div className={`md:hidden bg-black  mobile-menu ${menuVisible ? '' : 'hidden'}`}>
                <ul className="">
                    <li className="active"><Link to="/" className="block text-sm px-2 py-4 hover:bg-blue-600 text-slate-300 hover:font-semibold     transition duration-300 ">HOME</Link></li>
                    <li><Link to="/aboutus" className="block  text-sm px-2 py-4 bg-blue-700  text-white  font-bold  border-slate-600 border-[0.5px]  transition duration-300">ABOUT US</Link></li>
                    <li><Link to="/events" className="block text-sm px-2 py-4  hover:bg-blue-600 hover:font-semibold text-slate-300  border-slate-600 border-[0.5px]  transition duration-300  ">EVENTS</Link></li>
                    <li><Link to="/projects" className="block text-sm px-2 py-4 hover:bg-blue-600 hover:font-semibold text-slate-300  border-slate-600 border-[0.5px]  transition duration-300 ">PROJECTS</Link></li>
                    <li><Link to="/achievement" className="block text-sm px-2 py-4 border-slate-600 hover:font-semibold border-[0.5px] hover:bg-sky-600 text-white ">ACHIEVEMENTS</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarAboutus;
