import Soumyadip from './Soumyadip_nontech.png';
import Pritika from './Pritika_nontech.png'
import Harsh from './Harsh_nontech.png'
import Avinab from './avinabh_nontech.png'
import dummy from './dummy-nontech.png'
import fdummy from './dummy_nontech_f.png'
import React, { useState } from 'react';


const NonTechMembers = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const members2 = [
        {
            name: 'Harsh Vardhan Yadav,',
            id: '2206093',
            imageUrl: Harsh ,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Pritika Dey',
            id: '22052489',
            imageUrl: Pritika,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Abhinav Audukoori',
            id: '2205870',
            imageUrl: Avinab,
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
            name: 'Sweta Kumari',
            id: '2206143',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },   {
            name: 'Keshav Kumar Singh',
            id: '22051521',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Akshat Srivastava',
            id: '2105944',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
    
        {
            name: 'Mohit Kumar Das',
            id: '2104029',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Rahul Sinha',
            id: '21052689',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Md. Arifuz Zaman',
            id: '2104802',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Srijna',
            id: '2004336',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Sarvagya',
            id: '21051166',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Mehuli Saha',
            id: '2005810',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Gurpreet Singh',
            id: '2007016',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Kanti Kishore Choudhury',
            id: '2107011',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Sanskar Swaroop Sahoo',
            id: '2107016',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },     {
            name: 'Deepro Bhattacharyya',
            id: '23051340',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Sujal Krishna',
            id: '2330412',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Rudrani Dash',
            id: '2306132',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Abhishek Karmakar',
            id: '2330281',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Sumeet Biswal',
            id: '23051145',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Srija Adhikari',
            id: '2204067',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Naman Sharma',
            id: '23052737',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        }, {
            name: 'Abhinav Bhimrao Walde',
            id: '23052533',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Shreya Kumari',
            id: '22052594',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Amrit Suthar',
            id: '23052224',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Atharv Singh',
            id: '22054426',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Saumya Shukla',
            id: '2305156',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Abhinandan ',
            id: '22053048',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
    ];

    const displayedMembers = showAll ? members2 : members2.slice(0, 16);

    return (
        <div    >
           
           <div className='flex flex-wrap justify-center my-10'>
           {displayedMembers.map((members2, index) => (
                <div className="flex flex-col bg-s member-morph group items-center h-auto text-center w-1/7 m-5" key={index}>
                    <div>
                        <img className="w-60 rounded-t-xl" src={members2.imageUrl} alt={members2.name} />
                    </div>
                    <div className="px-4 pt-4 pb-2 text-white font-semibold">
                        <h1 className="font-bold p-1">{members2.name}</h1>
                        <h2 className='font-semibold text-sm'>{members2.id}</h2>
                    </div>
                    <ul className="relative opacity group-hover:opacity-100 flex  p-1 pb-3 text-center justify-center">
                        <a href={members2.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-sky-300"></i></a>
                        <a href={members2.linkedinLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-sky-300"></i></a>
                        <a href={members2.instagramLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-sky-300"></i></a>
                    </ul>
                </div>
            ))}
            </div> 
            <div className='mx-auto w-full text-center mb-5'>
            {!showAll && (
                <button onClick={toggleShowAll} className="mx-auto hover:bg-white hover:text-black  text-white hover:border-white border-2 font-bold py-2 px-4 rounded-3xl">
                    Read More
                </button>
            )}
            </div>
        </div>
    );
};

export default NonTechMembers;
