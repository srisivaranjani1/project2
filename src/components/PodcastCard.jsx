// // import React from "react";
// import styled from "styled-components";

// const PodcastCard = ({ podcast }) => {
//   return (
//     <Card>
//       <Image src={podcast.image} alt={podcast.title} />
//       <Title>{podcast.title}</Title>
//     </Card>
//   );
// };

// export default PodcastCard;

// // Styles
// const Card = styled.div`
//   background-color: rgba(255, 255, 255, 0.1);
//   border-radius: 10px;
//   padding: 15px;
//   width: 220px;
//   text-align: center;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 150px;
//   border-radius: 10px;
//   object-fit: cover;
// `;

// const Title = styled.h3`
//   color: ${({ theme }) => theme.colors.lightText};
//   margin-top: 10px;
//   font-size: 16px;
// `;



import React from "react";
import styled from "styled-components";

const PodcastCard = ({ podcast }) => {
  return (
    <Card>
      <Image src={podcast.image} alt={podcast.title} />
      <Title>{podcast.title}</Title>
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

