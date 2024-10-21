const {
  getVenueByIdService,
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
      const { venueName, venueLocation, seatingCapacity, acAvailable, projectorAvailable } = req.body;
      if (
          !venueName ||
          !venueLocation ||
          !seatingCapacity ||
          !acAvailable ||
          !projectorAvailable
      ) {
          console.log("Missing required venue fields");
          return res.status(400).send("All fields are required");
      }

      const venueData = {
          venueName,
          venueLocation,
          acAvailable,
          projectorAvailable
      };

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

module.exports.getVenueById = async (req,res,next)=>{
  try {
    const { venueId } = req.params;

  if (!venueId) {
    console.log("venue ID not provided");
    return res.status(400).send("venue ID is required");
  }

  const venue = await getVenueByIdService(venueId);
  if (!venue) {
    return res.status(404).send("venue not found");
  }

  return res.status(200).json(venue);
  } catch (error) {
    next(error);
  }
}
  
