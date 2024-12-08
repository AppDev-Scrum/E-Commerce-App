import React, { useState } from 'react';
import AddProduct from './components/AddProduct'; // Assuming you have this component
import ProductList from './components/ProductList'; // Assuming you have this component

const App = () => {
  const [products, setProducts] = useState([]);

  // Function to add a new product
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]); // Add new product to the existing list
  };

  // Function to edit a product
  const editProduct = (editedProduct) => {
    setProducts(products.map(product => product.barcode === editedProduct.barcode ? editedProduct : product));
  };

  // Function to delete a product
  const deleteProduct = (barcode) => {
    setProducts(products.filter(product => product.barcode !== barcode)); // Remove product by barcode
  };

  return (
    <div>
      <h1>Product Management</h1>
      <AddProduct onAddProduct={addProduct} />
      <ProductList
        products={products}
        onEdit={editProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
};

export default App;
