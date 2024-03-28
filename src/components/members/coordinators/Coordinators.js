import suravi from './suravi.svg'
import shilpi from './shilpi_didi.png'
const Coordinator = () => {


    return (
        <div className='md:flex md:pl-0 pl-[54px] md:py-8 py-4'>
      <img className='lg:w-80 md:w-72 lg:mx-6 md:mx-4 w-64 m-2 mx-5 mb-7 rounded-xl' src={shilpi} alt="" />
      <img className='lg:w-80 lg:h-[480px] md:w-72 lg:mx-6 md:mx-4 w-64 m-2 mx-4 rounded-xl' src={suravi} alt="" />

        </div>
    );
};

export default Coordinator;
