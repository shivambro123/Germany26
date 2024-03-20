import React from "react";
import dummyVideo from "./../../assests/dummy1.mp4";
import "../../styles/Popup.css";

const PopUp = ({ handleWatchStory, video }) => {
  return (
    <>
      <div
        className=" fixed top-0 z-40 h-screen w-full bg-black bg-opacity-25 flex justify-center items-center"
        onClick={handleWatchStory}
      >
        <div>
          <video
            height="800"
            width="800"
            className="shadow-lg"
            controls
          >
            <source src={video} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
        </div>
      </div>
    </>
  );
};

export default PopUp;
