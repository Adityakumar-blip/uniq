import InputWithLable from "@/components/InputWithLable";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { addProject } from "../../../utils/projectfire";
import { useDispatch, useSelector } from "react-redux";
import { AddProject, GetAllCommon } from "@/Store/Reducers/ProjectSlice";
import MultiSelectDropdown from "@/components/MultipleSelection";

const initialValues = {
  name: "",
  description: "",
  shortIntro: "",
  img: "",
  techstack: [],
  tags: [],
};

const index = () => {
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        formik.setFieldValue("img", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImg = () => {
    setSelectedImage(null);
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();
      for (const key in values) {
        if (Array.isArray(values[key])) {
          formData.append(key, JSON.stringify(values[key]));
        } else {
          formData.append(key, values[key]);
        }
      }
      try {
        dispatch(AddProject(formData));
      } catch (error) {
        console.log("Error in adding project", error);
      }
    },
  });

  const { tags, technologies } = useSelector(
    ({ ProjectSlice }) => ProjectSlice
  );

  useEffect(() => {
    dispatch(GetAllCommon("tags"));
    dispatch(GetAllCommon("technologies"));
  }, []);

  return (
    <div className="p-10">
      <div>
        <p className="text-5xl text-black font-bold">Add New Project</p>
        <p className="text-lg pt-2 text-gray-500">
          Describe the project and find the right developer
        </p>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-[50px]">
          <img
            src={
              selectedImage ||
              "https://cdn.dribbble.com/userupload/14600121/file/original-f8dbf2e94ec02b742de211d1bde58544.jpg?resize=752x564"
            }
            alt="Selected"
            className="h-[160px] w-[200px] object-cover rounded-lg"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
          {!selectedImage ? (
            <div className="flex items-center gap-2">
              <label
                htmlFor="imageUpload"
                className="btn btn-primary w-[10rem] text-white cursor-pointer"
              >
                Upload
              </label>
              <button
                htmlFor="imageUpload"
                className="btn  w-[10rem] text-white cursor-pointer"
              >
                Choose Random
              </button>
            </div>
          ) : (
            <button
              className="btn w-[10rem] text-white cursor-pointer"
              onClick={() => handleRemoveImg()}
            >
              Remove
            </button>
          )}
        </div>
        <form>
          <div class="grid gap-4 mt-4 md:grid-cols-2">
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Project Name
                </span>
              </div>
              <InputWithLable
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="dropdown-select">
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Technologies Requirement
                </span>
              </div>
              <MultiSelectDropdown
                options={technologies}
                onChange={(data) => formik.setFieldValue("techstack", data)}
                type="technology"
              />
            </div>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Project Tags
                </span>
              </div>
              <MultiSelectDropdown
                options={tags}
                onChange={(data) => formik.setFieldValue("tags", data)}
                type="tags"
              />
            </div>
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Short Description
                </span>
              </div>
              <InputWithLable
                name="shortIntro"
                value={formik.values.shortIntro}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Project Description
                </span>
              </div>
              <textarea
                id="message"
                rows="4"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                class="block p-2.5 w-full ring-blue-500 text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-[#3b82f6] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Special Requirements
                </span>
              </div>
              <textarea
                id="message"
                name=""
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-[#3b82f6] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500  dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>

          <div
            className="mt-6 flex gap-[1px] cursor-pointer"
            onClick={formik.handleSubmit}
          >
            <div className="bg-blue-500  w-[8rem] h-[3rem] flex items-center justify-center">
              <p className="font-semibold">Add Project</p>
            </div>
            <div className="bg-blue-500 w-[3rem] h-[3rem] flex items-center justify-center">
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] rotate-[-45deg] invert"
              >
                <path
                  d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
