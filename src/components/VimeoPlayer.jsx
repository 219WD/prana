import React from "react";
import "./VimeoPlayer.css";

const VimeoPlayer = () => {
  return (
    <div className="vimeo-container">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/1057676657?h=12db8538d7&autoplay=1&muted=1&dnt=1"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VimeoPlayer;
