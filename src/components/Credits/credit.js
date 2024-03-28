
import dev from './Dev.png'
import Shyam from './Shyam.png'
import aakarsh from './Aakarsh.png'
import Soumyadip from './Soumyadip.png';

const members2 = [
    {
        name: 'Aakarsh Kr Singh',
        id: '21052721',
        imageUrl: aakarsh,
        position: 'Tech Leads',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Soumyadip Maity',
        id: '22053029',
        imageUrl: Soumyadip,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Shyam Barua',
        id: '22051108',
        imageUrl: Shyam,
        position: 'Graphics Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Dev Dashora',
        id: '2106111',
        imageUrl: dev,
        position: 'Content Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },    
];
const CreditSection = () => (
    <div className='flex flex-wrap justify-center my-10 '>
    {members2.map((member, index) => (
        <div className="flex flex-col bg-s bg-black border-gray-800 border-4 rounded-xl group items-center h-auto text-center w-1/7 m-5" key={index}>
            <div>
                <img className="w-60 rounded-t-xl" src={member.imageUrl} alt={member.name} />
            </div>
            <div className="px-4 pt-4 pb-2 text-white font-semibold">
                <h1 className="font-bold p-1">{member.name}</h1>
                <h2 className='font-semibold text-sm'>{member.id}</h2>
            </div>
            <ul className="relative opacity group-hover:opacity-100 flex  p-1 pb-3 text-center justify-center">
                <a href={member.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2 px-1  text-base text-white  hover:text-yellow-300"></i></a>
                <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in mx-2 px-1  text-base text-white  hover:text-yellow-300"></i></a>
                <a href={member.instagramLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram mx-2 px-1  text-base text-white  hover:text-yellow-300"></i></a>
            </ul>
        </div>
    ))}
</div>

);

export default CreditSection;
