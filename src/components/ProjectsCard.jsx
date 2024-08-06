import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { imgUrl } from "../../utils/HTTP";

const ProjectsCard = ({ props }) => {
  const [isNew, setIsNew] = useState(false);
  const router = useRouter();
  const placeholderImage =
    "https://images.unsplash.com/photo-1717137389747-d1d4ced6abc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8";
  const [imageSrc, setImageSrc] = useState(
    props.img ? `${imgUrl}${props.img}` : placeholderImage
  );

  const handleCardClick = () => {
    router.push({
      pathname: "/project-description",
      query: { id: props._id },
    });
  };

  const handleImageError = () => {
    setImageSrc(placeholderImage);
  };

  useEffect(() => {
    const checkIfNew = () => {
      if (props?.createdAt) {
        const creationDate = new Date(props.createdAt);
        const currentDate = new Date();
        const differenceInTime = currentDate.getTime() - creationDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        setIsNew(differenceInDays <= 7);
      }
    };

    checkIfNew();
  }, [props?.createdAt]);

  return (
    <div
      className="card bg-white text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer h-[430px] flex flex-col overflow-hidden rounded-lg "
      onClick={handleCardClick}
    >
      <figure className="relative flex-1 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${props.name} Project Image`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 ease-in-out"
          onError={handleImageError}
        />
      </figure>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-2xl font-bold mb-2 flex items-center">
            {props.name}
            {isNew && (
              <span className="badge badge-secondary text-xs ml-2 px-2 py-1 rounded-full bg-indigo-500 text-white animate-pulse">
                NEW
              </span>
            )}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 transition-all duration-300 ease-in-out group-hover:line-clamp-none">
            {props.shortIntro || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
