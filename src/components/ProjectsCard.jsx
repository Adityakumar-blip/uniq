import { useRouter } from "next/router";
import React from "react";
import { imgUrl } from "../../utils/HTTP";

const ProjectsCard = ({ props }) => {
  const router = useRouter();
  return (
    <div>
      <div
        className="card text-black  cursor-pointer h-[420px] shadow-xl"
        onClick={() =>
          router.push({
            pathname: "/project-description",
            query: { id: props._id },
          })
        }
      >
        <figure>
          <img
            src={
              props.img
                ? `${imgUrl}${props.img}`
                : "https://via.placeholder.com/500"
            }
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{props.shortIntro || ""}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
