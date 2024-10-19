const Venue = require("../models/venue.model.js");

// Create a new venue
module.exports.createVenueService = async (venueData) => {
  try {
    const { venueName, venueLocation, seatingCapacity, acAvailable, projectorAvailable } = venueData;

    //checking if venue already exists
    const existingVenue = await Venue.findOne({venueName}) 

    if(existingVenue){
        throw new Error("Venue already Exists");
    }

    const newVenue = await Venue.create({
        venueName, 
        venueLocation, 
        seatingCapacity, 
        acAvailable, 
        projectorAvailable
    })

    //checking if the venue has actually been created or not
    const createdVenue = await Venue.findById(newVenue._id) 

    if(!createdVenue){
        throw new Error("Something went wrong while creating venue")
    }

    return newVenue;

  } catch (error) {
    throw new Error("Error creating venue: " + error.message);
  }
};

// Get a venue by its ID
module.exports.getVenueByIdService = async (VenueId) => {
  try {
    const venue = await Venue.findById(VenueId);
    if(!venue){
        throw new Error("venue not found")
    }
    return venue;
  } catch (error) {
    throw new Error("Error retrieving venue: " + error.message);
  }
};

// Get all venues
module.exports.getAllVenuesService = async () => {
  try {
    const venues = await Venue.find({});
    return venues;
  } catch (error) {
    throw new Error("Error retrieving venue: " + error.message);
  }
};

// Update a Venue
module.exports.updateVenueService= async (venueId, updatedData) => {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(
      venueId,
      updatedData,
      { new: true }
    );
    return updatedVenue;
  } catch (error) {
    throw new Error("Error updating venue: " + error.message);
  }
};

// Delete a venue by its ID
module.exports.deleteVenueService = async (venueId) => {
  try {
    const deletedVenue = await Venue.findByIdAndDelete(venueId);
    return deletedVenue;
  } catch (error) {
    throw new Error("Error deleting venue: " + error.message);
  }
};
