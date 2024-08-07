import Dropdown from "@/components/Design/Dropdown";
import InputField from "@/components/Design/InputField";
import TextArea from "@/components/Design/TextArea";
import MultiSelectDropdown from "@/components/MultipleSelection";
import {
  AddDiscussion,
  GetAllDiscussionCategory,
} from "@/Store/Reducers/ForumSlice";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialValues = {
  title: "",
  description: "",
  category: {},
};

const NewDiscussionForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories } = useSelector(({ ForumSlice }) => ForumSlice);

  useEffect(() => {
    dispatch(GetAllDiscussionCategory());
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      dispatch(AddDiscussion(values)).then((result) => {
        if (result?.payload?.data?.status === 201) {
          router.push("/discussion");
        }
      });
    },
  });

  const options = categories.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create New Discussion
      </h2>
      <div>
        <InputField
          label="Title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="title"
        />
        <TextArea
          label="Body"
          onChange={(e) => formik.setFieldValue("description", e.target.value)}
          placeholder="Type your message.."
        />
        <div className="mb-4">
          <Dropdown
            options={options}
            onChange={(e) => formik.setFieldValue("category", e)}
            value={formik?.values?.category}
          />
        </div>
        <div className="text-center">
          <button
            onClick={() => formik.handleSubmit()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Discussion
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDiscussionForm;
