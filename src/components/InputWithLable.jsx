import React from "react";

const InputWithLable = ({ name, value, onChange, errors, touched, onBlur }) => {
  return (
    <div>
      <label className="form-control w-full text-black">
        <input
          type="text"
          placeholder="Type here"
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={`w-full px-3 py-2 bg-white text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 focus:ring-blue-500  block  p-2.5 ${
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
