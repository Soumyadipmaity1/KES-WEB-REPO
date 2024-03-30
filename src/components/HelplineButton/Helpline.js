
import { Link } from 'react-router-dom';

export default function HelplineButton(){
    const groupLink = 'https://chat.whatsapp.com/BDq3rFW48nb7dy2RJQNztc';
    return(
        <div class="fixed z-50   bottom-28 md:right-1 -right-5 -rotate-90">
    
<Link to={groupLink} target="_blank">
<button class="hover:bg-white bg-red-600 text-white hover:text-black  font-bold p-2 px-5 rounded-md shadow-md">
   AssistRiot
    </button>
</Link>
  </div>

    );
}
