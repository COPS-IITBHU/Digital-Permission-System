const Booking = require("../model/bookingSchema"); // import Booking model

// Create a new booking
module.exports.createBookingService = async (bookingData) => {
  try {
    const { email, phoneNumber } = bookingData;

    // Check if the email ends with "@itbhu.ac.in"
    if (!email.endsWith("@itbhu.ac.in")) {
      throw new Error("Please use your institute email ID");
    }

    // Validate phone number (example: must be 10 digits and numeric)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      throw new Error("Please provide a valid 10-digit phone number");
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();
    return newBooking;
  } catch (error) {
    throw new Error("Error creating booking: " + error.message);
  }
};

// Get a booking by its ID
module.exports.getBookingById = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId);
    return booking;
  } catch (error) {
    throw new Error("Error retrieving booking: " + error.message);
  }
};

// Get all bookings
module.exports.getAllBookings = async () => {
  try {
    const bookings = await Booking.find({});
    return bookings;
  } catch (error) {
    throw new Error("Error retrieving bookings: " + error.message);
  }
};

// Update a booking by its ID
module.exports.updateBooking = async (bookingId, updatedData) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      updatedData,
      { new: true }
    );
    return updatedBooking;
  } catch (error) {
    throw new Error("Error updating booking: " + error.message);
  }
};

// Delete a booking by its ID
module.exports.deleteBooking = async (bookingId) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    return deletedBooking;
  } catch (error) {
    throw new Error("Error deleting booking: " + error.message);
  }
};

module.exports.getPendingBookingsService = async () => {
  try {
    const pendingBookings = await Booking.find({ status: "pending" });
    return pendingBookings;
  } catch (error) {
    throw new Error("Error retrieving pending bookings: " + error.message);
  }
};

module.exports.updateBookingStatus = async (bookingId, status) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    );
    return updatedBooking;
  } catch (error) {
    throw new Error("Error updating booking status: " + error.message);
  }
};