import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  return (
    <div className="h-screen relative">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        className="w-full h-full object-cover"
      />
      <div className="flex justify-center items-center absolute inset-0 bg-black/60">
        <div
          className="flex justify-center items-center w-[100px] h-[100px] rounded-full border-2 border-orange-400 cursor-pointer"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill className="text-white text-3xl" />
          ) : (
            <BsFillPlayFill className="text-white text-3xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
