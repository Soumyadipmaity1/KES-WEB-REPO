import NavbarHome from "../../components/navbar2/navbarhome";
import HelplineButton from "../../components/HelplineButton/Helpline";
import ImageSlider from "../../components/Imageslider/imageslider";
import Footer from "../../components/footer/footer";
import NoticeBoard from "../../components/noticeboard/notice";
import Statistic from "../../components/statistic/Statistic";
import Prevevent from "../../components/prevevent/prevevent";
import OurJourney from "../../components/journey/Ourjourney";
import GuidingPillars from "../../components/piller/piller";
import StudentTestimonials from "../../components/testamonial/testamonial";
import MobileTestimonialSlider from "../../components/testimonialMobile/MobileTestimonial";
import Entry from "../../components/EntryForMobile/Entry";
// import Bulb from './bulb.json'
// import Lottie from 'lottie-react'
import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

export default function Home(){
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

        color={'#24c35e'}
        loading={loading}
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>
  :
  <div>
<NavbarHome/>
<ImageSlider/>
<Entry/>
<Statistic/>
<NoticeBoard/>
<Prevevent/>
<OurJourney/>
<GuidingPillars/>   
<div className="hidden lg:block">
<StudentTestimonials/>
</div>
<div className="lg:hidden block   ">
    <MobileTestimonialSlider/>
</div>

<Footer/>
<HelplineButton/>
</div>
}
</div>

    );
}