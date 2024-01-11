import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationBox = ({ heading, paragraph, link }) => {
  return (
    <NavigationBoxWrapper as={NavLink} to={link}>
      <p>{paragraph}</p>
      <h2>{heading}</h2>
    </NavigationBoxWrapper>
  );
};

export default NavigationBox;

const NavigationBoxWrapper = styled.a`
  color: white;
  p {
    font-size: 0.8rem;
  }
  h2 {
    font-size: 1rem;
    font-weight: 500;
    line-height: 10px;
  }
`;
