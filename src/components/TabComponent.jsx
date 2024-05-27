import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className=" text-black mx-auto">
      <div className="flex text-sm">
        <button
          onClick={() => handleTabClick(1)}
          className={`px-4 py-2 rounded-l ${
            activeTab === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Tab 1
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 ${
            activeTab === 2
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Tab 2
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`px-4 py-2 rounded-r ${
            activeTab === 3
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Tab 3
        </button>
      </div>
      <div className="p-4 bg-white shadow-md rounded-md mt-4">
        {activeTab === 1 && (
          <div>
            <h2 className="text-lg font-semibold">Tab 1 Content</h2>
            <p>This is the content of Tab 1.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2 className="text-lg font-semibold">Tab 2 Content</h2>
            <p>This is the content of Tab 2.</p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2 className="text-lg font-semibold">Tab 3 Content</h2>
            <p>This is the content of Tab 3.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
