import React from "react";

const InputWithLable = () => {
  return (
    <div>
      <label className="form-control w-full text-black">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered bg-white input-primary w-full text-black"
        />
      </label>
    </div>
  );
};

export default InputWithLable;
