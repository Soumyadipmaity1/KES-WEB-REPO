const IDCards = () => {
  const users = [
    {
      name: "Shyam Barua",
      rollNo: "22051108",
      branch: "Computer Science & Engineering",
      image: '/asst/Shyam.jpg',
      github: "https://github.com/Shyambarua",
      instagram: "https://instagram.com/djdemoxit",
      linkedin: "https://linkedin.com/in/shyam-barua",
    },
    {
      name: "Rohit Chaurasia",
      rollNo: "2106111",
      branch: "Electrical Engineering",
      image: "/asst/rohit.jpg",
      github: "https://github.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Swadhin Sarangi",
      rollNo: "2204072",
      branch: "Electronics and telecommunication ",
      image: "/asst/Swadhin Sarangi.jpg",
      github: "https://github.com/SarangiSwadhin",
      instagram: "https://www.linkedin.com/in/swadhin-sarangi-4454862b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkedin: "https://www.instagram.com/acassianswadhin10?igsh=NnRlZm84MHZnc3N2",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col   p-6">
      <div className="flex flex-wrap gap-6 ">
        {users.map((user, index) => (
          <div key={index} className="bg-opacity-40 shadow-2xl backdrop-blur-lg bg-slate-400  rounded-xl pb-3 text-center w-72">
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
