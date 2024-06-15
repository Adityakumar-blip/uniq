import { useRouter } from "next/router";
import React from "react";
import { imgUrl } from "../../../utils/HTTP.js";
import { FaLocationArrow } from "react-icons/fa";

const DevelopersCard = ({ props }) => {
  const router = useRouter();
  return (
    <div>
      <div className="card text-black  cursor-pointer h-[420px] shadow-xl">
        <figure>
          <img
            src={props.image}
            alt="profile"
            className="w-full object-cover object-center mt-10 scale-[-1]"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="card-title">
                <p>{props.name}</p>
              </h2>
              <p>{props.company.name}</p>
            </div>
            <div className="border-2 p-4 rounded-full">
              <FaLocationArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersCard;
