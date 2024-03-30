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
export default function Home(){
    return(
<div className='bg-black'>
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
    );
}