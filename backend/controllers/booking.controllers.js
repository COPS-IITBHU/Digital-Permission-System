const {
  createBooking,
  getBookingById,
  getAllBookings,
  updateBooking,
  deleteBooking,
} = require("../services/booking.service");

// Create Booking
module.exports.createBooking = async (req, res, next) => {
  try {
    const {
      venueName,
      venueLocation,
      timings,
      date,
      reason,
      organisation,
      poc,
      phoneNumber,
      email,
    } = req.body;

    // Validate required fields
    if (
      !venueName ||
      !venueLocation ||
      !timings ||
      !date ||
      !reason ||
      !organisation ||
      !poc ||
      !phoneNumber ||
      !email
    ) {
      console.log("Missing required booking information");
      return res.status(400).send("All fields are required");
    }

    const bookingData = {
      venueName,
      venueLocation,
      timings,
      date,
      reason,
      organisation,
      poc,
      phoneNumber,
      email,
    };

    const newBooking = await createBooking(bookingData);
    return res.status(201).json(newBooking);
  } catch (error) {
    next(error);
  }
};

// Get Booking by ID
module.exports.getBookingById = async (req, res, next) => {
  try {
    const { bookingId } = req.params;

    if (!bookingId) {
      console.log("Booking ID not provided");
      return res.status(400).send("Booking ID is required");
    }

    const booking = await getBookingById(bookingId);
    if (!booking) {
      return res.status(404).send("Booking not found");
    }

    return res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
};

// Get All Bookings
module.exports.getAllBookings = async (req, res, next) => {
  try {
    const bookings = await getAllBookings();
    return res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

// Update Booking
module.exports.updateBooking = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const {
      venueName,
      venueLocation,
      timings,
      date,
      reason,
      organisation,
      poc,
      phoneNumber,
      email,
    } = req.body;

    if (!bookingId) {
      console.log("Booking ID not provided");
      return res.status(400).send("Booking ID is required");
    }

    const updatedBookingData = {
      venueName,
      venueLocation,
      timings,
      date,
      reason,
      organisation,
      poc,
      phoneNumber,
      email,
    };

    const updatedBooking = await updateBooking(bookingId, updatedBookingData);
    return res.status(200).json(updatedBooking);
  } catch (error) {
    next(error);
  }
};

// Delete Booking
module.exports.deleteBooking = async (req, res, next) => {
  try {
    const { bookingId } = req.body;

    if (!bookingId) {
      console.log("Booking ID not provided");
      return res.status(400).send("Booking ID is required");
    }

    const deletedBooking = await deleteBooking(bookingId);
    return res.status(200).json(deletedBooking);
  } catch (error) {
    next(error);
  }
};
