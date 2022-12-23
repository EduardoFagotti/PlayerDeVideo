import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import video from "../../assets/videos/video1.mp4";
import "react-html5video/dist/styles.css";
import { Container } from "./styles";

const VideoPlayer = () => {
  return (
    <Container>
      <Video className="video">
        <source src={video} type="video/webm" />
      </Video>
    </Container>
  );
};

export default VideoPlayer;
