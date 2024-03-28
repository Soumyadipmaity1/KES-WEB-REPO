import BigLogoKes from "./keslogo_aboutus.jpeg";

function BigLogo() {
  return (
    <header id="header " className="biglogobg md:block hidden xl:h-[720px] ">
      <div className="pt-20 flex pb-2 justify-center">
        <img
          className="rounded-full bg-transparent h-56 w-56"
          src={BigLogoKes}
          alt=""
        />
      </div>
      <div className="flex justify-center pt-16 text-3xl">
        <h2 className="font-extrabold text-slate-100">
          KIIT ELECTRICAL SOCIETY
        </h2>
      </div>
      <div>
        <p
          id="quotation"
          className="flex justify-center text-xl text-yellow-400 font-semibold p-6"
        >
          "Build Small, Think Big"
        </p>
      </div>
      <p className="text-slate-300 text-[16px]  pt-10 cursor-pointer flex justify-center font-semibold text-center xl:px-40 px-5 sm:px-10 hover:text-white pb-10">
        Welcome to the KIIT Electrical Society (KES), your gateway to boundless
        innovation and intellectual curiosity. We're a dynamic community that
        embraces a wide range of technical domains, from robotics to AI, web
        development to cybersecurity. Join us as we “Build Small, Think Big” and
        transcend boundaries through our multifaceted endeavors. Dive into our
        world of technological prowess and be a part of our journey towards
        fostering innovation.
      </p>


    </header>
  );
}

export default BigLogo;
