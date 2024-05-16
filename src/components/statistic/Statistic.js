import StatisticCard from "./statisticCards";

const Members = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837562/membericon_fcmqfl.svg";
const Events = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837560/eventicon_lz3nef.svg";
const Projects = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837560/projecticon_sxmldg.svg";

export default function Statistic() {
  return (
    <div class=" md:p-10 md:h-80 h-[500px]   my-10 bg-[#15d876] md:flex justify-evenly flex-col md:flex-row  pt-[60px] items-center md:items-center">

        <StatisticCard imageSrc={Members} title="Members" subtitle="400+" />
        <StatisticCard imageSrc={Events} title="Events" subtitle="10+" />
        <StatisticCard imageSrc={Projects} title="Projects" subtitle="50+" />
      </div>
  );
}
