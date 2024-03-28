// import React from 'react';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="container">
//       <div className="flex flex-wrap items-center">
//         <div className="w-auto md:w-5/24 lg:w-5/14 px-12 md:px-2 md:pl-8 md:mr-2 md:ml-4">
//           <div className="flex flex-col h-auto w-full mb-3 mt-3 border-2 border-[#632aa4] rounded-2xl">
//             <img
//               alt="..."
//               src={project.photo}
//               className="w-full h-56 align-middle rounded-t-xl"
//             />
//             <div className="p-6 rounded-b-lg pb-8 bg-[#632aa4]">
//               <h4 className="text-xl font-bold text-white">{project.title}</h4>
//               <ul className="text-md font-light mt-2 text-white flex-col">
//                 <li>
//                   <p className="font-semibold text-yellow-300">{project.author}</p>
//                 </li>
//                 <li>
//                   <p>{project.id}</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-6/12 px-2">
//           <div className="flex flex-wrap">
//             {project.sections.map((section, index) => (
//               <div key={index} className="w-full md:w-6/12 px-4 pl-10 pr-20">
//                 <div className="flex flex-col w-72 mt-2 bg-[#dabaff75] mb-4 p-1 rounded-3xl shadow-sm">
//                   <div className="px-4 py-3 flex-auto">
//                     <div className="text-blueGray-500 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-3 shadow-lg rounded-full bg-black text-white">
//                       <i className={section.icon}></i>
//                     </div>
//                     <h6 className="mb-1 text-xl font-semibold">{section.title}</h6>
//                     <ul className="mb-4 text-sm text-blueGray-500 list-disc pl-6">
//                       {section.description.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const projects = [
//   {
//     photo: './photos/rahul_project_pic.jpg',
//     title: 'Password Security System',
//     author: 'Rahul Raj',
//     id: '22053267',
//     sections: [
//       {
//         icon: 'fas fa-sitemap',
//         title: 'About The Project',
//         description: [
//           'The Arduino-based Smart Door Lock provides enhanced security and convenience through a keypad, LCD status display, and servo motor, allowing users to lock and unlock doors with a PIN code.'
//         ]
//       },
//       {
//         icon: 'fas fa-drafting-compass',
//         title: 'Application',
//         description: [
//           'Smart Home integration',
//           'Security management',
//           'Real time notifications',
//           'Remote access'
//         ]
//       },
//       {
//         icon: 'fas fa-newspaper',
//         title: 'Aim',
//         description: [
//           'To develop an Arduino-based door lock system, enhancing security and convenience by enabling PIN code access. It also serves as an educational tool for learning about Arduino, keypads, and servo motors.'
//         ]
//       }
//     ]
//   }
// ];

// const App = () => {
//   return (
//     <div>
//       {projects.map((project, index) => (
//         <ProjectCard key={index} project={project} />
//       ))}
//     </div>
//   );
// };

// export default App;
