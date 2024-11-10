import React, { useEffect, useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ecommerce.css';

const ProductDetails = () => {
  const { id } = useParams();  // Get product ID from URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);  // Set loading to true before fetching data
      try {
        console.log('Fetching product with id:', id);
        const response = await axios.get(`/api/products/${id}`);
        console.log('Fetched product data:', response.data); // Log response
        setProduct(response.data.data);  // Set product state if data is present
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchProduct();
  }, [id]);

  const handleBack = () => {
    navigate('/view-products');  // Navigate back to product list
  };

  if (loading) {
    return <p>Loading product details...</p>;  // Show loading message while fetching
  }

  return (
    <Container className="mt-5">
      {product ? (
        <Card className="shadow-lg p-4">
          <Card.Body>
            <Card.Title className="card-title">Product Details</Card.Title>
            <Card.Subtitle className="card-subtitle mb-2">
              {product.name}
            </Card.Subtitle>
            <Card.Text className="card-text">
              <strong>Barcode:</strong> {product.barcode}
            </Card.Text>
            <Card.Text className="card-text">
              <strong>Description:</strong> {product.description}
            </Card.Text>
            <Card.Text className="card-text">
              <strong>Price:</strong> ${product.price}
            </Card.Text>
            <Card.Text className="card-text">
              <strong>Quantity:</strong> {product.quantity}
            </Card.Text>
            <Card.Text className="card-text">
              <strong>Category:</strong> {product.category}
            </Card.Text>

            <Button variant="secondary" onClick={handleBack} className="back-button">
              Back to Product List
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>No product details found.</p>  // If no product is found
      )}
    </Container>
  );
};

export default ProductDetails;
