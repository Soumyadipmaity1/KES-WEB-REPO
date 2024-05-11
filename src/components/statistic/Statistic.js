import Members from "./membericon.svg";
import Events from "./eventicon.svg";
import Projects from "./projecticon.svg";
import StatisticCard from "./statisticCards";

export default function Statistic() {
  return (
    <div class=" md:p-10 md:h-80 h-[500px]   my-10 bg-[#46e796] md:flex justify-evenly flex-col md:flex-row  pt-[60px] items-center md:items-center">

        <StatisticCard imageSrc={Members} title="Members" subtitle="400+" />
        <StatisticCard imageSrc={Events} title="Events" subtitle="10+" />
        <StatisticCard imageSrc={Projects} title="Projects" subtitle="50+" />
      </div>
  );
}
