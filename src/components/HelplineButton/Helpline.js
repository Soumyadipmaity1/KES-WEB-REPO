
import { Link } from 'react-router-dom';

export default function HelplineButton(){
    const groupLink = 'https://chat.whatsapp.com/BDq3rFW48nb7dy2RJQNztc';
    return(
        <div class="fixed bottom-16  right-1 -rotate-90">
    
<Link to={groupLink} target="_blank">
<button class="bg-white hover:bg-black text-black hover:text-white  font-bold p-2 px-5 rounded-md shadow-md">
   AssistRiot
    </button>
</Link>
  </div>

    );
}
