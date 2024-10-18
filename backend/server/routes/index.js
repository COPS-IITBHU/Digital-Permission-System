const express = require("express");
const router = express.Router();
const bookingRoutes = require("./booking.routes");
const venueRoutes = require("./venue.routes")

router.use("/bookings", bookingRoutes);
router.use("/venues", venueRoutes)
module.exports = router;
