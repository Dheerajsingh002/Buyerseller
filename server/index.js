const express = require('express');
   const bodyParser = require('body-parser');
   const cors = require('cors');
   const mongoose = require('mongoose');
   const userRoutes = require('./routes/users');
   const propertyRoutes = require('./routes/properties');
   
   const app = express();

   app.use(cors());
   app.use(bodyParser.json());

   // Connect to MongoDB
   mongoose.connect('mongodb://localhost:27017/property-app', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });

   app.use('/api/users', userRoutes);
   app.use('/api/properties', propertyRoutes);

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   