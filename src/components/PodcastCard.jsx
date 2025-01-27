import React, { useState } from "react";
import styled from "styled-components";

const PodcastCard = ({ podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(podcast.audio));

  // Toggle play/pause state
  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Card>
      <Image src={podcast.image} alt={podcast.title} />
      <Title>{podcast.title}</Title>
      <Description>{podcast.description}</Description>

      {/* Audio player */}
      <AudioPlayer>
        <button onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
        <audio controls>
          <source src={podcast.audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </AudioPlayer>
    </Card>
  );
};

export default PodcastCard;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  width: 220px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`;

const Title = styled.h3`
  color: white;
  font-size: 16px;
  margin-top: 10px;
`;

const Description = styled.p`
  color: white;
  font-size: 14px;
  margin-top: 5px;
`;

const AudioPlayer = styled.div`
  margin-top: 15px;
  
  button {
    padding: 10px;
    border: none;
    background-color: #1db954;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 10px;
  }

  button:hover {
    background-color: #1ed760;
  }

  audio {
    width: 100%;
  }
`;
