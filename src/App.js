// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './features/style.css';
import LogIn from "./features/login";
import Registration from "./features/registration";
import Dashboard from "./features/dashboard";
import AddProduct from "./features/addProduct";
import EditProduct from "./features/editProduct";
import ProductList from "./features/viewProduct";

function App() {
  return (
    
    <>
      {/* <LogIn/>
      <Registration/> */}
      {/* <AddProduct/> */}
      {/* <EditProduct/> */}
      {/* <ProductList/> */}


      {/* // The Router must wrap the entire app to provide routing context */}
      <Router>
        <Routes>
          <Route exact path = "/" element = {<LogIn />} />
          <Route path = "/registration" element = {<Registration />} />
          <Route exact path = "/edit" element = {<EditProduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/view" element={<ProductList />} />

        </Routes>
      </Router>

    </>

  );
}

export default App;
