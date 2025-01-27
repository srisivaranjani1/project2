
// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaSearch, FaBookmark, FaPlay, FaHeadphones } from "react-icons/fa";

// const podcasts = [
//   {
//     id: 1,
//     title: "The Habit Coach Podcast",
//     image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/3c/a6/20/3ca620e4-e536-7e8e-40a2-b5c43a6f7869/mza_9026542263054547074.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 2,
//     title: "Karma Is a Witch Podcast",
//     image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/8b/3a/b4/8b3ab46a-e9c8-7e34-d899-bc488471a569/mza_1815945187651217595.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 3,
//     title: "The Life Manifesto",
//     image: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/5b/0b/a4/5b0ba4fc-1f32-d9e7-d660-9a1b421ac12b/mza_6583959939194858467.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 4,
//     title: "The Desi Woman Podcast",
//     image: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/80/92/91/80929172-1234-f5e6-d62c-c7d3838b1d77/mza_1211991376876442701.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 5,
//     title: "The Inspiring Talk",
//     image: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/bd/bc/56/bdbc5630-5015-71b1-2068-d26a35ea3912/mza_3877152079657711175.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 6,
//     title: "On Purpose with Jay Shetty",
//     image: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f6/08/11/f6081164-59e5-6f04-3b2b-ff0dc2645e73/mza_12201214873685034288.jpg/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 7,
//     title: "Unlocking Greatness Podcast",
//     image: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/b3/25/64/b325645e-a64d-06da-c85e-86d6c0cbca67/mza_3001759631352229937.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 8,
//     title: "Self Care IRL",
//     image: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/ea/b7/7e/eab77ea2-0a14-c2fc-441a-d5b3b0bcae44/mza_1957696588550548658.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 9,
//     title: "The Daily Motivation",
//     image: "https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/2a/3d/37/2a3d378d-f5a3-8f88-74d6-b3a3d57e71c7/mza_2954974414885545087.png/1400x1400bb.jpg",
//     language: "English",
//   },
//   {
//     id: 10,
//     title: "The Overwhelmed Brain",
//     image: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/29/0b/f1/290bf1c3-3894-6884-e455-febd622e83b6/mza_6981562599017816728.png/1400x1400bb.jpg",
//     language: "English",
//   },
// ];

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredPodcasts = podcasts.filter((podcast) =>
//     podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <AppContainer>
//       <Sidebar>
//         <SidebarHeader>PodPalette</SidebarHeader>
//         <SearchBox>
//           <SearchInput
//             type="text"
//             placeholder="Search Podcasts..."
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <SearchIcon>
//             <FaSearch />
//           </SearchIcon>
//         </SearchBox>
//         <NavLinks>
//           <NavLink>
//             <FaBookmark /> Saved
//           </NavLink>
//           <NavLink>
//             <FaPlay /> Listen Now
//           </NavLink>
//           <NavLink>
//             <FaHeadphones /> Browse
//           </NavLink>
//         </NavLinks>
//       </Sidebar>
//       <MainContent>
//         <PodcastShelf>
//           {filteredPodcasts.length > 0 ? (
//             filteredPodcasts.map((podcast) => (
//               <PodcastCard key={podcast.id}>
//                 <PodcastImage src={podcast.image} alt={podcast.title} />
//                 <PodcastTitle>{podcast.title}</PodcastTitle>
//               </PodcastCard>
//             ))
//           ) : (
//             <NoResults>No podcasts found</NoResults>
//           )}
//         </PodcastShelf>
//       </MainContent>
//     </AppContainer>
//   );
// };

// export default App;

// const AppContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   background: url('https://i.pinimg.com/1200x/7d/4c/0e/7d4c0e8b0abe643184be81ee63bd3673.jpg') no-repeat center center fixed;
//   background-size: cover;
//   width: 100%;
// `;

// const Sidebar = styled.div`
//   width: 220px; /* Reduced sidebar width */
//   background-color: rgba(0, 0, 0, 0.6);  /* Transparent dark background */
//   padding: 20px;
//   color: white;
//   height: 100vh;
//   position: fixed;
//   border-right: 2px solid #333;
// `;

// const SidebarHeader = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 40px;
//   text-align: center;
// `;

// const SearchBox = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 30px;
//   background-color: rgba(255, 255, 255, 0.1);
//   border-radius: 25px;
//   padding: 5px 10px; /* Adjust padding to fit the icon and input */
//   width: 100%; /* Ensure it spans properly */
//   max-width: 400px; /* Optional: Limit the width */
//   box-sizing: border-box;
// `;

// const SearchInput = styled.input`
//   flex-grow: 1;
//   padding: 10px;
//   border: none;
//   border-radius: 25px;
//   background-color: transparent;
//   color: white;
//   font-size: 16px;
//   outline: none;

//   &::placeholder {
//     color: white;
//   }
// `;

// const SearchIcon = styled.div`
//   color: white;
//   font-size: 24px; /* Ensure the icon size fits visually */
//   margin-right: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 50px;
// `;

// const NavLink = styled.div`
//   font-size: 18px;
//   margin-bottom: 20px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   color: white;

//   &:hover {
//     color: #1db954;
//   }

//   & > svg {
//     margin-right: 10px;
//     font-size: 20px;
//   }
// `;

// const MainContent = styled.div`
//   margin-left: 220px; /* Adjusted margin to fit the new sidebar width */
//   padding: 20px;
//   flex-grow: 1;
// `;

// const PodcastShelf = styled.div`
//   display: flex;
//   overflow-x: auto;
//   gap: 20px;
//   padding: 10px 0;
// `;

// const PodcastCard = styled.div`
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 15px;
//   width: 220px;
//   padding: 15px;
//   text-align: center;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const PodcastImage = styled.img`
//   width: 100%;
//   height: 150px;
//   border-radius: 10px;
//   object-fit: cover;
// `;

// const PodcastTitle = styled.h3`
//   color: white;
//   font-size: 16px;
//   margin-top: 10px;
// `;

// const NoResults = styled.p`
//   color: white;
//   font-size: 18px;
//   text-align: center;
//   margin-top: 20px;
// `;



import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import PodcastCard from "./components/PodcastCard";
import podcasts from "./data/podcasts"; // Import podcast data

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppContainer>
      <Sidebar setSearchTerm={setSearchTerm} />
      <MainContent>
        {filteredPodcasts.length > 0 ? (
          filteredPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))
        ) : (
          <NoResults>No podcasts found</NoResults>
        )}
      </MainContent>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: url('https://i.pinimg.com/1200x/7d/4c/0e/7d4c0e8b0abe643184be81ee63bd3673.jpg') no-repeat center center fixed;
  background-size: cover;
  width: 100%;
`;

const MainContent = styled.div`
  margin-left: 220px;
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const NoResults = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;
