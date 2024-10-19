const express = require("express");
const router = express.Router();
const {
  // getVenueById, // TODO Complete this
  getAllVenues,
  createVenue,
  updateVenue,
  deleteVenue,
} = require("../controllers/venue.controllers");

// Route to get all venues
router.get("/admin/venues", getAllVenues);

//Route to create venues
router.post("/admin/venues", createVenue);

// router.get("/admin/venues/:venueId", getVenueById); //TODO WRITE THIS CONTROLLER THIS IS CURRENTLY UNDEFINED

// Route to update venues
router.put("/admin/venues/:venueId", updateVenue);

// Route to delete venues
router.delete("/admin/venues/delete/:venueId", deleteVenue);

module.exports = router;
