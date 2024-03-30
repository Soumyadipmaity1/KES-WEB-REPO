import React from 'react';

const NoticeCard = ({ title, description, date, link, bgColor, titleColor, textColor, buttonColor }) => {
  const backgroundStyle = { backgroundColor: bgColor };
  const titleStyle = { color: titleColor };
  const textStyle = { color: textColor };
  const buttonStyle = { backgroundColor: buttonColor };

  return (
    <div className="p-4 rounded-lg shadow-md" style={backgroundStyle}>
      <h2 className="xl:text-xl font-bold pb-2" style={titleStyle}>{title}</h2>
      <p className="text-sm font-semibold" style={textStyle}>{description}</p>
      {/* <div className="flex-grow"></div>  */}
      <div className="flex justify-between pt-4">
        <p className="text-xs text-gray-500 pt-1 font-semibold">{date}</p>
        <div className="pr-5 pb-2 ">
          <button className="font-semibold text-xs py-1  text-white hover:text-black   hover:bg-black  px-2 rounded" style={buttonStyle}>
            <a href={link} target="_blank" rel="noopener noreferrer">Check Out</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
