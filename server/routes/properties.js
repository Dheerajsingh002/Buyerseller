const express = require('express');
   const Property = require('../models/Property');
   const router = express.Router();

   router.post('/', async (req, res) => {
     const { title, description, price, location, area, bedrooms, bathrooms, nearbyFacilities, seller } = req.body;

     try {
       const property = new Property({
         title,
         description,
         price,
         location,
         area,
         bedrooms,
         bathrooms,
         nearbyFacilities,
         seller
       });

       await property.save();

       res.status(201).json(property);
     } catch (error) {
       res.status(500).json({ message: 'Server error' });
     }
   });

   router.get('/', async (req, res) => {
     try {
       const properties = await Property.find().populate('seller', 'firstName lastName email phoneNumber');
       res.json(properties);
     } catch (error) {
       res.status(500).json({ message: 'Server error' });
     }
   });

   router.get('/:id', async (req, res) => {
     try {
       const property = await Property.findById(req.params.id).populate('seller', 'firstName lastName email phoneNumber');
       if (!property) {
         return res.status(404).json({ message: 'Property not found' });
       }
       res.json(property);
     } catch (error) {
       res.status(500).json({ message: 'Server error' });
     }
   });

   router.put('/:id', async (req, res) => {
     const { title, description, price, location, area, bedrooms, bathrooms, nearbyFacilities } = req.body;

     try {
       const property = await Property.findById(req.params.id);
       if (!property) {
         return res.status(404).json({ message: 'Property not found' });
       }

       property.title = title || property.title;
       property.description = description || property.description;
       property.price = price || property.price;
       property.location = location || property.location;
       property.area = area || property.area;
       property.bedrooms = bedrooms || property.bedrooms;
       property.bathrooms = bathrooms || property.bathrooms;
       property.nearbyFacilities = nearbyFacilities || property.nearbyFacilities;

       await property.save();

       res.json(property);
     } catch (error) {
       res.status(500).json({ message: 'Server error' });
     }
   });

   router.delete('/:id', async (req, res) => {
     try {
       const property = await Property.findById(req.params.id);
       if (!property) {
         return res.status(404).json({ message: 'Property not found' });
       }

       await property.remove();

       res.json({ message: 'Property removed' });
     } catch (error) {
       res.status(500).json({ message: 'Server error' });
     }
   });

   module.exports = router;