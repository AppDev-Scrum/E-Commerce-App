import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ecommerce.css';

const EditProduct = () => {
  const [product, setProduct] = useState({
    barcode: '',
    description: '',
    price: '',
    quantity: '',
    category: ''
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        if (response.data.success) {
          setProduct(response.data.data);
        } else {
          alert('Product not found');
          navigate('/view-products');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/products/${id}`, product);
      if (response.data.success) {
        alert('Product updated successfully!');
        navigate('/view-products');
      } else {
        alert('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product.');
    }
  };

  const handleCancel = () => {
    navigate('/view-products'); // Navigate back to the view products page
  };

  if (loading) {
    return <p>Loading product data...</p>;
  }

  return (
    <div className="Edit-container">
      <div className="Edit-floating-form">
        <h2 className="Edit-form-heading">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="Edit-form-group">
            <input
              type="text"
              name="barcode"
              value={product.barcode}
              onChange={handleChange}
              id="barcode"
              placeholder=" "
              required
              className="Edit-input-field"
            />
            <label htmlFor="barcode">Barcode</label>
          </div>

          <div className="Edit-form-group">
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              id="description"
              placeholder=" "
              required
              className="Edit-input-field"
            />
            <label htmlFor="description">Description</label>
          </div>

          <div className="Edit-form-group">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              id="price"
              placeholder=" "
              required
              className="Edit-input-field"
            />
            <label htmlFor="price">Price</label>
          </div>

          <div className="Edit-form-group">
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              id="quantity"
              placeholder=" "
              required
              className="Edit-input-field"
            />
            <label htmlFor="quantity">Quantity</label>
          </div>

          <div className="Edit-form-group">
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              id="category"
              placeholder=" "
              required
              className="Edit-input-field"
            />
            <label htmlFor="category">Category</label>
          </div>

          <button type="submit" className="Edit-submit-btn">Update Product</button>

          {/* Cancel Button */}
          <button type="button" onClick={handleCancel} className="Edit-cancel-btn">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
