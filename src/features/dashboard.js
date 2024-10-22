import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    
    <div className = "dashBoard" style={{ textAlign: 'center', marginTop: '200px' }}>
      <h1>Dashboard</h1>
      <p className = "dashboardLabel">Select an action below:</p>
        {/* Add navigation buttons */}
      <Link to="/add">
        <button className="btn btn-primary">Add Product</button>
      </Link>
        {' '}
      <Link to="/view">
        <button className="btn btn-secondary">View Product</button>
      </Link>
 
    </div>
    
  );
};

export default Dashboard;
