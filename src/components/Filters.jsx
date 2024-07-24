import { GetAllCommon } from "@/Store/Reducers/ProjectSlice";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Filters = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex items-center">
      <style jsx>{`
        .filters-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .filters-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto py-4 px-8 filters-scrollbar"
        onScroll={handleScroll}
      >
        {allTags.map((item, index) => (
          <span
            key={index}
            onClick={() => handleSelectFilter(item.label)}
            className="bg-gray-100 text-gray-800 cursor-pointer text-sm font-semibold border border-gray-300 px-4 py-2 rounded-full whitespace-nowrap transition-all hover:bg-gray-200 hover:border-gray-400 flex-shrink-0"
          >
            {item.label}
          </span>
        ))}
      </div>
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default Filters;
