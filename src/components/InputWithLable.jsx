import React from "react";

const InputWithLable = ({ name, value, onChange }) => {
  return (
    <div>
      <label className="form-control w-full text-black">
        <input
          type="text"
          placeholder="Type here"
          name={name}
          value={value}
          onChange={onChange}
          className="input input-bordered bg-white input-primary w-full text-black"
        />
      </label>
    </div>
  );
};

export default InputWithLable;
