import InputWithLable from "@/components/InputWithLable";
import React from "react";

const index = () => {
  return (
    <div className="p-10">
      <div>
        <p className="text-5xl text-black font-bold">Add New Project</p>
        <p className="text-lg pt-2 text-gray-500">
          Describe the project and find the right developer
        </p>
      </div>
      <div className="mt-6">
        <form>
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Project Name
                </span>
              </div>
              <InputWithLable />
            </div>
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Technologies Requirement
                </span>
              </div>
              <InputWithLable />
            </div>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Project Tags
                </span>
              </div>
              <InputWithLable />
            </div>
            <div>
              <div className="label">
                <span className=" text-black text-lg font-semibold">
                  Short Description
                </span>
              </div>
              <InputWithLable />
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
                class="block p-2.5 w-full ring-blue-500 text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500  dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex gap-[1px] cursor-pointer">
            <div className="bg-blue-500 w-[8rem] h-[3rem] flex items-center justify-center">
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
