
// import React from "react";
// import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = ({ setSearchTerm }) => {
//   return (
//     // <SearchBox>
//     //   <SearchIcon />
//     //   <SearchInput
//     //     type="text"
//     //     placeholder="Search podcasts..."
//     //     onChange={(e) => setSearchTerm(e.target.value)}
//     //   />
//     //  </SearchBox>
//     <SearchBox>
//   <SearchInput placeholder="Search podcasts..." />
//   <SearchIcon>
//     <FaSearch /> {/* FontAwesome or your preferred search icon */}
//   </SearchIcon>
// </SearchBox>


//   );
// };

//  export default SearchBar;


import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <SearchBox>
      <SearchInput
        type="text"
        placeholder="Search podcasts..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
    </SearchBox>
  );
};

export default SearchBar;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: white;
  }
`;

const SearchIcon = styled.div`
  color: white;
  font-size: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
