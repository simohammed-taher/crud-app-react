import Navbar from "./compoenents/Navbar";
import Sidebar from "./compoenents/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import ProductEdit from "./Pages/ProductEdit";

function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/:productID" element={<ProductDetails />} />
            <Route path="products/edit/:productID" element={<ProductEdit />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
