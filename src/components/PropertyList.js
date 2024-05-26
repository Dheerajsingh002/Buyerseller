// src/components/PropertyList.js
import React from 'react';
import './PropertyList.css'; // Add your CSS import here

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map(property => (
        <div className="property-card" key={property._id}>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Price: {property.price}</p>
          <p>Location: {property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Area: {property.area} sq.ft</p>
          <p>Nearby: {property.nearbyFacilities}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
