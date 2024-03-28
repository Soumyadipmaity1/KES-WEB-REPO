
const AchieveImage = ({ image1Src, image2Src }) => {
    return (
        <div className="bg-yellow  flex lg:w-1/2  w-1/2  p-5">
            <img className="  mx-2 rounded-3xl" src={image1Src} alt="" />
            <img className="  mx-2 rounded-3xl" src={image2Src} alt="" />
        </div>
    );
};

export default AchieveImage;
