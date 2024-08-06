import InputWithLable from "@/components/InputWithLable";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { addProject } from "../../../utils/projectfire";
import { useDispatch, useSelector } from "react-redux";
import { AddProject, GetAllCommon } from "@/Store/Reducers/ProjectSlice";
import MultiSelectDropdown from "@/components/MultipleSelection";
import projectSchema from "../../../utils/schema";
import RandomImages from "../../../utils/Images";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const initialValues = {
  name: "",
  description: "",
  shortIntro: "",
  img: "",
  githubUrl: "",
  techstack: [],
  tags: [],
};

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const srcToFile = (src, fileName, mimeType) => {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  };

  const getRandomImage = async () => {
    const randomIndex = Math.floor(Math.random() * RandomImages.length);
    const randomImage = RandomImages[randomIndex];

    const response = await fetch(randomImage.file.src).then((r) => r.blob());

    const compressedImage = await compressImage(response);

    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);

      srcToFile(reader.result, "compressed.png", "image/png").then(function (
        file
      ) {
        formik.setFieldValue("img", file);
      });
    };
    reader.readAsDataURL(compressedImage);
  };

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const maxWidth = 800;
          const scaleFactor = maxWidth / img.width;
          canvas.width = maxWidth;
          canvas.height = img.height * scaleFactor;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            "image/jpeg",
            0.7
          );
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImg = () => {
    setSelectedImage(null);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: projectSchema,
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
        dispatch(AddProject(formData)).then((result) => {
          if (result.payload.status === 201) {
            router.push("/projects");
          }
          console.log("project result", result);
        });
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
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-scroll ">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Project
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Describe the project and find the right developer
          </p>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6">
              <div className="text-center">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="h-40 w-40 object-cover rounded-lg mx-auto mb-4"
                  />
                ) : (
                  <div className="h-40 w-40 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="imageUpload"
                />
                <div className="flex justify-center space-x-4">
                  <label
                    htmlFor="imageUpload"
                    className="btn btn-primary text-white cursor-pointer px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600"
                  >
                    Upload
                  </label>
                  <button
                    type="button"
                    className="btn text-white cursor-pointer px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-700"
                    onClick={getRandomImage}
                  >
                    Choose Random
                  </button>
                  {selectedImage && (
                    <button
                      type="button"
                      className="btn text-white cursor-pointer px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-red-600"
                      onClick={handleRemoveImg}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Name
                </label>
                <InputWithLable
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  errors={formik.errors.name}
                  touched={formik.touched.name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="techstack"
                  className="block text-sm font-medium text-gray-700"
                >
                  Technologies Requirement
                </label>
                <MultiSelectDropdown
                  options={technologies}
                  onChange={(data) => formik.setFieldValue("techstack", data)}
                  type="technology"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Tags
                </label>
                <MultiSelectDropdown
                  options={tags}
                  onChange={(data) => formik.setFieldValue("tags", data)}
                  type="tags"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="shortIntro"
                  className="block text-sm font-medium text-gray-700"
                >
                  Short Description
                </label>
                <InputWithLable
                  name="shortIntro"
                  value={formik.values.shortIntro}
                  onChange={formik.handleChange}
                  errors={formik.errors.shortIntro}
                  touched={formik.touched.shortIntro}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="githubUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Github URL
              </label>
              <InputWithLable
                name="githubUrl"
                value={formik.values.githubUrl}
                onChange={formik.handleChange}
                errors={formik.errors.githubUrl}
                touched={formik.touched.githubUrl}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2"> */}
            {/* Project Description */}
            <div className="mb-8 ">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Description
              </label>
              <div className="mb-4 ">
                <ReactQuill
                  theme="snow"
                  value={formik.values.description}
                  onChange={(content) =>
                    formik.setFieldValue("description", content)
                  }
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image"],
                      ["clean"],
                    ],
                  }}
                />
              </div>
              {formik.errors.description && formik.touched.description && (
                <p className="mt-2 text-sm text-red-600">
                  {formik.errors.description}
                </p>
              )}
            </div>

            {/* Special Requirements */}
            <div className="mb-8">
              <label
                htmlFor="specialRequirements"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Special Requirements
              </label>
              <div className="mb-4 ">
                <ReactQuill
                  theme="snow"
                  value={formik.values.specialRequirements}
                  onChange={(content) =>
                    formik.setFieldValue("specialRequirements", content)
                  }
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image"],
                      ["clean"],
                    ],
                  }}
                />
              </div>
              {formik.errors.specialRequirements &&
                formik.touched.specialRequirements && (
                  <p className="mt-2 text-sm text-red-600">
                    {formik.errors.specialRequirements}
                  </p>
                )}
            </div>
            {/* </div> */}

            <div className="flex justify-end ">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Project
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
