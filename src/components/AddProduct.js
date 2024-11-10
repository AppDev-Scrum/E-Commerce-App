import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ecommerce.css';

const AddProduct = () => {
  // State Hooks for Form Fields
  const [productName, setProductName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation before making the request
    if (!productName || !barcode || !description || !price || !quantity || !category) {
      alert('All fields are required.');
      return;
    }

    try {
      // Send the POST request to the API
      const response = await axios.post('/api/products', {
        name: productName,
        barcode,
        description,
        price,
        quantity,
        category,
      });

      // Check the response for success
      if (response.status === 201) {
        alert('Product added successfully!');
        navigate('/view-products'); // Redirect to the product view page after success
      } else {
        // Handle other status codes
        alert('Failed to add product. Please try again.');
      }
    } catch (error) {
      // Handle error, log it and show an alert
      console.error('Error adding product:', error.response ? error.response.data : error.message);
      alert('Failed to add product. Please check the console for details.');
    }
  };

  // Handle cancel action (Navigate back to the product list or any other page)
  const handleCancel = () => {
    navigate('/view-products'); // Or any other route you want to navigate to
  };

  return (
    <Container className="add-container">
      <div className="add-floating-form">
        <h2 className="add-form-heading">Add Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="productName">
            <Form.Control
              type="text"
              placeholder=" "
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              className="add-form-control"
            />
            <Form.Label className="add-form-label">Product Name</Form.Label>
          </Form.Group>

          <Form.Group className="form-group" controlId="barcode">
            <Form.Control
              type="text"
              placeholder=" "
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              required
              className="add-form-control"
            />
            <Form.Label className="add-form-label">Barcode</Form.Label>
          </Form.Group>

          <Form.Group className="form-group" controlId="description">
            <Form.Control
              as="textarea"
              placeholder=" "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="add-form-control"
            />
            <Form.Label className="add-form-label">Description</Form.Label>
          </Form.Group>

          <Form.Group className="form-group" controlId="price">
            <Form.Control
              type="number"
              placeholder=" "
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="add-form-control"
            />
            <Form.Label className="add-form-label">Price</Form.Label>
          </Form.Group>

          <Form.Group className="form-group" controlId="quantity">
            <Form.Control
              type="number"
              placeholder=" "
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="add-form-control"
            />
            <Form.Label className="add-form-label">Quantity</Form.Label>
          </Form.Group>

          <Form.Group className="form-group" controlId="category">
            <Form.Control
              type="text"
              placeholder=" "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="add-form-control"
            />
            <Form.Label className="add-form-label">Category</Form.Label>
          </Form.Group>

          <Button variant="primary" type="submit" className="add-submit-btn">
            Add Product
          </Button>

          {/* Cancel Button */}
          <Button 
            variant="secondary" 
            onClick={handleCancel} 
            className="add-cancel-btn" 
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
