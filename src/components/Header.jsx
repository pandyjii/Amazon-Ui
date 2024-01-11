import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavigationBox from "./NavigationBox";
import DataContaxt from "./hooks/DataContaxt";

const Header = () => {
  const {
    state: { cart },
    filterstate: { searchquery },
    filterdispatch,
  } = useContext(DataContaxt);

  const currentpath = useLocation();

  return (
    <HeaderWrapper>
      <NavLink to="/" className="logo">
        <LogoImage
          src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
          alt="amazonlogo"
        />
      </NavLink>
      {currentpath.pathname == "/" && (
        <SearchBox>
          <Input
            value={searchquery}
            onChange={(e) => {
              filterdispatch({
                type: "SEARCHQUERY",
                payload: e.target.value.toLowerCase(),
              });
            }}
            type="text"
            placeholder="Search..."
          />
          <BiSearch />
        </SearchBox>
      )}
      <LastDivWrapper>
        <HiddenBox className="hiddnen">
          <NavigationBox
            link="/"
            heading="Account & Lists"
            paragraph="Hello sing in"
          />
          <NavigationBox link="/" heading="& Orders" paragraph="Returns" />
        </HiddenBox>
        <CartContainer as={NavLink} to="/cart">
          <AiOutlineShoppingCart />
          <CartItem>{cart === null ? 0 : cart.length}</CartItem>
        </CartContainer>
      </LastDivWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: rgb(0, 0, 0);
  padding: 10px 20px;
  color: rgb(255, 255, 255);
  justify-content: space-between;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const LogoImage = styled.img`
  height: 30px;
`;

const SearchBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  svg {
    height: 39px;
    font-size: 3rem;
    cursor: pointer;
    color: rgb(0, 0, 0);
    background: #f3a847;
    padding: 6px 10px;
    border-radius: 0 5px 5px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-row: 2/3;
    grid-column: -3/3;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 6px 15px;
  width: 100%;
`;

const LastDivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: 1.8rem;
    color: black;
  }
  a {
    color: rgb(255, 255, 255);
  }
  @media (max-width: 768px) {
    justify-content: end;
  }
`;

const HiddenBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartContainer = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 12px;
  background: white;
  border-radius: 50px;
  @media (max-width: 768px) {
    justify-content: end;
  }
`;

const CartItem = styled.span`
  color: #000000;
  background: #f3a847;
  border-radius: 50%;
  padding: 1px 8px;
  position: absolute;
  bottom: 32px;
  right: -7px;
`;
