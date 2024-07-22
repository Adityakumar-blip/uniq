import React from "react";

const InputField = ({ type, label, name, onChange }) => {
  return (
    <div className="mb-4">
      <label
        for="base-input"
        class="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        id="base-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </div>
  );
};

export default InputField;
