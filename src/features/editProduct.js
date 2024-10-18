// src/AddProduct.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const EditProduct = () => {

    return (
        <div>
            <h1 className='addProductlbl'>EDIT PRODUCT</h1>
            <Container className="product-details-container">
                <div className="left-panel">
                    <Form.Group controlId="formDescription">
                        <Form.Label className="form-label">Product Description:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={15}
                            placeholder="Enter product description"
                            name="description"
                            required
                        />
                    </Form.Group>
                </div>
                <div className="right-panel">
                    <Form>
                        <Form.Group controlId="formProductName">
                            <Form.Label className="form-label">Product Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                name="productName"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBarcode">
                            <Form.Label className="form-label">Barcode:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter barcode"
                                name="barcode"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPrice">
                            <Form.Label className="form-label">Price:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                name="price"
                                required
                                min="0"
                                value = {0}
                                step="0.01"
                            />
                        </Form.Group>

                        <Form.Group controlId="formCategory">
                            <Form.Label className="form-label">Category:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product category"
                                name="category"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formQuantity" className="quantity">
                            <Form.Label className="form-label">Quantity:</Form.Label>
                            <div>
                                <Button variant="secondary">-</Button>
                                <span style={{ margin: '0 10px' }}>0</span>
                                <Button variant="secondary">+</Button>
                            </div>
                        </Form.Group>

                        <div className="text-center" style={{ marginTop: '20px' }}>
                            <Button variant="save" type="submit">SAVE</Button>
                            <Button variant="cancel" className="ml-2">CANCEL</Button>
                            <Button variant="danger" type="submit">DELETE</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        
        </div>    
    );
};

export default EditProduct;
