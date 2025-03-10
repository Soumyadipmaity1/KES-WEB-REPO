
const G1 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837381/ProfShyam_Behura_dlrog8.jpg'

const G3 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837379/ProfShubhasri_Kundu_qnl9r8.png' 
const G4 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837373/Abhisekhkushari_bhaiya_bq1sb6.jpg'
const G5 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837376/Akash_bhaiya_ussoen.jpg'

const GuidingPillars = () => {
  return (
    <div className="bg-neutral-900 md:py-0 py-6">
      <div className="h-auto w-full flex flex-wrap items-center text-center p-5  md:pt-16">
        <div className="w-full h-auto flex flex-wrap flex-col items-center">
          <div className="flex">
            <p className="font-bold md:text-4xl text-2xl text-center sm:p-5 py-2  font-mono mb-1" style={{ color: '#e1e5e8' }}>OUR GUIDING</p>
            <p className="font-bold md:text-4xl text-2xl text-center sm:py-5 p-2 font-mono mb-1" style={{ color: '#19ecd7' }}>PILLARS</p>
          </div>
          <div className="md:w-36 w-32 h-2  mb-4 border-b-4 border-slate-100 rounded-full"></div>
        </div>
      </div>
      <div className="w-full flex flex-wrap  justify-center xl:p-16 md:p-10 ">
        <div className="w-auto md:p-2 p-1.5 md:h-72 h-52  flex flex-col  items-center md:items-center">
          <img className="p-2 rounded-full w-32 h-32" src={G1} alt=" student testimonial" />
          <p className="text-[15px] md:text-base font-bold p-1 text-slate-300">Dr. Shyam Sundar Behura</p>
          <p className="text-[13px] md:text-sm font-bold text-yellow-400">Additional Registrar</p>
        </div>
        {/* <div className="w-auto p-2 h-72 flex flex-col items-center">
          <img className="p-2 rounded-full w-40 h-40" src={G2} alt=" student testimonial" />
          <p className="text-base p-1 font-bold text-slate-300">Mrutunjaya Panda</p>
          <p className="text-sm font-bold text-yellow-400">Faculty Co-ordinator</p>
        </div> */}
        <div className="w-auto md:p-2 p-1.5 md:h-72 h-52  flex flex-col  items-center md:items-center">
          <img className="p-2 rounded-full w-32 h-32" src={G3} alt=" student testimonial" />
          <p className="text-[15px] md:text-base p-1 font-bold text-slate-300">Dr. Shubhasri Kundu</p>
          <p className="text-[13px] md:text-sm font-bold text-yellow-400">Faculty Co-ordinator</p>
        </div>
        <div className="w-auto md:p-2 p-1.5 md:h-72 h-52  flex flex-col  items-center md:items-center">
          <img className="p-2 rounded-full w-32 h-32" src={G4} alt=" student testimonial" />
          <p className="text-[15px] md:text-base p-1 font-bold text-slate-300">Abhishek Kushary</p>
          <p className="text-[13px] md:text-sm font-bold text-yellow-400">Founder</p>
        </div>
        <div className="w-auto md:p-2 p-1.5 md:h-72 h-52  flex flex-col  items-center md:items-center">
          <img className="p-2 rounded-full w-32 h-32" src={G5} alt=" student testimonial" />
          <p className="text-[15px] md:text-base p-1 font-bold text-slate-300">Akash Roy Chowdhury</p>
          <p className="text-[13px] md:text-sm font-bold text-yellow-400">Founder</p>
        </div>
      </div>
    </div>
  );
};

export default GuidingPillars;
