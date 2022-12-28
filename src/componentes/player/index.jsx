import React, { useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import video from "../../assets/videos/Carrilhão.mp4";
import "react-html5video/dist/styles.css";
import { Container } from "./styles";
import VideoFilter from "../videoFilter";

const VideoPlayer = () => {
  return (
    <Container>
      <video className="video" controls>
        <source src={video} type="video/webm" />
      </video>
      <VideoFilter className="list" />
    </Container>
  );
};

export default VideoPlayer;
