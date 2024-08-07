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
          className={`bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
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
