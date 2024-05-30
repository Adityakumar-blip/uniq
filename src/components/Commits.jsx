import React from "react";

const Commits = () => {
  return (
    <div className="text-black shadow-lg p-4 bg-[#f7f7ff] rounded-sm">
      <div className="flex gap-2 w-full">
        <div className="flex items-center justify-center">
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Merged
          </span>
        </div>
        <div className="divider divider-horizontal divider-primary"></div>
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="font-semibold">
              dlabss-admin/Aditya <span>#01</span>
            </p>
            <div className="flex gap-4">
              <p className="text-primary">#ff906dc</p>
              <p>9 min ago</p>
            </div>
          </div>
          <div>
            <p className="text-gray text-sm mt-2">
              implemented screens for projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commits;
