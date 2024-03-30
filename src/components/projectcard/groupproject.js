

import React from 'react';

const projects = [
  {
    id: 1,
    name: 'ANTI-SLEEP SYSTEM WITH AUTO GENERATIVE BREAKING',
    imageUrl: 'https://www.mdpi.com/sustainability/sustainability-15-16850/article_deploy/html/images/sustainability-15-16850-g001.png',
    teamMembers: ['Anirban Sadhukhan 1903052'
      ,'Malayaj Kumar Anshu 2003050'
,      'Rewant Raj 2004125',
     ' Varshika 2004209',
    ],
    about: {
      title: 'About The Project',
      description: 'Our project entails creating a driver drowsiness detection system utilizing eye blinking patterns. It triggers an alarm and halts the car if prolonged lack of blinking is detected, enhancing road safety.' },
    application: {
      title: 'Application',
      features: ['Enhanced Efficiency',
        'Large-scale Implementation',
        'Domestic Use',
        ,'Sustainable Energy Solutions',        
      ],
    },
    aim: {
      title: 'Aim',
      description: 'Our aim is to create a driver drowsiness detection system using eye blinking detection and Arduino algorithms. It activates alarms and halts the car to prevent accidents caused by driver fatigue' ,   documentationUrl: 'https://docs.google.com/document/d/14qLvQTLNsZLi5Bi5XFTeviOD3doX2xFj/edit',
    },
    documentationUrl:'https://docs.google.com/document/d/1helMfzBZmYs_gnMHk2EbnmQjaJofg-GzOnl0N0qg4AQ/edit'

    },
  {
    id: 2,
    name: 'HOME AUTOMATION',
    imageUrl: 'https://www.verdict.co.uk/wp-content/uploads/2019/09/home-automation-interest.jpg',
    teamMembers: [
      'Aditya Nayak 1903094',
      'Abir Dey 2007003',
      'Shivansh Mishra 21051257',
    ],
    about: {
      title: 'About The Project',
      description: `"Smarties" presents "Smart Home System," showcasing the Gas Detection System for alerting residents of gas leaks and the Burglar Alarm System for protecting against intruders. Witness these smart security solutions in action!`,
    },
    application: {
      title: 'Application',
      features: [
        'Enhanced Safety',
        'Advanced Security',
        'Smart Intruder Detection',
        'Remote access',
      ],
    },
    aim: {
      title: 'Aim',
      description: 'Our project aims to detect gas leaks, display an alarm message, trigger an alarm, and automatically open the door as residents approach. It also detects intruders using a smart detection system.',
    },
    documentationUrl: 'https://docs.google.com/document/d/14qLvQTLNsZLi5Bi5XFTeviOD3doX2xFj/edit',
  },
  {
    id: 3,
    name: 'INTELLIGENT ROOM CONTROL',
    imageUrl: 'https://www.blueprintrf.com/wp-content/uploads/2023/08/hotel-automation-streamlines-hospitality-workflow-1240x836.png',
    teamMembers: [
      'Shashank Maurya', 'Priyadarsham Prasad', 'Gurpreet Singh',
    ],
    about: {
      title: 'About The Project',
description:'Experience the future of room control with our Motion and Light Based Operating System. Our innovative technology offers convenience and efficiency, transforming your living space into a smart environment'    },
    application: {
      title: 'Application',
      features: ['Automated Lighting'
        ,'Smart Security', 'Energy Efficiency',
        'Convenience Features',
      ],
    },
    aim: {
      title: 'Aim',
      description: 'Our aim is to create a seamless and efficient room operating system that utilizes motion and light sensors to automate tasks, enhancing comfort, convenience, and energy efficiency in everyday living environments.',
    },
    documentationUrl: 'https://docs.google.com/presentation/d/1QNOrKj9lsDL1TwKg3olC1BSAOq5Jdwt3/edit#slide=id.p1',
  },
  {
    id: 4,
    name: 'LIGHT TRACKING SOLAR PANEL',
    imageUrl: 'https://circuitdigest.com/sites/default/files/projectimage_mic/Arduino-based-Sun-Tracking-Solar-Panel.jpg',
    teamMembers: [
      'Rajkisor', 'Yashaswi', 'Saiyam', 'Suraj',
    ],
    about: {
      title: 'About The Project',
description:'An Arduino solar tracker was designed and constructed in the current work. LDR light sensors were used to sense the intensity of the solar light occurrence on the photo-voltaic cells panel'    },
    application: {
      title: 'Application',
      features: ['Enhanced Efficiency'
        ,'Large-scale Implementation',
        ' Domestic Use',
        'Sustainable Energy Solutions',   
        
      ],
    },
    aim: {
      title: 'Aim',
      description: 'To enhance efficiency, implement sun tracking on large PV panels for domestic and large-scale use, improving the solar energy harnessing and promoting sustainable energy solutions.'
  },
  documentationUrl:'https://docs.google.com/presentation/d/1qGL3T7XtBZKVSZ282H2KP_e9p9rhDpje/edit#slide=id.p1'

    },

  {
    id: 5,
    name: "Auto Fire & Gas Detection: Vent Trigger & Alerts"    ,
    imageUrl: 'https://pub.mdpi-res.com/energies/energies-15-03066/article_deploy/html/images/energies-15-03066-g002.png?1650779700',
    teamMembers: [
      'Aritra Ganguly  1904015 ',
      ' Roshan kumar sah 20051976',
      'Debismita Dey 21052831',
          ],
    about: {
      title: 'About The Project',
description:'It involves designing an automatic fire and gas leak detection system using Arduino microcontroller and various safety components. It focuses on ensuring safety through timely alerts and prevention of property damage.'    },
    application: {
      title: 'Application',
      features: ['Automatic Fire Detection',
        'Gas Leak Detection'
   ,'Ventilation Triggering',
       ' Smart Alerting Techniques',   
        
      ],
    },
    aim: {
      title: 'Aim',
      description: 'This project aims to create an automatic fire and gas leak detection system using Arduino microcontroller and safety devices. It prioritizes safety through smart alerting techniques, minimizing property damage.',
    },
    documentationUrl:'https://docs.google.com/document/d/1fNWm8r3QLtm431Wpf9FpHQ1RtqXPkdsVHaKm0uNUHuo/edit'

    },
    
  {
    id: 6,
    name: "Automatic Attendance System"    ,
    imageUrl: 'https://www.lystloc.com/blog/wp-content/uploads/2022/11/ezgif.com-gif-maker-6.webp',
    teamMembers: [
      'Bishwayan Ghosh','Rajnish','Rohan Volety','Srijna',
          ],
    about: {
      title: 'About The Project',
description:'This project implements an Automatic Attendance System using Python, OpenCV, and face recognition. It records attendance by recognizing individuals within 4 feet of a camera.'    },
    application: {
      title: 'Application',
      features: ['Automatic Attendance Recording', 'Facial Recognition Technology','Efficient and Accurate System'
      ,'Simplified Attendance Management',   
        
      ],
    },
    aim: {
      title: 'Aim',
      description: 'The aim is to create an efficient Automatic Attendance System using Python and OpenCV, enabling accurate recording of attendance through facial recognition technology.',
    },
    documentationUrl:'https://drive.google.com/file/d/1WFp3AG4cNBXGiQzCWtGIP6XanSuvmLsS/view?usp=sharing'

    },
];

const Project = ({ project }) => (
  <section key={project.id} className="bg-transparent group-blur rounded-3xl m-2 shadow-lg xl:p-4 lg:mb-8 lg:p-2  border-2 my-6 lg:my-0 hover:border-[#632aa4] border-[#eadbf0]">
    <div className="container ">
      <div className="lg:flex py-5 xl:px-5 xl:py-10 lg:py-8 lg:px-5 ">
        
        <div className="xl:w-1/3 lg:w-84 lg:mr-8  w-[80%] md:w-96  xl:mx-10 mx-auto lg:my-auto lg:mx-5  xl:mr-20   ">
          <div className="flex flex-col h-auto w-full mb-3 mt-3 border-2 border-[#632aa4] rounded-2xl">
            <img
              alt="..."
              src={project.imageUrl}
              className="w-full h-56 align-middle rounded-t-xl"
            />
            <div className="lg:p-6 p-5 rounded-b-lg pb-8 bg-[#632aa4]">
              <h4 className="text-xl font-bold text-white">{project.name}</h4>
              <ul className="font-light mt-2 text-white flex-col">
                {project.teamMembers.map((member, index) => (
                  <li key={index}>
                    <p className="font-semibold text-yellow-300">{member}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="xl:w-2/3   ">
          <div className="md:flex justify-center md:p-3 p-5 lg:p-0">

            <div className="lg:w-1/2  lg:mr-1  md:w-[300px] md:mx-5   xl:mx-0  ">
              <div className="flex flex-col lg:w-60 lg:h-[300px] xl:h-auto  xl:w-72  mt-2 bg-[#dabaffb4] mb-4 p-1 rounded-3xl shadow-sm">
                <div className="px-4 py-3 flex-auto ">
                  <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full  bg-black text-white">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <h6 className=" mb-1 text-xl font-semibold">{project.about.title}</h6>
                  <p className="mb-4 text-blueGray-500 text-justify text-sm">{project.about.description}</p>
                </div>
              </div>
              <div className="xl:w-72 flex lg:w-60 lg:h-56 xl:h-auto flex-col xl:mt-2 bg-[#dabaffb4] xl:p-1  rounded-3xl shadow-sm">
                <div className="px-4 py-3 flex-auto">
                  <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-black text-white">
                    <i className="fas fa-drafting-compass"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">{project.application.title}</h6>
                  <ul className="mb-2 text-sm text-blueGray-500 list-[square] pl-6">
                    {project.application.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 lg:mx-1  md:w-[300px] md:mx-5  xl:mx-0    ">
              <div className="xl:w-72 flex lg:w-60 md:h-[260px]  lg:h-[300px] xl:h-auto  flex-col mt-2 mb-4 bg-[#dabaffb4] p-1 rounded-3xl  shadow-sm">
                <div className="px-4 py-3 flex-auto ">
                  <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full  bg-black text-white">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">{project.aim.title}</h6>
                  <p className="mb-4 text-sm text-justify text-blueGray-500">{project.aim.description}</p>
                </div>
              </div>
              <div className="xl:w-72 lg:h-56 xl:h-52  md:h-[202px]  flex lg:w-60 flex-col mt-2 bg-[#dabaffb4] p-1 rounded-3xl shadow-sm">
                <a target="_blank" rel="noopener noreferrer" href={project.documentationUrl}>
                  <div className="px-4 py-3 flex-auto">
                    <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-black text-white">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                    <p className="mb-2 text-sm text-justify text-blueGray-500">To now more about it Please refer to the documentation for detailed instructions and better understanding.</p>
                  </div>
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
);

const Groupproject = () => (
  <div class="flex-col grouppro-bg  xl:px-24 lg:px-10 px-5  py-6">
    {projects.map((project) => (
      <Project key={project.id} project={project} />
    ))}
  </div>
);

export default Groupproject;
