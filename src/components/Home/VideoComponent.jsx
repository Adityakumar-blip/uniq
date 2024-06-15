import React, { useState, useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-purple-50 min-h-screen flex flex-col items-center justify-center">
      <div className="  w-full max-w-4xl rounded-lg">
        <div className="relative w-full h-0 pb-[100%] rounded-lg mb-6">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            controls={false}
            onClick={handlePlay}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
            >
              <FaPlayCircle className="text-6xl text-blue-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
