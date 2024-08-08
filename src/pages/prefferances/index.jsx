import InputWithLable from "@/components/InputWithLable";
import { UpdateUser } from "@/store/Reducers/AuthSlice";
import {
  loadUserFromLocalStorage,
  setUser,
} from "@/Store/Reducers/CommonSlice";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [linkedinVerified, setLinkedinVerified] = useState(false);
  const [githubVerified, setGithubVerified] = useState(false);

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

  const handleRandomImage = () => {
    // This is a placeholder. In a real application, you would fetch a random image from an API.
    const randomImageUrl = `https://picsum.photos/200/200?random=${Math.random()}`;
    setSelectedImage(randomImageUrl);
    formik.setFieldValue("img", randomImageUrl);
  };

  const validationSchema = Yup.object().shape({
    bio: Yup.string().required("Bio is required"),
    // linkedinUrl: Yup.string()
    //   .url("Invalid URL")
    //   .required("LinkedIn URL is required"),
    // githubUrl: Yup.string()
    //   .url("Invalid URL")
    //   .required("GitHub URL is required"),
  });

  const formik = useFormik({
    initialValues: {
      img: "",
      bio: "",
      linkedinUrl: "",
      githubUrl: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        const formData = new FormData();
        for (const key in values) {
          formData.append(key, values[key]);
        }
        if (id) {
          formData.append("_id", id);
        }
        dispatch(UpdateUser(formData)).then((result) => {
          localStorage.setItem(
            "user",
            JSON.stringify(result?.payload?.data?.data || "")
          );
          // dispatch(loadUserFromLocalStorage());
          router.push("/projects");
        });
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  const verifyUrl = async (url, type) => {
    const isValid = url.startsWith("https://") && url.includes(type);
    if (type === "linkedin") {
      setLinkedinVerified(isValid);
    } else {
      setGithubVerified(isValid);
    }
    return isValid;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-10 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Let Us Know You Better
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Let's start with the basics
        </p>

        <div className="flex flex-col items-center mb-8">
          <div className="relative group mb-4">
            <img
              src={
                selectedImage ||
                "https://cdn.dribbble.com/userupload/8262993/file/original-696b7c41da0e8754893e107a9f9ec3e5.gif"
              }
              className="h-32 w-32 rounded-full object-cover border-4 border-indigo-500 transition-all duration-300 group-hover:scale-105"
              alt="Profile"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <label
                htmlFor="imageUpload"
                className="text-white cursor-pointer"
              >
                Change Photo
              </label>
            </div>
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="imageUpload"
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Upload
            </label>
            <button
              onClick={handleRandomImage}
              className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Choose Random
            </button>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500 bg-white transition-colors duration-300"
            placeholder="Tell us about yourself..."
          ></textarea>
          {formik.touched.bio && formik.errors.bio && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.bio}</p>
          )}
        </div>

        <div className="space-y-6">
          {[
            { name: "linkedinUrl", icon: "linkedin", label: "LinkedIn" },
            { name: "githubUrl", icon: "github", label: "GitHub" },
          ].map((social) => (
            <div key={social.name} className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                {social.icon === "github" ? (
                  <FaGithub size="20px" className="text-primary" />
                ) : (
                  <FaLinkedin size="20px" className="text-primary" />
                )}
              </div>
              <div className="flex-grow">
                {/* <input
                  type="text"
                  name={social.name}
                  value={formik.values[social.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={`Enter your ${social.label} URL`}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                /> */}
                <InputWithLable
                  name={social.name}
                  value={formik.values[social.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched[social.name] && formik.errors[social.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors[social.name]}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() =>
                  verifyUrl(formik.values[social.name], social.icon)
                }
                className={`px-4 py-2 rounded-lg text-white transition-colors duration-300 ${
                  (
                    social.name === "linkedinUrl"
                      ? linkedinVerified
                      : githubVerified
                  )
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-indigo-500 hover:bg-indigo-600"
                }`}
              >
                {(
                  social.name === "linkedinUrl"
                    ? linkedinVerified
                    : githubVerified
                )
                  ? "Verified"
                  : "Verify"}
              </button>
            </div>
          ))}
        </div>

        <button
          className="w-full mt-8 bg-primary text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          onClick={() => formik.handleSubmit()}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Index;
