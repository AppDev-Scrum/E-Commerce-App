import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AddProduct.css'; // Import the custom CSS file

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    barcode: '',
    description: '',
    price: '',
    available_quantity: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedProduct = {
      ...product,
      price: parseFloat(product.price),  // Ensure price is a number
      available_quantity: parseInt(product.available_quantity, 10), // Ensure quantity is an integer
    };
    onAddProduct(formattedProduct); // Call the parent function to add the product
    setProduct({ barcode: '', description: '', price: '', available_quantity: '', category: '' });
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBarcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control type="text" name="barcode" value={product.barcode} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={product.description} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control type="number" name="available_quantity" value={product.available_quantity} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" value={product.category} onChange={handleChange} required />
        </Form.Group>

        <Button variant="primary" type="submit">Add Product</Button>
      </Form>
    </div>
  );
};

export default AddProduct;
