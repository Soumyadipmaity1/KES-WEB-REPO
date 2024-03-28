import React, { useState } from "react";
import IndProjects from "../../components/projectcard/indprojects";
import Groupproject from "../projectcard/groupproject";


function TabSwitchingComponent() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className=" bg-purple-700 ">
      <nav className="flex justify-center  sm:p-10 p-4 font-bold container ">
        <div className="mr-4 font-bold">
          <button
            className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border  sm:text-xl  font-bold border-2 border-white rounded-3xl ${
              activeTab === 1
                ? "text-black bg-white font-bold"
                : "text-white"
            } `}
            onClick={() => handleTabClick(1)}
          >
            Individual Projects
          </button>
        </div>{" "}
        <div className="mx-4">
          <button
            className={`btn btn-danger p-1 sm:px-5 px-4  team-switch-border sm:text-xl  font-bold  border-2 border-white rounded-3xl ${
              activeTab === 2
                ? "text-black bg-white font-bold"
                : "text-white"
            } `}
            onClick={() => handleTabClick(2)}
          >
            Group Projects
          </button>
        </div>{" "}
      </nav>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 1 ? "block" : "none" }}
      >
        <IndProjects />
      </div>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 2 ? "block" : "none" }}
      >
        <Groupproject />
      </div>
    </div>
  );
}

export default TabSwitchingComponent;
