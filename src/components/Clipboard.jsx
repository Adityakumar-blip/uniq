import { ContributeToProject } from "@/Store/Reducers/ProjectSlice";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CopyButton = ({ url }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const { token } = useSelector(({ CommonSlice }) => CommonSlice);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        try {
          setUserInfo(JSON.parse(user));
        } catch (e) {
          console.error("Failed to parse user info from localStorage:", e);
        }
      }
    }
  }, []);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleCopy = () => {
    if (token) {
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        setCopied(true);
        setTooltipVisible(true);

        dispatch(ContributeToProject({ projectId: id, userId: userInfo?._id }));

        setTimeout(() => {
          setCopied(false);
          setTooltipVisible(false);
        }, 2000);
      });
    } else {
      alert("please login to contribute");
    }
  };

  return (
    <div className="w-full mt-4">
      <div className="relative">
        <label htmlFor="npm-install-copy-button" className="sr-only">
          Label
        </label>
        <input
          id="npm-install-copy-button"
          type="text"
          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={url}
          disabled
          readOnly
          ref={inputRef}
        />
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCopy}
          className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
        >
          {!copied ? (
            <span id="default-icon">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
          ) : (
            <span id="success-icon" className="inline-flex items-center">
              <svg
                className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </span>
          )}
        </button>

        {tooltipVisible && (
          <div
            id="tooltip-copy-npm-install-copy-button"
            role="tooltip"
            className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700"
          >
            {!copied ? (
              <span id="default-tooltip-message">Copy to clipboard</span>
            ) : (
              <span id="success-tooltip-message">Copied!</span>
            )}
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CopyButton;
