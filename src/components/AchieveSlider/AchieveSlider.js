import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const image1 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715833937/GameFest_kysc11.jpg'
const image2 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715833722/GameFest2_asrylc.png'
const AchieveSlider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (

<div className=' text-white     '>
   
    <div className='  '>
          
    <div className=" bg-slate-200  xl:w-[500px] lg:w-[440px] md:w-[400px] w-[300px]  p-5 mx-auto my-auto xl:mt-10 lg:mt-16 " >
      <Slider {...settings}>
        <div className="">

          <img src={image1} alt="Slide 1"  />
        </div>
        <div>

          <img src={image2} alt="Slide 2"  />
        </div>
        
      </Slider>
    </div>
    </div>
    </div>
  );
};

export default AchieveSlider1;