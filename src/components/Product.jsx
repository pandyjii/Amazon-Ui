import React, { useContext } from "react";
import styled from "styled-components";
import DataContaxt from "./hooks/DataContaxt";
import ProductItem from "./ProductItem";
import { CenterDiv } from "./styledcomponents/Component";

const Product = () => {
  const {
    state: { products },
    filterstate: { searchquery },
  } = useContext(DataContaxt);

  const filterProducts = () => {
    let filterproductsitem = products;
    if (searchquery !== "") {
      filterproductsitem = filterproductsitem.filter((item) =>
        item.title.toLowerCase().includes(searchquery)
      );
    }
    return filterproductsitem;
  };

  return (
    <CenterDiv>
      <ProductWrapper>
        {filterProducts().length === 0 ? (
          <NoProducts>No Products</NoProducts>
        ) : (
          filterProducts() &&
          filterProducts().map((item) => {
            return <ProductItem key={item.id} data={item} />;
          })
        )}
      </ProductWrapper>
    </CenterDiv>
  );
};

export default Product;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  transform: translateY(-137px);
  padding: 0 10px;
  @media (max-width: 768px) {
    transform: translateY(-50px);
  }
  @media (max-width: 468px) {
    transform: translateY(-20px);
  }
`;

const NoProducts = styled.h2`
  text-align: center;
  padding: 10px;
  background: #f3a847;
  font-weight: 500;
  color: white;
  border-radius: 5px;
`;
