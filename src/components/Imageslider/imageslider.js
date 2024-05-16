import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const image1 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715834851/slide_src1a_nlcxx4.png'
const image2 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835242/slide_src2_oafykk.jpg'
const image3 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835243/slide_src3a_mkgyfz.jpg'
const image4 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715834864/slide_src4aa_bw9btb.png'

const image5 = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715834858/slide_src5aa_fcdxgo.png'


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