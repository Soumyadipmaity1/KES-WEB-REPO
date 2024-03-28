import React, { useState } from "react";
import Coordinator from "../members/coordinators/Coordinators";
import AsstCo from "../members/AssCoordinator/AsstCo";
import Lead from "../Leads/Leads";
import TechMembers from "../TechMembers/TechMembers";
import NonTechMembers from "../NonTechMembers/NontechMember";
function TeamSwitcher() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
<div className=" xl:px-28 md:px-10 px-2  pb-5 p-2 ">
  <nav className="sm:flex  hidden justify-start lg:py-5 py-3 container ">
    <div className="xl:mr-4 lg:mr-3 mr-2  lg:font-bold">
      <button
        className={`btn btn-danger p-1 lg:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 1 ? "text-black bg-white font-semibold" : "text-white" } `}
        onClick={() => handleTabClick(1)}
      >
        Coordinators
      </button>
    </div>{" "}
    <div className="xl:mx-4 lg:mx-3 mx-2 lg:font-bold">
      <button
        className={`btn btn-danger p-1 lg:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 2 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(2)}
      >
        Asst. Coordinators
      </button>
    </div>{" "}
    <div className="xl:mx-4 lg:mx-3 mx-2 lg:font-bold">
      <button
        className={`btn btn-danger p-1 lg:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 3 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(3)}
      >
        Leads
      </button>
    </div>{" "}
    <div className="xl:mx-4 lg:mx-3 mx-2 lg:font-bold">
      <button
        className={`btn btn-danger p-1 lg:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 4 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(4)}
      >
        Tech Team
      </button>
    </div>{" "}
    <div className="xl:mx-4 lg:mx-3 mx-2 lg:font-bold">
      <button
        className={`btn btn-danger p-1 lg:px-5 px-3 team-switch-border border-2 border-white rounded-3xl ${activeTab === 5 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(5)}
      >
        Non-Tech Team
      </button>
    </div>{" "}
  </nav>
  <nav className="flex-col xl:text-base text-sm justify-center  sm:hidden  py-5 container ">
    
   <div className="flex justify-center">
   <div className="xl:mr-4 lg:mr-3 mr-2 ">
      <button
        className={` p-1 md:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 1 ? "text-black bg-white font-semibold" : "text-white" } `}
        onClick={() => handleTabClick(1)}
      >
        Coordinators
      </button>
    </div>{" "}
    <div className="xl:mx-4 lg:mx-3 mx-2">
      <button
        className={` p-1 md:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 2 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(2)}
      >
        Asst. Coordinators
      </button>
    </div>{" "}
    <div className="xl:mx-4 lg:mx-3 mx-2">
      <button
        className={` p-1 lg:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 3 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(3)}
      >
        Leads
      </button>
    </div>{" "}
   </div>
   <div className="flex pt-3 justify-center">
    <div className="xl:mx-4 lg:mx-3 mx-2">
      <button
        className={` p-1 lg:px-5 px-3  team-switch-border border-2 border-white rounded-3xl ${activeTab === 4 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(4)}
      >
        Tech Team
      </button>
    </div>{" "}
    <div className="xl:mx-4 lg:mx-3 mx-2">
      <button
        className={` p-1 lg:px-5 px-3 team-switch-border border-2 border-white rounded-3xl ${activeTab === 5 ? "text-black bg-white font-semibold" : "text-white"} `}
        onClick={() => handleTabClick(5)}
      >
        Non-Tech Team
      </button>
    </div>{" "}
    </div>
  </nav>

  <div className="tabcontent bg-light" style={{ display: activeTab === 1 ? "block" : "none" }}>
    <Coordinator />
  </div>
  <div className="tabcontent bg-light" style={{ display: activeTab === 2 ? "block" : "none" }}>
    <AsstCo />
  </div>
  <div className="tabcontent bg-light" style={{ display: activeTab === 3 ? "block" : "none" }}>
    <Lead/>
  </div>
  <div className="" style={{ display: activeTab === 4 ? "block" : "none" }}>
    <TechMembers />
  </div>
  <div className="tabcontent bg-light" style={{ display: activeTab === 5 ? "block" : "none" }}>
    <NonTechMembers />
  </div>
</div>
  );
}

export default TeamSwitcher;
