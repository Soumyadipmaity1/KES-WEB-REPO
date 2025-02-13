import { motion } from "framer-motion"; 
import PropTypes from 'prop-types'; 


const EventCard = ({ title, school, date, location, prize, category, imageSrc, contact, path }) => { 


  return (
    <a href={path} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="relative max-w-sm bg-white shadow-lg rounded-xl p-4 m-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        whileHover={{ y: -5 }}
      >
       
        <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
          <img
            src={imageSrc}
            alt={`${title} Image`}
            className="w-full h-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-500"
          />
        </div>

    
        <div className="p-4">
          <h2 className="text-2xl font-bold text-purple-900">{title}</h2>
          <p className="text-sm text-gray-600">{school}</p>
          <p className="text-sm mt-2 text-purple-600">{date}</p>
          <p className="text-sm text-gray-700">{location}</p>
          <p className="mt-2 font-semibold text-green-600">{prize}</p>
          <p className="text-sm text-blue-600">{category}</p>
          <p className="text-sm mt-2 font-semibold text-gray-500">{contact}</p>
        </div>
      </motion.div>
    </a>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  prize: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default EventCard;
