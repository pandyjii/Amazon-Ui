import styled from "styled-components";
import CartContainer from "../components/CartContainer";
import TotalContainer from "../components/TotalContainer";

const Cart = () => {
  return (
    <CartWrapper className="cart">
      <CartContainer />
      <TotalContainer />
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-between;
`;
