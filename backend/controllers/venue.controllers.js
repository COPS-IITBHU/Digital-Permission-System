const {
    getAllVenuesService,
    createVenueService,
    updateVenueService,
    deleteVenueService,
  } = require("../services/venue.service");
  
  module.exports.getAllVenues = async (req, res, next) => {
    try {
      const venues = await getAllVenuesService();
      return res.status(200).json(venues);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.createVenue = async (req, res, next) => {
    try {
      const venueData = req.body;
      const newVenue = await createVenueService(venueData);
      return res.status(201).json(newVenue);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.updateVenue = async (req, res, next) => {
    try {
      const { venueId } = req.params;
      const venueData = req.body;
      const updatedVenue = await updateVenueService(venueId, venueData);
      return res.status(200).json(updatedVenue);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.deleteVenue = async (req, res, next) => {
    try {
      const { venueId } = req.params;
      const deletedVenue = await deleteVenueService(venueId);
      return res.status(200).json(deletedVenue);
    } catch (error) {
      next(error);
    }
  };
  