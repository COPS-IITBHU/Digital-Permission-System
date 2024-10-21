const express = require("express");
const router = express.Router();
const bookingRoutes = require("./booking.routes");
const venueRoutes = require("./venue.routes");
const mailRoutes = require('./mail.routes');

// Mounting Routes
router.use("/bookings", bookingRoutes);
router.use("/venues", venueRoutes);
router.use("/mail", mailRoutes);

module.exports = router;
