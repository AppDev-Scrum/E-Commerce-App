// src/App.js
import React from 'react'; // Import React first
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import ProductDetails from './components/ProductDetails';
import ViewProduct from './components/ViewProduct';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/view-products" element={<ViewProduct />} />
        <Route path="/view-product/:id" element={<ProductDetails />} />
        <Route path="/delete-product/:id" element={<DeleteProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

