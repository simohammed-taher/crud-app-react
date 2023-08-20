import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { productID } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((product) => {
        setProduct(product);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productID]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.price} $</h2>
      <h3>{product.description}</h3>
    </>
  );
}

export default ProductDetails;
