const achievements = [
    {
        description: 'Won Rs.20,000+ in cash prizes over 4 years',
        iconClassName: 'fa-solid fa-trophy text-5xl mx-auto lg:mt-6 xl:mt-8 text-yellow-500' // Specify icon class name here
    },
    {
        description: 'Participated in 10+ events',
        iconClassName: 'fa-solid fa-star text-5xl mx-auto lg:mt-6 xl:mt-8 text-red-600' // Another example of specifying icon class name
    },
    {
        description: 'Completed 30+ Individual and group projects under KES supervision',
        iconClassName: 'fa-solid fa-check-circle bg-white rounded-full text-5xl mx-auto lg:mt-6 xl:mt-8 text-green-500' // Another example
    },
    {
        description: '100+ members participated',
        iconClassName: 'fa-solid fa-users text-5xl  mx-auto lg:mt-6 xl:mt-8 text-blue-400' // Another example
    },
];

const SummaryCards = () => {
    return (
        <div className="grid xl:mt-32 lg:mt-10  md:grid-cols-4 lg:gap-3 xl:gap-6">
            {achievements.map((achievement, index) => (
                <div key={index} className="card  achieve-shadow rounded-xl  mx-auto xl:w-72 lg:w-52  lg:p-4 xl:p-6 text-center xl:rounded-xl shadow-xl">
                    <i className={achievement.iconClassName}></i>
                    <p className="para2 text-white font-bold xl:text-2xl lg:text-md text-center lg:pt-4 pb-2 xl:pt-5">
                        {achievement.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;
