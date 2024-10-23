import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ecommerce.css';
const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
          setFilteredProducts(response.data.data); // Set filtered products initially to all products
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
      setFilteredProducts(filteredProducts.filter((product) => product.id !== id)); // Update filtered products
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`); 
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Filter products based on the search term
    const results = products.filter(product => 
      product.name.toLowerCase().includes(value.toLowerCase()) || // Search by name
      product.barcode.toLowerCase().includes(value.toLowerCase()) // Search by barcode
    );
    
    setFilteredProducts(results); // Update filtered products
  };

  return (
    <Container>
  <h2 className="product-list-title">Product List</h2>
  <Form inline className="mb-3">
    <Form.Control
      type="text"
      placeholder="Search by name or barcode"
      className="search-bar" // Apply the search-bar class
      value={searchTerm}
      onChange={handleSearch}
    />
  </Form>
  <Button onClick={handleAddProduct} variant="primary" className="add-product-button"> 
    Add Product
  </Button>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
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
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.barcode}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.category}</td>
            <td>
              <Button
                variant="warning"
                onClick={() => handleEdit(product.id)}
                className="me-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="8" className="text-center">
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
