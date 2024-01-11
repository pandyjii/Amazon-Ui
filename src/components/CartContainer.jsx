import React, { useContext } from "react";
import styled from "styled-components";
import Cartitem from "./Cartitem";
import DataContaxt from "./hooks/DataContaxt";

const CartContainer = () => {
  const {
    state: { cart },
  } = useContext(DataContaxt);

  return (
    <CartContainerWrapper>
      {cart.length === 0 ? (
        <EmptyCart>Cart is empty please add some product</EmptyCart>
      ) : (
        cart.map((item) => {
          return <Cartitem key={item.id} data={item} />;
        })
      )}
    </CartContainerWrapper>
  );
};

export default CartContainer;

const CartContainerWrapper = styled.div`
  padding: 20px;
`;

const EmptyCart = styled.h2`
  text-align: center;
  padding: 10px;
  background: #f3a847;
  font-weight: 500;
  color: white;
  border-radius: 5px;
`;
