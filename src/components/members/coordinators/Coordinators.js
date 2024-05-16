const suravi = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835141/suravi_mahm6r.svg'
const shilpi = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835189/shilpi_didi_fti132.png'
const Coordinator = () => {


    return (
        <div className='md:flex md:py-8 py-4'>
      <img className='lg:w-80 md:w-72 lg:mx-6 md:mx-4 w-64  mx-auto my-4  mb-6 rounded-xl' src={shilpi} alt="" />
      <img className='lg:w-80 lg:h-[480px] md:w-72 lg:mx-6 md:mx-4 w-64 mx-auto my-4  rounded-xl' src={suravi} alt="" />

        </div>
    );
};

export default Coordinator;
