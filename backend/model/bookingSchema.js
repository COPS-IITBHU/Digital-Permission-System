const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  venueName: String,
  venueLocation: String,
  timings: String,
  date: Date,
  reason: String,
  organisation: String,
  poc: {
    name: String,
    phone: String,
    email: String
  },
  CheckStatus: String
}, { timestamps: true });

const Booking = new mongoose.model('Booking', bookingSchema);
module.exports = Booking;
