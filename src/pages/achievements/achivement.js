import Achievestart from "../../components/achievementstart/achievestart";
import NavbarAchievement from "../../components/navbar2/navbarAchievement";
import AchieveSummary from "../../components/AchieveSummary/AchiveSummary";
import AchievementCard from "../../components/AchieveCarda/AchieveCards";
import AchieveFlow from "../../components/achieveflow/achieveflow";
import AchieveImage from "../../components/AchieveCarda/AchieveImage";
import HelplineButton from "../../components/HelplineButton/Helpline";
import Footer from "../../components/footer/footer";
import AchieveSlider1 from "../../components/AchieveSlider/AchieveSlider";
import AchieveSlider2 from "../../components/AchieveSlider/AchievesSlider2";
import AchieveSlider3 from "../../components/AchieveSlider/AchieveSlider3";
import SummaryCards from "../../components/AchieveSummary/SummaryCards";
export default function Achievement() {
  return (
    <div className="bg-[#000308] ">
      <NavbarAchievement/>
      <Achievestart />
      {/* // </div> */}
      <AchieveSummary />
<div className="lg:hidden">
<SummaryCards/>
</div>
      <AchieveFlow />
      <div className="lg:block hidden ">
        <div className="grid grid-cols-2 cursor-pointer xl:px-16 lg:m-8 hover:bg-gray-900  achieve-shadow rounded-xl   px-10 text-justify py-8">
          <AchievementCard
            title="Winner, KAIROS"
            data1="KIIT FEST 7.O"
            data2="Feb 2024"
            date="KIIT UNIVERSITY"
            details="Led by Shivansh Mishra, the team comprising Soumyadip Maity, Devaansh Saxena, and Arnav Sharma secured the top prize at the Kairos Industrial IoT Presentation during KIIT FEST 7.0. Their presentation, 'DNAM Agriculture 4.0', impressed judges with its pioneering integration of IoT in agriculture. Competing against others, their idea emerged as the most innovative. Their exceptional performance garnered not only accolades but also a cash prize and certificates. Congratulations to the team for this remarkable achievement and for clinching the first place."
          />
        <AchieveSlider3/>

        </div>
        <div className="grid grid-cols-2 xl:px-16  lg:m-8 cursor-pointer hover:bg-gray-900  achieve-shadow rounded-xl px-10 text-justify py-8">
        <AchieveSlider2/>

          <AchievementCard
            title="Runner’s Up,Tech Tank"
            data1="Synchronize 2.0 "
            data2="Feb 2024"
            date="XIM University"
            details="KES  team with leader Dev Dashora  and members Shyam Barua, Sweta kumari secured the runner’s-up position at the Tech Tank event, which was held during XIM University's annual event, Synchronize 2.0. The competition revolved around presenting innovative ideas to the jury members through poster presentations, and our KES team honored to have idea recognized as the most innovative .For the excellent performance they were rewarded with cash prize and certificate respectively."
          />
        </div>
        <div className="grid grid-cols-2 xl:px-16  lg:m-8 hover:bg-gray-900 cursor-pointer  achieve-shadow rounded-xl  px-10 text-justify py-8">
          <AchievementCard
            title="2nd Runner's Up, GamesFest"
            data1="KSHITIJ"
            data2="Jan 2024"
            date="IIT KGP"
            details="
We participated in the Gamefest at IIT Kharagpur Kshitij 2024, competing with players from various colleges over three exhilarating days. Despite securing the 2nd runner-up position, the event was unforgettable. Meeting Maxtern, a gaming community icon, on the final day was a delightful surprise. His expertise and passion were truly inspiring as we exchanged strategies and celebrated our achievements, feeling part of a vibrant gaming legacy. This victory marks the beginning of many thrilling moments in our gaming journey! "
          />
        <AchieveSlider1/>
        </div>
      </div>

      <div className="block lg:hidden md:p-10  text-justify">
        <div className="  m-4 achieve-shadow rounded-md py-3">
          <AchievementCard
            title="Winner, KAIROS"
            data1="KIIT FEST 7.O"
            data2="Feb 2024"
            date="KIIT UNIVERSITY"
            details="Led by Shivansh Mishra, the team comprising Soumyadip Maity, Devaansh Saxena, and Arnav Sharma secured the top prize at the Kairos Industrial IoT Presentation during KIIT FEST 7.0. Their presentation, 'DNAM Agriculture 4.0', impressed judges with its pioneering integration of IoT in agriculture. Competing against others, their idea emerged as the most innovative. Their exceptional performance garnered not only accolades but also a cash prize and certificates. Congratulations to the team for this remarkable achievement and for clinching the first place."
          />
               <AchieveSlider3/>

        </div>
        <div className=" m-4 achieve-shadow rounded-md py-3 ">
          <AchievementCard
            title="Runner’s Up,Tech Tank"
            data1="Synchronize 2.0 "
            data2="Feb 2024"
            date="XIM University"
            details="KES  team with leader Dev Dashora  and members Shyam Barua, Sweta kumari secured the runner’s-up position at the Tech Tank event, which was held during XIM University's annual event, Synchronize 2.0. The competition revolved around presenting innovative ideas to the jury members through poster presentations, and our KES team honored to have idea recognized as the most innovative .For the excellent performance they were rewarded with cash prize and certificate respectively."
          />
                 <AchieveSlider2/>

        </div>
        <div className=" m-4 achieve-shadow rounded-md py-3">
          <AchievementCard
            title="2nd Runner's Up, GamesFest"
            data1="KSHITIJ"
            data2="Jan 2024"
            date="IIT KGP"
            details="
We participated in the Gamefest at IIT Kharagpur Kshitij 2024, competing with players from various colleges over three exhilarating days. Despite securing the 2nd runner-up position, the event was unforgettable. Meeting Maxtern, a gaming community icon, on the final day was a delightful surprise. His expertise and passion were truly inspiring as we exchanged strategies and celebrated our achievements, feeling part of a vibrant gaming legacy. This victory marks the beginning of many thrilling moments in our gaming journey! "
          />
        <AchieveSlider1/>

        </div>
      </div>

      <Footer />
      <HelplineButton/>

    </div>
  );
}
