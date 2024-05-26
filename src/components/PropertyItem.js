// components/PropertyItem.js
import React from 'react';

const PropertyItem = ({ property, onDelete }) => {
  return (
    <li>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Area: {property.area} sq.ft</p>
      <p>Nearby Facilities: {property.nearbyFacilities}</p>
      <button onClick={() => onDelete(property._id)}>Delete</button>
    </li>
  );
};

export default PropertyItem;
