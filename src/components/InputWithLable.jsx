import React from "react";

const InputWithLable = ({ name, value, onChange, errors, touched }) => {
  return (
    <div>
      <label className="form-control w-full text-black">
        <input
          type="text"
          placeholder="Type here"
          name={name}
          value={value}
          onChange={onChange}
          className={`input input-bordered bg-white input-primary w-full text-black ${
            errors && touched ? "border-red-500" : ""
          }`}
        />
      </label>
      {errors && touched && (
        <div className="text-red-500 text-sm">{errors}</div>
      )}
    </div>
  );
};

export default InputWithLable;
