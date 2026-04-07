import React, { useState } from "react";

function NewVideo() {
  const [isHover, setIsHover] = useState(false);

  return (
    <iframe
      width="400"
      height="250"
      src={`https://www.youtube.com/embed/QFOrLMcke2A?autoplay=${isHover ? 1 : 0}&mute=1`}
      title="YouTube video"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      allow="autoplay"
    />
  );
}

export default NewVideo;
