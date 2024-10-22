import React, { useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './style.css';  

const ProductList = () => {
  const navigate = useNavigate();  // Use navigate to route to the EditProduct page

  const [products, setProducts] = useState([
    { id: 1, name: "Apple Smoothie", category: "Fruits", price: 100, description: "A delicious apple smoothie", barcode: "12345", quantity: 10 },
    { id: 2, name: "Mango Smoothie", category: "Fruits", price: 150, description: "A refreshing mango smoothie", barcode: "12346", quantity: 20 },
    { id: 3, name: "Banana Smoothie", category: "Fruits", price: 120, description: "A creamy banana smoothie", barcode: "12347", quantity: 15 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');  // Add search state

  const handleView = (product) => {
    // Navigate to EditProduct and pass the product details as state
    navigate('/edit', { state: { product } });
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Filter products by search query (matches name or category)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <Row className="justify-content-center mb-4">
        <Col md="auto" className="text-center">
          <h1>Product List</h1>
        </Col>
      </Row>

      <Row className="justify-content-between align-items-center mb-4">
        <Col md="4" className="ms-auto">
          <Form.Control
            type="text"
            placeholder="Search by product name or category"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  // Update search query
          />
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th className="th_action" style={{ width: '200px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>
                <div className="d-flex">
                  <Button variant="primary" className="me-2" onClick={() => handleView(product)}>
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
