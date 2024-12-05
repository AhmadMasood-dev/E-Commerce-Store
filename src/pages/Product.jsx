import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../features/product/ItemDetail";
function Product() {
  const { id } = useParams();
  return (
    <>
      <ItemDetail id={id} />
    </>
  );
}

export default Product;
