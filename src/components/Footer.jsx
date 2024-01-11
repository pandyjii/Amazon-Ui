import React from "react";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear()
  return <FooterWrapper>Shubham pandey &copy; 2023-{year}</FooterWrapper>;
};

export default Footer;

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 10px 20px;
  font-size: 1.5rem;
  background: black;
  color: white;
`;
