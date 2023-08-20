import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you sure you want to delete ${product.title}?`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then(() => {
            getAllProducts(); // Refresh the product list
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>Product Page</h1>
      <Link to="/products/add" className="btn btn-success mt-3">
        Add New Product
      </Link>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description.slice(0, 20)}...</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(product)}
                >
                  Delete
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-info btn-sm"
                >
                  View
                </Link>
                <Link
                  to={`/products/Edit/${product.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
