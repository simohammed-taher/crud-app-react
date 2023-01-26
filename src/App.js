import Navbar from "./compoenents/Navbar";
import Sidebar from "./compoenents/Sidebar";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Pages/Products';
import Home from './Pages/Home';

function App() {
	return <>
    <Navbar />
    <div className="row">
    <div className="col-2 sidebar">
    <Sidebar />
    </div>
    <div className="col-10">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
    </Routes>
    </div>
    </div>
  </>;
}

export default App;
