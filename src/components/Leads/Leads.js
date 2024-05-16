const Akarsh = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835031/Akarsh_techLead_bydqvs.png'
const aman = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835032/aman_xf6kfc.png'
const Abhishek = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835030/Abhishek_vqbbc7.png'
const shyam = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835040/Shayam_Lead_e26gam.png'
const dev = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835037/dev_kpv9mi.png'
const deepika = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835035/deepika_o3ddyw.png'
const debismita = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835033/debismita_hc4nah.png'
const junaid = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835038/junaid_advwld.png'
const Leads = [
    {
        name: 'Aakarsh Kr Singh',
        id: '21052721',
        imageUrl: Akarsh,
        position: 'Tech Leads',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Abhishek Ghosh',
        id: '2107033',
        imageUrl: Abhishek ,
    position: 'Tech Leads',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example',
    },
    {
        name: 'Kumar Aman',
        id: '2205043',
        position: 'Asst. Tech Leads',
        imageUrl: aman,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Junaid Ul Islam',
        id: '2205472',
        imageUrl: junaid,
        position: 'Asst. Tech Leads',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Shyam Barua',
        id: '22051108',
        imageUrl: shyam,
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
    {
        name: 'Debismita Dey',
        id: '21052831',
        imageUrl: debismita,
        position: 'Social Media Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Deepika Kumari',
        id: '2004016',
        imageUrl: deepika,
        position: 'Non-Tech Leads',
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
