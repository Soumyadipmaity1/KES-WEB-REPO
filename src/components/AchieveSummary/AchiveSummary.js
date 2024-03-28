
import SummaryCards from "./SummaryCards";
export default function AchieveSummary(){

    return(
        <section className="w-full xl:h-[100vh] lg:h-[100vh] bg-black lg:block hidden  ">
  <div className="achievesummary  xl:px-20 lg:px-8">
  {/* <h1 className="text-white text-4xl ">Achievement</h1> */}
    <div className="flex justify-center  pt-[260px]">
<SummaryCards/>
      </div>
      </div>
      </section>
    );
}