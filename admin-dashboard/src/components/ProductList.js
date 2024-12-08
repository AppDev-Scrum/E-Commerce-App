import React, { useState, useEffect } from 'react';
import { Table, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import './ProductList.css'; // Import the custom CSS file

const ProductList = ({ products, onEdit, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Update filteredProducts when products or searchQuery changes
  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [products, searchQuery]); // Dependency array ensures updates

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (criteria) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (criteria === 'price') {
        return a.price - b.price;
      } else if (criteria === 'stock') {
        return a.available_quantity - b.available_quantity;
      } else if (criteria === 'category') {
        // Sorting by category alphabetically
        return a.category.localeCompare(b.category);
      }
    });
    setFilteredProducts(sorted);
  };

  return (
    <div className="product-list-container">
      <InputGroup className="mb-3 search-input-group">
        <FormControl
          placeholder="Search by description"
          value={searchQuery}
          onChange={handleSearch}
        />
      </InputGroup>
      
      <DropdownButton variant="secondary" id="dropdown-basic-button" title="Sort By">
        <Dropdown.Item onClick={() => handleSort('price')}>Price</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('stock')}>Stock</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSort('category')}>Category</Dropdown.Item> {/* Added category sort */}
      </DropdownButton>

      <Table striped bordered hover className="product-list-table mt-3">
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.barcode}>
              <td>{product.barcode}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.available_quantity}</td>
              <td>{product.category}</td>
              <td>
                <Button variant="primary" onClick={() => onEdit(product)}>Edit</Button>
                <Button variant="danger" className="ml-2" onClick={() => onDelete(product.barcode)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
