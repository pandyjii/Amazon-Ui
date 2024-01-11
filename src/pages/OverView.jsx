import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DataContaxt from "../components/hooks/DataContaxt";
import ProductItem from "../components/ProductItem";

const OverView = () => {
  const [Data, setData] = useState(null);
  const { state } = useContext(DataContaxt);
  const { id } = useParams();

  useEffect(() => {
    const filterFunction = () => {
      const filterData = state.products.filter((i) => {
        const Response = i.id == id;
        return Response;
      });
      setData(filterData);
    };
    return filterFunction();
  }, []);
  return (
    <OverviewWrapper>
      {Data &&
        Data.map((item) => {
          return <ProductItem key={item.id} data={item} />;
        })}
    </OverviewWrapper>
  );
};

export default OverView;

const OverviewWrapper = styled.div`
  padding: 20px;
  height: auto;
  width: 100%;
  display: grid;
  place-content:center;
`;
