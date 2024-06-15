import { GetAllCommon } from "@/Store/Reducers/ProjectSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { tags, technologies } = useSelector(
    ({ ProjectSlice }) => ProjectSlice
  );

  useEffect(() => {
    dispatch(GetAllCommon("tags"));
    dispatch(GetAllCommon("technologies"));
  }, [dispatch]);

  const allTags = [...tags, ...technologies];

  const handleSelectFilter = (value) => {
    router.push({
      pathname: router.pathname,
      query: { filter: value },
    });
  };

  return (
    <div className="flex gap-4">
      {allTags.map((item, index) => (
        <span
          onClick={() => handleSelectFilter(item.label)}
          class="bg-gray-100 text-gray-800 cursor-pointer text-md font-semibold border border-gray-500 text-center  px-4 py-1.5 rounded-lg"
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default Filters;
