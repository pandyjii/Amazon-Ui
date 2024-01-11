import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import DataContaxt from "./hooks/DataContaxt";

const TotalContainer = () => {
  const {
    state: { cart },
  } = useContext(DataContaxt);

  const [TotalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, curr) => acc + Number(Math.floor(curr.price * 72) * curr.qty), 0)
    );
  }, [cart]);

  return (
    <TotalContainerWrapper>
      <Heading>
        <h1>Total Products {cart.length}</h1>
      </Heading>
      <Content>
        <h2>Your Total Amount</h2>
        <p>₹{TotalPrice}.00</p>
      </Content>
    </TotalContainerWrapper>
  );
};

export default TotalContainer;

const TotalContainerWrapper = styled.div`
  padding: 20px;
  background: white;
`;

const Heading = styled.div`
  h1 {
    color: #f3a847;
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 2rem;
    border-bottom: 2px solid #f3a847;
  }
`;
