import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ProductReducers, { FilterProducts } from "../reducers/ProductReducers";
import DataContaxt from "./DataContaxt";

const DataState = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducers, {
    products: [],
    cart: [],
  });

  const [filterstate, filterdispatch] = useReducer(FilterProducts, {
    searchquery: "",
  });

  const FetchApi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({ type: "ALL_PRODUCTS", payload: res.data });
        dispatch({ type: "SEARCH", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    return FetchApi();
  }, []);

  return (
    <DataContaxt.Provider
      value={{ state, dispatch, filterstate, filterdispatch }}
    >
      {children}
    </DataContaxt.Provider>
  );
};

export default DataState;
