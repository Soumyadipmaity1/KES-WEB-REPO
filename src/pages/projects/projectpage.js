// import HelplineButton from "../../components/HelplineButton/Helpline";
// import indbgpro from "./indprojectbg.jpg"
import NavbarProject from "../../components/navbar2/navbarProject";
import ProjectStart from "../../components/projectstart/projectstart";
import TabSwitchingComponent from "../../components/TabSwitching/TabSwitching";
import Footer from "../../components/footer/footer";
import SpeedDials from "../../components/SpeedDial/SpeedDial";

import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";

 function ProjectPage(){
    
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

        color={'#9323a1'}
        loading={loading}
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>
  :
        <div className="  bg-black">
                <NavbarProject/>
                <ProjectStart/>
               
<TabSwitchingComponent/>
<Footer/>
<SpeedDials/>
       </div>
    }
</div>

    );
}

export default ProjectPage;