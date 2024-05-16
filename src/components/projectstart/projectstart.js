const ProjectStartbg = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837548/PROJECTBG4_webyh5.png'


const ProjectStart = () => {
  return (
    <div className="sm:flex lg:justify-between  sm:items-center md:p-5 xl:p-0  bg-black project-bg-mobile md:pb-10 sm:h-[680px] h-[100vh] border-violet-900">
      <div className="sm:pl-4  xl:pl-40  sm:my-0 pt-44 sm:mt-0 flex-0 md:justify-start lg:p-20   sm:w-full text-center lg:text-start   ">
        <h1 className="md:text-6xl text-5xl  lg:p-4  p-6 font-serif font-extrabold text-neonpro ">PROJECTS</h1>
        <p className="sm:text-base text-sm font-semibold text-yellow-300  pt-3 lg:pl-32 ">"Build Small, Think Big"</p>
      </div>
      <div className=" lg:block hidden   w-full ">
        <img className="xl:w-[80%] lg:p-5  xl:p-0 xl:right-0 right-4  justify-end   items-end" src={ProjectStartbg} alt="pic project" />
      </div>
    </div>
  );
}

export default ProjectStart;
