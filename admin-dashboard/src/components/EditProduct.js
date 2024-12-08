import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditProduct = ({ product, onUpdateProduct, onCancel }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(updatedProduct);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBarcode">
        <Form.Label>Barcode</Form.Label>
        <Form.Control type="text" name="barcode" value={updatedProduct.barcode} onChange={handleChange} disabled />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={updatedProduct.description} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" value={updatedProduct.price} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formQuantity">
        <Form.Label>Available Quantity</Form.Label>
        <Form.Control type="number" name="available_quantity" value={updatedProduct.available_quantity} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" name="category" value={updatedProduct.category} onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit">Update Product</Button>
      <Button variant="secondary" onClick={onCancel} className="ml-2">Cancel</Button>
    </Form>
  );
};

export default EditProduct;
