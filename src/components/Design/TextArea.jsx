import React from "react";

const TextArea = ({ label, name, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <textarea
        name={name}
        onChange={onChange}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:border-blue-500 "
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
