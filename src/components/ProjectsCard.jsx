import { useRouter } from "next/router";
import React from "react";
import { imgUrl } from "../../utils/HTTP";

const ProjectsCard = ({ props }) => {
  const router = useRouter();
  const placeholderImage = "https://via.placeholder.com/500";

  return (
    <div
      className="card text-black cursor-pointer shadow-xl h-[430px] flex flex-col"
      onClick={() =>
        router.push({
          pathname: "/project-description",
          query: { id: props._id },
        })
      }
    >
      <figure className="flex-1">
        <img
          src={props.img ? `${imgUrl}${props.img}` : placeholderImage}
          alt="Project Image"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
        />
      </figure>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-xl font-bold">
            {props.name}
            <div className="badge badge-secondary ml-2">NEW</div>
          </h2>
          <p className="mt-2">{props.shortIntro || ""}</p>
        </div>
        {/* <div className="card-actions flex justify-end mt-4">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline ml-2">Products</div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsCard;
