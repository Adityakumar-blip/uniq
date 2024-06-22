import { useRouter } from "next/router";
import React from "react";
import { imgUrl } from "../../../utils/HTTP.js";
import { FaLocationArrow } from "react-icons/fa";

const DevelopersCard = ({ props }) => {
  const router = useRouter();
  const placeholderImage = "https://via.placeholder.com/500";

  return (
    <div className="card text-black cursor-pointer h-[400px] shadow-xl flex flex-col">
      <figure className="h-[60%]">
        <img
          src={props.image ? `${imgUrl}${props.image}` : placeholderImage}
          alt="profile"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
        />
      </figure>
      <div className="h-[40%] p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="card-title text-lg font-bold">{props.name}</h2>
            <p className="text-sm text-gray-600">{props.company.name}</p>
          </div>
          <div className="border-2 p-2 rounded-full">
            <FaLocationArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersCard;
