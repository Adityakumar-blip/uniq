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
    minHeight: "3rem",
    display: "flex",
    borderColor: "gray",
    borderWidth: "1px",
    borderRadius: "0.375rem",
    padding: "0.25rem 0.5rem",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flexWrap: "wrap",
  }),
  valueContainer: (provided) => ({
    ...provided,
    flexWrap: "wrap",
    maxHeight: "100px", // Adjust this value as needed
    overflowY: "auto",
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: 0,
    width: "100%",
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: 0,
    textAlign: "left",
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
    margin: "2px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#1E40AF",
    padding: "2px 6px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#1E40AF",
    padding: "2px",
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

export default function MultiSelectDropdown({ options, onChange, type }) {
  const dispatch = useDispatch();

  const [newOption, setNewOptions] = useState([]);

  useEffect(() => {
    setNewOptions(options);
  }, [options]);

  const initialValues = {
    name: "",
    status: true,
    type: type,
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      try {
        dispatch(AddCommon(values)).then((result) => {
          if (result.payload.status === 201) {
            setNewOptions([...options, result.payload.data.data[0]]);
          }
        });
      } catch (error) {}
    },
  });

  const handleCreate = (e) => {
    e.preventDefault();
  };

  return (
    <Select
      styles={customStyles}
      closeMenuOnSelect={false}
      onInputChange={(e) => {
        formik.setFieldValue("name", e);
      }}
      components={animatedComponents}
      isMulti
      options={newOption}
      onChange={onChange}
      noOptionsMessage={() => (
        <div>
          <p>No result found, create one</p>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Create
          </button>
        </div>
      )}
    />
  );
}
