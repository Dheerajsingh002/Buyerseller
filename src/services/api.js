// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

export const addProperty = async (property) => {
  try {
    const response = await API.post('/properties', property);
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default API;
