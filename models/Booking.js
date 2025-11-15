import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  checkIn: String,
  checkOut: String,
  guests: Number,
  roomType: String,
});

export default mongoose.model("Booking", bookingSchema);
