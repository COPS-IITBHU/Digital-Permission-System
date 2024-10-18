const express = require("express");
const router = express.Router();
const {
  getVenueById,
  getAllVenues,
  createVenue,
  updateVenue,
  deleteVenue,
} = require("../../controllers/venue.controllers");

router.get("/admin/venues", getAllVenues);
router.post("/admin/venues", createVenue);
router.get("/admin/venues/:venueId", getVenueById);
router.post("/admin/venues/:venueId", updateVenue);
router.post("/admin/venues/delete/:venueId", deleteVenue);

module.exports = router;
