// App.js
import React from "react";
import Podcasts from "./components/Podcasts";
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <Podcasts />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background-image: url('https://i.pinimg.com/736x/7d/4c/0e/7d4c0e8b0abe643184be81ee63bd3673.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
`;

export default App;
