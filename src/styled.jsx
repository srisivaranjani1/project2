import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: url('https://i.pinimg.com/1200x/5a/3b/52/5a3b5257b457f0128d735de3dfa63701.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
`;

const Sidebar = styled.div`
  width: 280px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: white;
  outline: none;
  flex: 1;
  font-size: 16px;
`;

const NavItems = styled.div`
  margin-top: 20px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 10px 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #1db954;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 32px;
  color: white;
  margin-bottom: 20px;
`;

const PodcastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const PodcastCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: white;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const PodcastImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const PodcastTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;
