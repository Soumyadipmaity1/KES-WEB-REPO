const aman = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835032/aman_xf6kfc.png'

const junaid = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835038/junaid_advwld.png'
const Leads = [
    {
        name: 'Shivansh Mishra',
        id: '21051257',
        position: 'Tech Leads',
        imageUrl: aman,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Kumar Aman',
        id: '2205043',
        position: 'Tech Leads',
        imageUrl: aman,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Junaid Ul Islam',
        id: '2205472',
        imageUrl: junaid,
        position: 'Tech Leads',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sweta Kumari',
        id: '2206143',
        imageUrl: '',
        position: 'Graphics Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Arthita ',
        id: '2106111',
        imageUrl: '',
        position: 'Content Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Manugeeth',
        id: '21052831',
        imageUrl: '',
        position: 'Social Media Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Mritunjay Mahato',
        id: '22053789',
        imageUrl: '',
        position: 'R&D Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sweta Kumari',
        id: '2206143',
        imageUrl: '',
        position: 'AI/ML Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sweta Kumari',
        id: '2206143',
        imageUrl: '',
        position: 'AI/ML Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sweta Kumari',
        id: '2206143',
        imageUrl: '',
        position: 'Web DEV Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sweta Kumari',
        id: '2206143',
        imageUrl: '',
        position: 'Web DEV Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Sweta Kumari',
        id: '2206143',
        imageUrl: '',
        position: 'APP DEV Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
];

const Lead = () => (
    <div className='flex flex-wrap justify-center my-10'>
        {Leads.map((member, index) => (
            <div className="flex flex-col bg-s member-morph group items-center h-auto text-center w-1/7 m-5" key={index}>
                <div>
                    <img className="w-60 rounded-t-xl" src={member.imageUrl} alt={member.name} />
                </div>
                <div className="px-4 pt-4 pb-2 text-white font-semibold">
                    <h1 className="font-bold p-1">{member.name}</h1>
                    <h2 className='font-semibold text-sm'>{member.id}</h2>
                    {member.position && <h2 className='font-semibold text-md'>{member.position}</h2>}
                </div>
                <ul className="relative opacity group-hover:opacity-100 flex  p-1 pb-3 text-center justify-center">
                    <a href={member.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-purple-300"></i></a>
                    <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-purple-300"></i></a>
                    <a href={member.instagramLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-purple-300"></i></a>
                </ul>
            </div>
        ))}
    </div>
);

export default Lead;
