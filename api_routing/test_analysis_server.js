const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const performanceRoutes = require('./routes/analyzePerformance'); // Import the route
app.use('/api', performanceRoutes); // Use the route


const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/performanceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', analyzePerformanceRoutes); 
// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


