import { useRouter } from "next/router";
import React from "react";

const ProjectsCard = ({ props }) => {
  console.log(props);
  const router = useRouter();
  return (
    <div>
      <div
        className="card bg-base-100 cursor-pointer h-[525px] shadow-xl"
        onClick={() => router.push("/project-description")}
      >
        <figure>
          <img src={props?.imageSrc} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{props.description}</p>
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
