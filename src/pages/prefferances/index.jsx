import { UpdateUser } from "@/store/Reducers/AuthSlice";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("router", router.query, id);
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

  const formik = useFormik({
    initialValues: {
      img: "",
      bio: "",
      linkedinUrl: "",
      githubUrl: "",
    },
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
          console.log("Result", result.payload);
          localStorage.setItem(
            "user",
            JSON.stringify(result?.payload?.data?.data || "")
          );
          router.push("/projects");
        });
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

  console.log("Formik values", formik.values);
  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <div>
        <p className="text-black text-5xl font-bold">Let Us Know You Better</p>
        <p className="text-gray-500 text-xl">Let's start with basics</p>
      </div>
      <div className="w-[40%]">
        <div className="flex flex-col mt-16 items-center justify-center">
          <img
            src={
              selectedImage ||
              "https://cdn.dribbble.com/userupload/8262993/file/original-696b7c41da0e8754893e107a9f9ec3e5.gif"
            }
            className="h-[120px] w-[120px] rounded-full"
          />
          <div className="flex gap-6 mt-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className="btn w-[10rem]">
              Upload
            </label>
            <button className="btn btn-primary w-[10rem]">Choose Random</button>
          </div>
        </div>
        <div className="mt-4">
          <div className="label">
            <span className=" text-black text-lg font-semibold">Bio</span>
          </div>
          <textarea
            id="message"
            rows="4"
            name="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
            class="block p-2.5 w-full ring-blue-500 text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-[30px] w-[30px]"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <p className="text-black">LinkedIn</p>
            </div>
            <button className="btn btn-neutral">Connect</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-[30px] w-[30px]"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
              <p className="text-black">Github</p>
            </div>
            <button className="btn btn-neutral">Connect</button>
          </div>
        </div>
        <button
          className="btn w-full mt-6"
          onClick={() => formik.handleSubmit()}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default index;
