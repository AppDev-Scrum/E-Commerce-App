// src/AddProduct.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        barcode: '',
        quantity: 1,
        price: '',
        category: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleQuantityChange = (change) => {
        setFormData((prevData) => ({
            ...prevData,
            quantity: Math.max(1, prevData.quantity + change) // Prevent quantity from going below 1
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form after submission if needed
    };

    return (
        <div>
            <h1 className='addProductlbl'>ADD PRODUCT</h1>
            <Container className="product-details-container">
                <div className="left-panel">
                    <Form.Group controlId="formDescription">
                        <Form.Label className="form-label">Product Description:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={15}
                            placeholder="Enter product description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </div>
                <div className="right-panel">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formProductName">
                            <Form.Label className="form-label">Product Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBarcode">
                            <Form.Label className="form-label">Barcode:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter barcode"
                                name="barcode"
                                value={formData.barcode}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPrice">
                            <Form.Label className="form-label">Price:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                min="0"
                                step="0.01"
                            />
                        </Form.Group>

                        <Form.Group controlId="formCategory">
                            <Form.Label className="form-label">Category:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formQuantity" className="quantity">
                            <Form.Label className="form-label">Quantity:</Form.Label>
                            <div>
                                <Button variant="secondary" onClick={() => handleQuantityChange(-1)}>-</Button>
                                <span style={{ margin: '0 10px' }}>{formData.quantity}</span>
                                <Button variant="secondary" onClick={() => handleQuantityChange(1)}>+</Button>
                            </div>
                        </Form.Group>

                        <div className="text-center" style={{ marginTop: '20px' }}>
                            <Button variant="save" type="submit">SAVE</Button>
                            <Button variant="cancel" className="ml-2">CANCEL</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        
        </div>    
    );
};

export default AddProduct;
