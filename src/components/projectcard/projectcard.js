import React from 'react';
const pro_dp ='https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837642/Dummy_tech_wunmoq.png'


function IndProjectcard ({ img, title, name, id, github, linkedin, instagram, Document }) {
  return (
    <div className="xl:w-84 w-84  2lg:w-84 probox-shadow 2lg:m-3 m-5 xl:m-5">
      <div><img className="xl:h-52 h-52 2lg:h-52 xl:w-96 w-96 2lg:w-84 rounded-t-2xl" src={img} alt="" /></div>
      <div className="overflow-hidden block px-6 indpro-bg pt-4 pb-2 relative text-black rounded-b-2xl project-link hover:text-white ">
      {/* <div className='item-bg'></div> */}
        <div className="item-title">{title}</div>
        <div className="text-slate-100 rounded-b-2xl relative z-20">
          <div className="flex">
            <div className="w-16 rounded-full"><img className="rounded-full" src={pro_dp} alt="" /></div>
            <div className="ml-4">
              <p className="px-1 pb-1 xl:text-lg text-lg 2lg:text-[16px] font-semibold">{name}</p>
              <p className="p-0.5 pb-1 2lg:text-sm text-base">{id}</p>
              <div className="flex">
                <div className="text-white cursor-pointer">
                  <a href={github} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-3 px-1 rounded-full text-xl hover:text-white hover:bg-black"></i></a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in mx-3 px-1 rounded-full text-xl hover:text-white hover:bg-black"></i></a>
                  <a href={instagram} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram mx-3 px-1 rounded-full text-xl hover:text-white hover:bg-black"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center flex p-2 pb-4 mt-5">
          <a href={Document} target="_blank" rel="noopener noreferrer"> <button className="items-center text-center text-sm bg-white text-black p-1 px-3 rounded-full font-bold hover:bg-black hover:text-white">Read more <i className="fa-solid fa-arrow-right fa-fade"></i> </button></a>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default IndProjectcard;
