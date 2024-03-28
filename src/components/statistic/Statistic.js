import Members from "./membericon.svg";
import Events from "./eventicon.svg";
import Projects from "./projecticon.svg";
import StatisticCard from "./statisticCards";

export default function Statistic() {
  return (
    <div class="md:flex justify-evenly md:p-10 md:pt-20 ">
      <StatisticCard
        imageSrc={Members}
        title="Members"
        subtitle="400+"
        
      />
       <StatisticCard
        imageSrc={Events}
        title="Events"
        subtitle="10+"
        
      />
      
      <StatisticCard
        imageSrc={Projects}
        title="Projects"
        subtitle="50+"

      />
      
      

      
    </div>
  );
}
