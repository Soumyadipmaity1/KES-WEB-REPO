const gpic1 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832569/gpic1_pomak5.jpg'
const gpic2 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832569/gpic2_eoov5s.png'
const gpic3 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832569/gpic3_drn6zf.png'
const gpic4 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832569/gpic4_a_dvru1n.png'
const gpic5 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832570/gpic5_a_snjncv.png'
const gpic6 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832574/gpic6_3_r5q1gb.png'
const gpic7 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832575/gpic7_ljbi0u.png'
const gpic8 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832576/gpic8_uidepb.png'
const gpic9 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832578/gpic9_bg1dhx.png'
const gpic10 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832580/gpic10_rkhagg.png'
const gpic11 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832581/gpic11_qwdpyd.png'
const gpic12 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715832583/gpic12_vfsk5w.png'



export default  function gallery(){


    return(
        <div class="-slate-100 xl:px-20 md:px-16 sm:px-10 px-5 py-10 pb-20">
        <p class="font-extrabold text-3xl flex justify-center text-slate-200 text-center pb-4">Photo Gallery</p>
        <div class="w-44 h-2 border-b-4 border-yellow-400 mx-auto  rounded-full sm:mb-12 mb-6 "> </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 xl:px-20 md:px-16 px-5  xl:py-16 sm:py-10 py-5 bg-[#000000] rounded-t-3xl ">
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic1} alt="farewell pic" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg"  src={gpic4} alt="" />
            </div>
            <div>
              <img class="h-auto pb-3 rounded-b-lg max-w-full rounded-lg" src={gpic5} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic2} alt=""  />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg"  src={gpic6} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-t-lg" src={gpic8} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic3} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic7} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-t-lg" src={gpic9} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic10} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={gpic11} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-t-lg " src={gpic12} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}