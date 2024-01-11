import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styled from "styled-components";
const RatingComponent = ({ rating }) => {
  const RatingNumber = Math.floor(rating);

  return (
    <RatingWrapper>
      <p>Rating</p>
      {[...Array(RatingNumber)].map((item, index) => {
        return <AiFillStar key={index} />;
      })}
    </RatingWrapper>
  );
};

export default RatingComponent;

const RatingWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  svg {
    color: #ffc74b;
  }
`;
