import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ecommerce.css';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
          setFilteredProducts(response.data.data);
        } else {
          setProducts([]);
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      setFilteredProducts(filteredProducts.filter((product) => product.id !== id));
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view-product/${id}`);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const results = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.barcode.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(results);
  };

  return (
    <Container className="view-product-container">
      <h2 className="product-list-title">E-Commerce</h2>

      {/* Search Bar */}
      <Form inline className="mb-3 search-bar-container">
        <Form.Control
          type="text"
          placeholder="Search by name or barcode"
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form>

      {/* Add Product Button */}
      <Button onClick={handleAddProduct} variant="primary" className="add-product-button">
        Add Product
      </Button>

      {/* Product Table */}
      <Table striped bordered hover responsive className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Barcode</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.barcode}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleView(product.id)}  // View button
                    className="action-button action-button-info me-2"
                  >
                    View
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(product.id)}
                    className="action-button action-button-warning me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.id)}
                    className="action-button action-button-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewProduct;
