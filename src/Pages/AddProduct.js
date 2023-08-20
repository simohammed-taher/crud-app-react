import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  let navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();

    //     axios
    //       .post("http://localhost:9000/products", {
    //         title,
    //         price,
    //         description,
    //       })
    //       .then((response) => {
    //         console.log(response.data);
    //         navigate("/products"); // Navigate to the products page
    //       })
    //       .catch((error) => {
    //         console.error("Error adding product:", error);
    //       });
    //   };

    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      // then((res) => res.json());
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };
  console.log("title");
  console.log("price");
  console.log("description");

  return (
    <form onSubmit={formSubmit}>
      <div className="mb-3">
        <label htmlFor="productTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="productTitle"
          placeholder="Product Title"
          aria-describedby="Product Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          placeholder="Product Price"
          aria-describedby="Product Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productDescription" className="form-label">
          description
        </label>
        <input
          type="text"
          className="form-control"
          id="productdescription"
          placeholder="Product description"
          aria-describedby="Product description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Prodect
      </button>
    </form>
  );
}

export default AddProduct;
