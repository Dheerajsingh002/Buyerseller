// src/pages/SellerDashboard.js
import React, { useEffect, useState } from 'react';
import API from '../services/api'; // Import API (default export)
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';
import './SellerDashboard.css'; // Add your CSS import here

const SellerDashboard = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    try {
      const response = await API.get('/properties');
      console.log('Response:', response); // Add this line for debugging
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleAddProperty = async (property) => {
    try {
      const response = await API.post('/properties', property);
      console.log('Add property response:', response); // Add this line for debugging
      // Assuming the response contains the added property data, you may update the state or perform any necessary actions here
      fetchProperties(); // Refresh properties after adding a new one
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="seller-dashboard-container">
      {/* PropertyForm component */}
      <PropertyForm addProperty={handleAddProperty} />
      {/* PropertyList component */}
      <PropertyList properties={properties} />
    </div>
  );
};

export default SellerDashboard;
