const achievements = [
    {
        description: 'Won Rs.20,000+ in cash prizes over 4 years',
        iconClassName: 'fa-solid fa-trophy text-5xl mx-auto lg:mt-6 xl:mt-8 text-yellow-500' 
    },
    {
        description: 'Participated in 10+ events',
        iconClassName: 'fa-solid fa-star text-5xl mx-auto lg:mt-6 xl:mt-8 text-red-600' 
    },
    {
        description: 'Completed 30+ Individual and group projects under KES supervision',
        iconClassName: 'fa-solid fa-check-circle bg-white rounded-full text-5xl mx-auto lg:mt-6 xl:mt-8 text-green-500' 
    },
    {
        description: '100+ members participated',
        iconClassName: 'fa-solid fa-users text-5xl  mx-auto lg:mt-6 xl:mt-8 text-blue-400' 
    },
];

const SummaryCards = () => {
    return (
        <div className="lg:grid xl:mt-36 2lg:mt-24 lg:mt-10  md:grid-cols-4 lg:gap-3 my-10 lg:my-0 2lg:gap-6 xl:gap-6">
            {achievements.map((achievement, index) => (
                <div key={index} className="card  achieve-shadow rounded-xl text-white hover:bg-white hover:text-black md:mx-40 my-5 mx-16 p-6  md:p-8 lg:my-0  lg:mx-auto xl:w-72 2lg:w-60 lg:w-52  lg:p-4 2lg:p-5 xl:p-6 text-center xl:rounded-xl shadow-xl">
                    <i className={achievement.iconClassName}></i>
                    <p className="para2  font-bold xl:text-2xl lg:text-md text-center lg:pt-4 pb-2 xl:pt-5 md:pt-6 pt-4">
                        {achievement.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;
