import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Alert } from 'react-bootstrap';
import './ecommerce.css';
const DeleteProduct = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const [product, setProduct] = useState(null); // State to hold product details
  const [error, setError] = useState(null); // State to hold error messages
  const [deleted, setDeleted] = useState(false); // State to check if product was deleted
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`); // Fetch product details
        setProduct(response.data.data); // Set product details
      } catch (error) {
        setError('Failed to fetch product'); // Set error message if fetching fails
      }
    };

    fetchProduct(); // Call the fetch function
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${id}`); // Delete the product
      setDeleted(true); // Set deleted state to true
      // Optionally navigate back to the product list or another page
      setTimeout(() => {
        navigate('/products'); // Redirect to products list after deletion
      }, 2000);
    } catch (error) {
      setError('Failed to delete product'); // Set error message if deleting fails
    }
  };

  if (deleted) {
    return <Alert variant="success">Product deleted successfully! Redirecting...</Alert>; // Success message
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>; // Error message
  }

  return (
    <div>
      {product ? (
        <div>
          <h2>Are you sure you want to delete this product?</h2>
          <p><strong>Barcode:</strong> {product.barcode}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <Button variant="danger" onClick={handleDelete}>Delete Product</Button>
        </div>
      ) : (
        <p>Loading product details...</p> // Loading state
      )}
    </div>
  );
};

export default DeleteProduct;
