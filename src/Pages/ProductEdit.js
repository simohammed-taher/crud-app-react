import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const [product, setProduct] = useState({});
  const [editedTitle, setEditedTitle] = useState("");
  const { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
        setEditedTitle(product.title); // Set initial edited title
      });
  }, [productID]);

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleSave = () => {
    // Here, you can implement the logic to save the edited title
    // For now, let's just update the product state with the edited title
    setProduct((prevProduct) => ({
      ...prevProduct,
      title: editedTitle,
    }));
  };

  return (
    <>
      <h1>Edit Product Title</h1>
      <input type="text" value={editedTitle} onChange={handleTitleChange} />
      <button onClick={handleSave}>Save</button>
      <h4>Original Title: {product.title}</h4>
    </>
  );
}

export default ProductEdit;
