
import indbgpro from "./indprojectbg.jpg"
import NavbarProject from "../../components/navbar2/navbarProject";
import ProjectStart from "../../components/projectstart/projectstart";
import TabSwitchingComponent from "../../components/TabSwitching/TabSwitching";
import Footer from "../../components/footer/footer";
 function projectPage(){

    return(
        <div className="  bg-black">
                <NavbarProject/>
                <ProjectStart/>
               
<TabSwitchingComponent/>
<Footer/>
       </div>

    );

}

export default projectPage;