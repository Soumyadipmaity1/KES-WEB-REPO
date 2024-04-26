import BigLogo from "../../components/biglogo/biglogo";
import Gallery from "../../components/gallery/gallery";
import NavbarAboutus from '../../components/navbar2/navbarAboutus';

import HelplineButton from "../../components/HelplineButton/Helpline";
import TeamSwitcher from "../../components/TeamSwitcher/TeamSwitcher";
import TeamCatagory from "../../components/catagories/Catagories";
import Footer from "../../components/footer/footer";
import CreditSection from "../../components/Credits/credit";

import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

 export default function AboutUs(){
    const [loading , setLoading] = useState(false)
    useEffect (()=> {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 5000)
    }, [])
    return(
                 
<div className='bg-black'>
{
    loading?
   
   <div className=" w-[100%] h-screen flex justify-center items-center "> <BounceLoader

        color={'#3b82f6'}
        loading={loading}
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>
  :
   
        <div class='bg-[#031233]   '>

<NavbarAboutus/>   
<div className="aboutus-entry md:hidden block">
    <h1 className="text-5xl text-center aboutus-title-morph p-10 pt-28 font-bold text-white">About Us</h1>
    <p className="text-slate-300 py-8 aboutus-morph text-[16px]  md:pt-10 mt-16 md:mt-0 cursor-pointer flex justify-center font-semibold text-center xl:px-40 px-5 mx-10 md:mx-0 sm:px-10 hover:text-white pb-8 rounded-2xl">
        Welcome to the KIIT Electrical Society (KES), your gateway to boundless
        innovation and intellectual curiosity. We're a dynamic community that
        embraces a wide range of technical domains, from robotics to AI, web
        development to cybersecurity. Join us as we “Build Small, Think Big” and
        transcend boundaries through our multifaceted endeavors. Dive into our
        world of technological prowess and be a part of our journey towards
        fostering innovation.
      </p>
 </div>
<BigLogo/>
 
<Gallery/>
<div className="teamswitcher_bg py-20">
<div className=" text-center font-bold ">
    <h1 className=" text-4xl mb-5 underline-offset-2 text-white">Meet Our Team</h1>
    <div class="w-36 border-b-4 mx-auto mb-5 border-yellow-400  "> </div>

</div>
<TeamCatagory/>
<TeamSwitcher/>
</div>

<div className="bg-[#2b228d]  py-16 ">
<div className=" text-center font-bold">
    <h1 className=" text-4xl mb-5 underline-offset-2 text-white">Credits</h1>
    <div class="w-28 border-b-4 mx-auto mb-5 border-yellow-400  "> </div>

</div>
<CreditSection/>
</div>
<Footer/>
 <HelplineButton/>

</div>
}
</div>
    );

} 