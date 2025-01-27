import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>Saved</SidebarItem>
      <SidebarItem>Browse</SidebarItem>
      <SidebarItem>Listen Now</SidebarItem>
      <SidebarItem>Search</SidebarItem>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 220px;
 background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 20px;
`;

const SidebarItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #444;
  }
`;

export default Sidebar;

