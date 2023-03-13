import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productID } = useParams();
  return (
    <div>
      <h1>ProductDetails </h1>
      <p>ID: {productID}</p>
    </div>
  );
};

export default ProductDetails;
