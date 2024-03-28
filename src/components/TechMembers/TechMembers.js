import Sujal from './Sujal_tech.png'
import Tanvi from './Tanvi_Tech.png'
import Sparsh from './Sparsh_tech.png'
import Abhinash from './Abhinash_tech.png'
import Agniva from './Agniva_tech.png'
import Adrika from './Adrika_tech.png'
import Arka from './Arka_tech.png'
import Arijit from './Arijit_tech.png'
import Arnav  from './Arnav_tech.png'
import Arnuv from './Arnuv_Tech.png'
import Asish from './Ashish_tech.png'
import Bhumi from './Bhumi_tech.png'
import Aryan from './Aryan_Tech.png'
import Bikramaditya from './bikramaditya_tech.png'
import Ishan from './Ishan_Tech.png'
import Damini from './Damini_tech.png'
import kaushik from './Kaushik_tech.png'
import Mohit from './Mohit_tech.png'
import Piyus from './Piyus_tech.png'
import Perna from './Perna_tech.png'
import Prateek from './Prateek_tech.png'
import Rahul from './rahulRanjan_tech.png'
import Risav from './Rishav_tech.png'
import Rishit from './Rishit_tech.png'
import Samridhi from './Samridhi_tech.png'
import Ritesh from './Ritesh_tech.png'
import Saket from './Saket_tech.png'
import Saurav from './Saurav_tech.png'
import Shresth from './shresth_tech.png'
import sidhant from './sidhant_Tech.png'
import sidharth from './Sidharth_tech.png'
import vidit from './vidit_tech.png'
import Subhankar from './Subhankar_tech.png'
import  utsav from './utsav_tech.png'
import Sonkho from './Sonkhoshuvra_tech.png'
import ankit from './ankit_tech.png'
import shivam from './shivam_tech.png'

import fdummy from './dummy_tech_f.png'
import dummy from './Dummy_tech.png'
import React, { useState } from 'react';



const TechMembers = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    // Define the 'members' array directly within the component
    const members = [
        {
            name: 'Sujal Kumar',
            id: '220522054215',
            imageUrl: Sujal,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Tanvi Sahay',
            id: '22051117',
            imageUrl: Tanvi,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Sparsh Guha',
            id: '2205333',
            imageUrl: Sparsh,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Avinash Kumar',
                id: '2230243',
            imageUrl:Abhinash ,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Adrika Mondal',
            id: '2205872',
            imageUrl: Adrika,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Ankit Kumar',
            id: '22052619',
            imageUrl: ankit,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Agniva Maiti',
            id: '2205964',
            imageUrl: Agniva,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },   
         {
            name: 'Arijit Chowdhury',
            id: '2205618',
            imageUrl: Arijit,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Shivam Kumar',
            id: '22052760',
            imageUrl: shivam,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Arka Singha',
            id: '2230068',
            imageUrl: Arka,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Arnav Subudhi',
            id: '2105529',
            imageUrl: Arnav,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Arnuv Raina',
            id: '22052367',
            imageUrl: Arnuv,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Aryan Raj Chowdhury',
            id: '22052715',
            imageUrl: Aryan,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Bhumi Jaiswal',
            id: '22052454',
            imageUrl: Bhumi,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Ashish Choudhary',
            id: '22052716',
            imageUrl: Asish,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Bikramaditya Munshi',
            id: '2105538',
            imageUrl: Bikramaditya,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Ishaan Gupta',
            id: '22052122',
            imageUrl: Ishan,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Kaushik Verma',
            id: '22052732',
            imageUrl: kaushik,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        }, {
            name: 'Damini Kumari',
            id: '22052897',
            imageUrl: Damini,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Mohit Kumar Das',
            id: '2104029',
            imageUrl: Mohit,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Piyush Ranjan',
            id: '2104031',
            imageUrl: Piyus,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Prateek Singh',
            id: '22053331',
            imageUrl: Prateek,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Prerna Singh ',
            id: '2230330',
            imageUrl: Perna,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Rahul Ranjan',
            id: '2105478',
            imageUrl: Rahul,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Rishav Kumar',
            id: '2206205',
            imageUrl: Risav,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Rishit Anand',
            id: '2204047',
            imageUrl: Rishit,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Ritesh Pandey',
            id: '22052580',
            imageUrl: Ritesh,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Saket Singh',
            id: '2206209',
            imageUrl: Saket,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Samridhi Ananta',
            id: '2205321',
            imageUrl: Samridhi,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Saurav Sanket',
            id: '2203031',
            imageUrl: Saurav,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Shresth Kumar',
            id: '22051625',
            imageUrl: Shresth,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Sidhant Sangam',
            id: '2206216',
            imageUrl: sidhant,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Siddharth Sharma',
            id: '2230340',
            imageUrl: sidharth,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },   
        {
            name: 'Sonkhoshuvra Ghosh',
            id: '2104046',
            imageUrl: Sonkho,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Sparsh Guha',
            id: '2205333',
            imageUrl: Sparsh ,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Suvankar Dash',
            id: '21005759',
            imageUrl: Subhankar,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Kumar Utsav',
            id: '21051903',
            imageUrl: utsav,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Vidit Rajani Kant Taunk',
            id: '22052433',
            imageUrl: vidit,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Subhranu Mishra',
            id: '2107032',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Soumyajit Chanda',
            id: '2107022',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Rishit Anand',
            id: '2204047',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Soumyadip Adhikari',
            id: '2107021',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Rishita Badani',
            id: '2205834',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Vikrant',
            id: '21051866',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Mainak Maitra',
            id: '22053076',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Geetanshi Dewangan',
            id: '22051336',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Priyam Banerjee',
            id: '22060124',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Rohan Karn',
            id: '21053436',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Kirty Kiran Swain',
            id: '2004117',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '2004117@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Piyush Ranian',
            id: '2104031',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Aditi Sinha',
            id: '22051046',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Sushan Saha',
            id: '2204071',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Rohan Karn',
            id: '21053436',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
      {
            name: 'Agniva Sinha Ray',
            id: '2107003',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Ayush Jain',
            id: '',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Anu Raj',
            id: '2105265',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: ' Rohit Rai',
            id: '21051240',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Anant Upaadhyay',
            id: '21051903',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Raghav Tiwary',
            id: '',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Chandni Priya',
            id: '20051343',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Debarka',
            id: '',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Pallavi Ghosh',
            id: '2207011',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Yashshavi Thapliyal',
            id: '2228081',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
       
        {
            name: 'Debismrita Dey',
            id: '21052831',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Aditya Kumar',
            id: '2104003',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Utkarsh Nayak',
            id: '2007081',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Bibaswan Nandi',
            id: '21052901',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Shreya Sonakshi Rana',
            id: '2203019',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Vrishti Chaudhuri',
            id: '2207028',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },    
        {
            name: 'Rohan Volety',
            id: '2005630',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'L.Banshika',
            id: '2204043',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Abir Dey',
            id: '2007003',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Aditya Sinha',
            id: '2105519',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Malayaj Kumar Anshu',
            id: '2003050',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },
        {
            name: 'Swastika Dutta',
            id: '22051644',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        {
            name: 'Riya Aditya',
            id: '1929108',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            instagramLink: 'https://instagram.com/example'
        },    
        {
            name: 'Arthita Bhattacharya',
            id: '2204015',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Ruhani Bose',
            id: '2205496',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example',
            email: '21053436@kiit.ac.in',
            role: 'Tech role'
        },
        
        {
            name: 'Rahul Raj',
            id: '22053267',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Kaushik Kar',
            id: '21052989',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Srijita Maiti',
            id: '21052538',
            imageUrl: fdummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Soumik Saha',
            id: '2105672',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
        {
            name: 'Sumit Kumar',
            id: '2130180',
            imageUrl: dummy,
            githubLink: 'https://github.com/example',
            linkedinLink: 'https://linkedin.com/example'
        },
    {
        name: 'Annu Priya',
        id: '2003046',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example',
        instagramLink: 'https://instagram.com/example'
    
    },
     {
        name: 'Piyush Mishra',
        id: '2305063',
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
        name: 'Sambit Prusty',
        id: '23053351',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Prerona Dutta',
        id: '2330323',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Mohona Ghosh',
        id: '2328102',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Rakesh Mohanty',
        id: '2204046',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Saumil Agarwal',
        id: '23052263',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'SAHARSH',
        id: '2307044',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Janhvi Shukla',
        id: '2303017',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Ananwita Dash',
        id: '2330067',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
  
    {
        name: 'Shourya Basu',
        id: '2330400',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Shubham Sinha',
        id: '23051626',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Pratity Roy',
        id: '23051686',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Himanshu Singh',
        id: '2204029',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Harshil Mainra',
        id: '2306028',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Gyan Prakash',
        id: '2307076',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Mehul Shrivastava',
        id: '23051680',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Ravindra Singh Karwasra',
        id: '2304034',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Ayanjyoti Roy',
        id: '2307020',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Yashasvi Dhawan',
        id: '2204078',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Puja Ghosh',
        id: '22052138',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Bharti Kumari',
        id: '22052975',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Kanhaiya Kumar',
        id: '23053373',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Shivali Sharma',
        id: '23053706',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Sneha Das',
        id: '2305975',
        imageUrl: fdummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Monu Kumar',
        id: '2205048',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    },
    {
        name: 'Rehan Suman',
        id: '2306130',
        imageUrl: dummy,
        githubLink: 'https://github.com/example',
        linkedinLink: 'https://linkedin.com/example'
    }
    ];

    const displayedMembers = showAll ? members : members.slice(0, 16);

    return (
        <div    >
           
           <div className='flex flex-wrap justify-center my-10'>
           {displayedMembers.map((member, index) => (
                <div className="flex flex-col bg-s member-morph group items-center h-auto text-center w-1/7 m-5" key={index}>
                    <div>
                        <img className="w-60 rounded-t-xl" src={member.imageUrl} alt={member.name} />
                    </div>
                    <div className="px-4 pt-4 pb-2 text-white font-semibold">
                        <h1 className="font-bold p-1">{member.name}</h1>
                        <h2 className='font-semibold text-sm'>{member.id}</h2>
                    </div>
                    <ul className="relative opacity group-hover:opacity-100 flex  p-1 pb-3 text-center justify-center">
                        <a href={member.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-sky-300"></i></a>
                        <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-sky-300"></i></a>
                        <a href={member.instagramLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram mx-2 px-1 rounded-full text-base hover:text-black hover:bg-white text-sky-300"></i></a>
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

export default TechMembers;
