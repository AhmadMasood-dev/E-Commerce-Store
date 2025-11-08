import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../features/product/ItemDetail";
import { Toaster } from "react-hot-toast";
function Product() {
  const { id } = useParams();
  return (
    <>
      <ItemDetail id={id} />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default Product;
