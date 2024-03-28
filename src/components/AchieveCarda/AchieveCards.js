


const AchievementCard = ({ title, date,data1, data2, details }) => {
  return (
    <div className="xl:p-8 lg:p-1  p-4  ">
      <h1 className="text-4xl text font-bold text-center md:text-start text-white p-2 md:p-5">{title}</h1>
      <ul className="flex lg::p-5  p-3 px-5 md:justify-start justify-center">
        <li className="font-bold text-center  px text-gray-400">{data1}</li>
        <li className="font-bold text-center  px-4 text-gray-500">{date}</li>
        <li className="font-bold text-center  px text-gray-400">{data2}</li>
      </ul>
      <p className="p-5 text-yellow-200">{details}</p>
    </div>
  );
};

export default AchievementCard;
