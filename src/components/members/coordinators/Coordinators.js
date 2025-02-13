const dev = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835037/dev_kpv9mi.png'

const IDCards = () => {
  const users = [
    {
      name: "Pranjal",
      rollNo: "21051835",
      branch: "Computer Science & Engineering",
      image: '/coordinator/pranjal.jpg',
      github: "https://github.com/example",
      instagram: "https://instagram.com/example",
      linkedin: "https://linkedin.com/in/example",
    },
    {
      name: "Dev Dashora",
      rollNo: "2106111",
      branch: "Information Technology",
      image: dev,
      github: "https://github.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col   p-6">
      <div className="flex flex-wrap gap-6 ">
        {users.map((user, index) => (
          <div key={index} className=" border-white border-opacity-85 border-4 bg-opacity-40 shadow-2xl backdrop-blur-lg bg-slate-400  rounded-xl pb-3 text-center w-72">
            <img src={user.image} alt={user.name} className="w-50 h-50 mx-auto rounded-xl mb-4" />
            <h2 className="text-xl text-white font-semibold">{user.name}</h2>
            <p className="text-gray-300">Roll No: {user.rollNo}</p>
            <p className="text-gray-300 mb-4">Branch: {user.branch}</p>
            <div className="flex justify-center gap-4 text-gray-400 text-xl">
              <a href={user.github} target="_blank" className="hover:text-black">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={user.instagram} target="_blank" className="hover:text-pink-600">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={user.linkedin} target="_blank" className="hover:text-blue-600">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDCards;
