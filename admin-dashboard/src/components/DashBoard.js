import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const Dashboard = () => {
  const [products, setProducts] = useState([
    // Example product data
    { barcode: '123', description: 'Product 1', price: 50, available_quantity: 100, category: 'Category 1' },
    { barcode: '124', description: 'Product 2', price: 75, available_quantity: 150, category: 'Category 2' }
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.barcode === updatedProduct.barcode ? updatedProduct : p));
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (barcode) => {
    setProducts(products.filter(p => p.barcode !== barcode));
  };

  return (
    <div>
      <h1>Product Management</h1>
      
      {/* Conditionally render AddProduct or EditProduct form */}
      {selectedProduct ? (
        <EditProduct product={selectedProduct} onUpdateProduct={handleUpdateProduct} onCancel={() => setSelectedProduct(null)} />
      ) : (
        <AddProduct onAddProduct={handleAddProduct} />
      )}

      {/* Display the Product List */}
      {products.length === 0 ? (
        <p>No products available. Please add some products.</p>
      ) : (
        <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
      )}
    </div>
  );
};

export default Dashboard;
