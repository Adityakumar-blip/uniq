import InputField from "@/components/Design/InputField";
import TextArea from "@/components/Design/TextArea";
import MultiSelectDropdown from "@/components/MultipleSelection";
import React, { useState } from "react";

const NewDiscussionForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiscussion = {
      title,
      body,
      category,
      date: new Date().toISOString(),
    };
    console.log("New Discussion:", newDiscussion);
    // Here you can add your code to send `newDiscussion` to your backend or state management
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create New Discussion
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Title"
          type="text"
          onChange={(e) => console.log(e.target.value)}
          name="Title"
        />
        <TextArea
          label="Body"
          onChange={(e) => console.log(e.target.value)}
          placeholder="Type your message.."
        />
        <div className="mb-4">
          <MultiSelectDropdown options={[]} />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Create Discussion
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewDiscussionForm;
