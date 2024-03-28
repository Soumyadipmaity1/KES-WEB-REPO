

const StatisticCard = ({ imageSrc, title, subtitle }) => {


  return (
    <div className="flex bg-statistics  hover:bg-white cursor-pointer flex-row sm:p-4 p-1 rounded-xl lg:px-6 mx-20 m-5  sm:mx-3 shadow-md" >
      <img className="w-20" src={imageSrc} alt="" />
      <div className="flex flex-col p-2">
        <p className="text-xl font-bold p-1">{title}</p>
        <p className="text-xl font-bold text-green-800 p-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
