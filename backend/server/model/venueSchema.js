const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({  
  venueName: String,
  venueLocation: String,
  capacity: Number,
  acAvailable: Boolean,
  projectorAvailable: Boolean
}, { timestamps: true });

const Venue = new mongoose.model('Venue', venueSchema);

module.exports = Venue;
