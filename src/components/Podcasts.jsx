// /components/Podcasts.js
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import PodcastCard from "./PodcastCard";
import podcastsData from "../data/podcasts"; // Assuming the podcasts data is in this file

const Podcasts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter podcasts based on search query
  const filteredPodcasts = podcastsData.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <PodcastGrid>
          {filteredPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </PodcastGrid>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin-left: 240px;  // Adjust for the sidebar width
  padding: 20px;
  flex-grow: 1;
`;

const PodcastGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default Podcasts;
