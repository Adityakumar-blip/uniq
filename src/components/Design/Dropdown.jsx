import { AddCommon } from "@/Store/Reducers/ProjectSlice";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: "3rem",
    display: "flex",
    borderColor: "gray",
    borderWidth: "1px",
    borderRadius: "0.375rem",
    padding: "0 0.5rem",
    backgroundColor: "#FFFFFF",
    // justifyContent: "center",
    // alignItems: "center",
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: 0,
    // textAlign: "center",
    width: "100%",
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    // textAlign: "center",
    width: "100%",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#FFFFFF",
    borderRadius: "0.375rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#BFDBFE",
    borderRadius: "0.375rem",
    padding: "0.25rem",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#1E40AF",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#1E40AF",
    "&:hover": {
      backgroundColor: "#93C5FD",
      color: "#1E3A8A",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#3B82F6"
      : state.isFocused
      ? "#DBEAFE"
      : "#FFFFFF",
    color: state.isSelected ? "#FFFFFF" : "#000000",
    "&:hover": {
      backgroundColor: "#BFDBFE",
    },
  }),
};

export default function Dropdown({ options, onChange, value }) {
  return (
    <Select
      styles={customStyles}
      closeMenuOnSelect={true}
      components={animatedComponents}
      options={options}
      value={value}
      onChange={onChange}
      noOptionsMessage={() => (
        <div>
          <p>No result found, create one</p>
        </div>
      )}
    />
  );
}
