// src/components/PropertyForm.js
import React, { useState } from 'react';
import './PropertyForm.css'; // Add your CSS import here

const PropertyForm = ({ addProperty }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    nearbyFacilities: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addProperty(formData);
      alert('Property added successfully');
      setFormData({
        title: '',
        description: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        nearbyFacilities: ''
      });
    } catch (error) {
      alert('Error adding property: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} value={formData.title} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} value={formData.price} required />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} value={formData.location} required />
      <input type="number" name="bedrooms" placeholder="Bedrooms" onChange={handleChange} value={formData.bedrooms} required />
      <input type="number" name="bathrooms" placeholder="Bathrooms" onChange={handleChange} value={formData.bathrooms} required />
      <input type="number" name="area" placeholder="Area (sq.ft)" onChange={handleChange} value={formData.area} required />
      <input type="text" name="nearbyFacilities" placeholder="Nearby Facilities" onChange={handleChange} value={formData.nearbyFacilities} required />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default PropertyForm;
