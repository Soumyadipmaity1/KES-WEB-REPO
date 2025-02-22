import React from "react";
import EventCard from "../../components/eventcard/eventcard";
import NavbarStuBlogs from "../../components/navbar2/navbarStublogs";


const events = [
  {
    title: "Kineti Droid",
    school: "School of Electrical Engineering",
    date: "14-16 Feb",
    location: "Campus 3, Day 2",
    prize: "\u20B9 30000",
    category: "Group",
    imageSrc: "https://res.cloudinary.com/da3u4ukxz/image/upload/v1739474731/kinetidroid_hw2lml.png",
    contact: "Contact: Arja Behera +91 8605082065",
    path: "https://kiitfest.org/dashboard/events?event=f04ca042-02de-4b0f-97ce-2795f5221f0d",
  },
  {
    title: "Kurious Quest",
    school: "School of Electrical Engineering",
    date: "15 Feb",
    location: "Campus 3",
    prize: "\u20B9 16000",
    category: "Group",
    imageSrc: "https://res.cloudinary.com/da3u4ukxz/image/upload/v1739474731/Kurious_Quest_yvqd39.png",
    contact: "Contact: Ravi Sharma +91 9988776655",
    path: "https://kiitfest.org/dashboard/events?event=f6271693-10bf-4289-9e8c-23966c4a41db",
  },
  {
    title: "Konnex",
    school: "School of Electrical Engineering",
    date: "15 Feb",
    location: "Campus 3",
    prize: "\u20B9 16000",
    category: "Group",
    imageSrc: "https://res.cloudinary.com/da3u4ukxz/image/upload/v1739474749/Konnex_xv4mfg.png",
    contact: "Contact: Ravi Sharma +91 9988776655",
    path: "https://kiitfest.org/dashboard/events?event=a8a24f61-44b1-4dea-beed-c19294224e47",
  },
  {
    title: "Kallistic Flair",
    school: "School of Electrical Engineering",
    date: "14th, 15th Feb",
    location: "Campus 3",
    prize: "\u20B9 8000",
    category: "Group",
    imageSrc: "https://res.cloudinary.com/da3u4ukxz/image/upload/v1739474752/Kallisticflair_vqm4xo.png",
    contact: "Contact: Ravi Sharma +91 9988776655",
    path: "/events/kallisticflair",
  },
  {
    title: "Kurrent Flow",
    school: "School of Electrical Engineering",
    date: "14th, 15th Feb",
    location: "Campus 3",
    prize: "\u20B9 16000",
    category: "Group",
    imageSrc: "https://res.cloudinary.com/da3u4ukxz/image/upload/v1739474719/kurrent_flow_g3qkcw.png",
    contact: "Contact: Ravi Sharma +91 9988776655",
    path: "https://kiitfest.org/dashboard/events?event=2beb3bd2-4d61-42d3-9877-ed03394c688c",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-purple-900 text-white p-10">
      <NavbarStuBlogs/>
      <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
