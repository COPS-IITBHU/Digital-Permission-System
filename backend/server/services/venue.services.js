const Venue = require("../model/venueSchema"); 

module.exports.getAllVenuesService = async () => {
  try {
    const venues = await Venue.find({});
    return venues;
  } catch (error) {
    throw new Error("Error retrieving venues: " + error.message);
  }
};

module.exports.createVenueService = async (venueData) => {
  try {
    const newVenue = new Venue(venueData);
    await newVenue.save();
    return newVenue;
  } catch (error) {
    throw new Error("Error creating venue: " + error.message);
  }
};

module.exports.updateVenueService = async (venueId, venueData) => {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(venueId, venueData, {
      new: true,
    });
    return updatedVenue;
  } catch (error) {
    throw new Error("Error updating venue: " + error.message);
  }
};

module.exports.deleteVenueService = async (venueId) => {
  try {
    const deletedVenue = await Venue.findByIdAndDelete(venueId);
    return deletedVenue;
  } catch (error) {
    throw new Error("Error deleting venue: " + error.message);
  }
};
