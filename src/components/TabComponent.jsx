import ForumListing from "@/views/Profile/ForumListing";
import ProjectList from "@/views/Profile/ProjectListing";
import React, { useState } from "react";

const TabComponent = ({ userInfo }) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, title: "My Projects", content: "This is the content of Tab 1." },
    {
      id: 2,
      title: "My Discussions",
      content: "This is the content of Tab 2.",
    },
    { id: 3, title: "Settings", content: "This is the content of Tab 3." },
  ];

  return (
    <div className="mt-8">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 transition-colors duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4 w-full">
        {activeTab === 1 && <ProjectList userInfo={userInfo} />}
      </div>
      <div className="mt-4">{activeTab === 2 && <ForumListing />}</div>
      {/* <div className="mt-4">{activeTab === 3 && <ProjectList />}</div> */}
    </div>
  );
};

export default TabComponent;
