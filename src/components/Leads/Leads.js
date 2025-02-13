const aman = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835032/aman_xf6kfc.png'
const junaid = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715835038/junaid_advwld.png'
const Leads = [
    {
        name: 'Shivansh Mishra',
        id: '21051257',
        position: 'Tech Leads',
        imageUrl: '/leads/SHIVANSH MISHRA.jpg',
        githubLink: 'https://github.com/SHIVANSH4263',
        linkedinLink: 'https://www.linkedin.com/in/shivansh-mishra-11146122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagramLink: 'https://www.instagram.com/shivanshmishra01082003?igsh=MWhhdmIzZzI5Y3ZpYQ=='
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
        imageUrl: 'leads/dummy_nontech_f.png',
        position: 'Graphics Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Arthita Bhattacharya',
        id: '2204015',
        imageUrl: '/leads/4015_ARTHITA BHATTACHARYA.jpg',
        position: 'Content Lead',
        githubLink: 'https://github.com/Arththam2512',
        linkedinLink: 'https://www.linkedin.com/in/arthita-bhattacharya-4a3787294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagramLink: 'https://www.instagram.com/rtheta_25?igsh=MW94eTZkeW4yang4Nw=='
    },
    {
        name: 'Manugeeth',
        id: '22054379',
        imageUrl: '/leads/dummy-nontech.png',
        position: 'Social Media Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Mritunjay Mahato',
        id: '22053789',
        imageUrl: '/leads/mritunjay.jpg',
        position: 'R&D Lead',
        githubLink: 'https://github.com/13mritu',
        linkedinLink: 'https://linkedin.com/Mritunjay Mahato ',
        instagramLink: 'https://instagram.com/Mritu_n_jay1929'
    },
    {
        name: 'Agniva Maiti',
        id: '2205964',
        imageUrl: '/leads/AGNIVA MAITI.JPG',
        position: 'APP DEV Lead',
        githubLink: 'https://github.com/AgnivaMaiti',
        linkedinLink: 'https://www.linkedin.com/in/agniva-maiti',
        instagramLink: 'https://www.instagram.com/normal_weirdo_boy'
    },
    {
        name: 'Shresth Kumar',
        id: '22051625',
        imageUrl: '/leads/shresth_tech.png',
        position: 'AI/ML Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Arnuv Raina',
        id: '22052367',
        imageUrl: '/leads/Arnuv_Tech.png',
        position: 'AI/ML Lead',
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    },
    {
        name: 'Monu Kumar',
        id: '2205048',
        imageUrl: '/leads/5048_Monu_Kumar.jpg',
        position: 'Web DEV Lead',
        githubLink: 'https://github.com/Monu4kumar',
        linkedinLink: 'https://www.linkedin.com/in/monu-kumar-0585a7260',
        instagramLink: 'https://www.instagram.com/monu.22.singh?igsh=MXBjNGdtamdqaWNjMg=='
    },
    {
        name: 'Soumyadip Maity ',
        id: '22053029',
        imageUrl: '',
        position: 'Web DEV Lead',
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
