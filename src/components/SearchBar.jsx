import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search podcasts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  margin: 20px 0;
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export default SearchBar;
