// App.js
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import './style.css';  // Optional for custom styling

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple Smoothie"},
    { id: 2, name: "Mango Smoothie"},
    { id: 3, name: "Banana Smoothie"},
  ]);

  const handleView = (id) => {
    alert(`Viewing product with ID: ${id}`);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mt-4">
      <h1>Product List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th style={{width: '200px'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <div className="d-flex">
                  <Button variant="primary" className="me-2" onClick={() => handleView(product.id)}>
                    View
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(product.id)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;
