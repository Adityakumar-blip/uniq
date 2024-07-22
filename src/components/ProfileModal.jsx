import { UpdateUser } from "@/store/Reducers/AuthSlice";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ProfileModal = ({ isOpen, closeModal, id }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { img: "" },
    onSubmit: (values) => {
      try {
        const _id = localStorage.getItem("userId");
        const formData = new FormData();
        for (const key in values) {
          formData.append(key, values[key]);
        }
        if (_id) {
          formData.append("_id", id);
        }
        dispatch(UpdateUser(formData)).then((result) => {
          console.log("Result", result.payload);
          localStorage.setItem(
            "user",
            JSON.stringify(result?.payload?.data?.data)
          );
          //   router.push("/projects");
        });
      } catch (error) {
        console.log("Error", error);
      }
    },
  });

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
  return (
    <dialog
      id="my_modal_5"
      className={`modal modal-bottom sm:modal-middle ${
        isOpen ? "modal-open" : ""
      }`}
    >
      <div className="modal-box">
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
        <div className="modal-action">
          <button className="btn" onClick={() => formik.handleSubmit()}>
            Submit
          </button>
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ProfileModal;
