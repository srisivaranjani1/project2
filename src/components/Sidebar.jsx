// import React from "react";
// import styled from "styled-components";

// const Sidebar = () => {
//   return (
//     <SidebarContainer>
//       <SidebarHeader>PodPalette</SidebarHeader>
//       <SearchBox>
//         <SearchInput placeholder="Search podcasts..." />
//       </SearchBox>
//       <NavLinks>
//         <NavLink>Saved</NavLink>
//         <NavLink>Browse</NavLink>
//         <NavLink>Listen Now</NavLink>
//       </NavLinks>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;

// // Sidebar Styles
// const SidebarContainer = styled.div`
//   width: 100px;
//   background-color: #121212;
//   padding: 20px;
//   color: white;
//   height: 100vh;
//   position: relative;
//   top: 0;
//   left:0;
// `;

// const SidebarHeader = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const SearchBox = styled.div`
//   margin-bottom: 30px;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   border-radius: 20px;
//   border: 1px solid #aaa;
//   background-color: #1f1f1f;
//   color: white;
//   margin-bottom: 10px;
//   font-size: 16px;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const NavLink = styled.div`
//   font-size: 18px;
//   margin-bottom: 20px;
//   cursor: pointer;
//   color: white;

//   &:hover {
//     color: #1db954;
//   }
// `;
import React from "react";
import styled from "styled-components";
import { FaBookmark, FaPlay, FaHeadphones, FaSearch } from "react-icons/fa";

const Sidebar = ({ setSearchTerm }) => {
  return (
    <SidebarContainer>
      <SidebarHeader>PodPalette</SidebarHeader>
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
      <NavLinks>
        <NavLink>
          <FaBookmark /> Saved
        </NavLink>
        <NavLink>
          <FaPlay /> Listen Now
        </NavLink>
        <NavLink>
          <FaHeadphones /> Browse
        </NavLink>
      </NavLinks>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 220px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  color: white;
  height: 100vh;
  position: fixed;
  border-right: 2px solid #333;
`;

const SidebarHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
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

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const NavLink = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;

  &:hover {
    color: #1db954;
  }

  & > svg {
    margin-right: 10px;
    font-size: 20px;
  }
`;
