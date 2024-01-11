import styled from "styled-components";

export const BackGround = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
`;

export const CenterDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: ${({ f }) => f};
  padding: ${({ p }) => p};
  color: rgb(0, 0, 0);
  @media (max-width: 468px) {
    font-size: 0.8rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ f }) => f};
  padding: ${({ p }) => p};
  color: rgb(0, 0, 0);
  @media (max-width: 468px) {
    font-size: 0.8rem;
  }
`;
