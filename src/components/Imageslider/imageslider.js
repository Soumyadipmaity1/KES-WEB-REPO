import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './slide_src1a.png'
import image2 from './slide_src2.png'
import image3 from './slide_src3aa.png'
import image4 from './slide_src4aa.png'

import image5 from './slide_src5aa.png'


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (

<div className=' text-white   hidden md:block '>
   
    <div className=' p-5 px-8  '>
          
    <div className=" bg-slate-400 p-8 px-9 " >
      <Slider {...settings}>
        <div className="">

          <img src={image1} alt="Slide 1" style={{ width: '100%' }} />
        </div>
        <div>

          <img src={image2} alt="Slide 2" style={{ width: '100%' }} />
        </div>
        <div>

          <img src={image3} alt="Slide 3" style={{ width: '100%' }} />
        </div>
        <div>

          <img src={image4} alt="Slide 4" style={{ width: '100%' }} />
        </div>
        <div>

          <img src={image5} alt="Slide 5" style={{ width: '100%' }} />
        </div>
        
      </Slider>
    </div>
    </div>
    </div>
  );
};

export default ImageSlider;