import Commits from "@/components/Commits";
import React from "react";

const index = () => {
  return (
    <div className="px-10 py-2">
      <p className="text-black text-2xl font-semibold">Commits</p>
      <div className="mt-4">
        <Commits />
      </div>
    </div>
  );
};

export default index;
