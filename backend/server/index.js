const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Importing Routers
const mailRouter = require('./routes/mail');

// Loading the env variables
dotenv.config();

const app = express();
const PORT = 5000;

// Loading routers on the app
app.use('/api/mail', mailRouter)

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express backend');
});

// MongoDB connection (add your MongoDB URL)
mongoose.connect(process.env.MONGOURL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});