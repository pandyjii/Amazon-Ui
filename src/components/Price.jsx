import React from "react";
import styled from "styled-components";

const Price = ({ price }) => {
  return (
    <PriceWrapper style={{ color: "black" }}>
      ₹<Rate>{Number(Math.floor(price * 72))}.00 </Rate>
    </PriceWrapper>
  );
};

export default Price;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 5px 0;
`;

const Rate = styled.h2`
  font: 1.3rem;
  line-height: 10px;
`;
