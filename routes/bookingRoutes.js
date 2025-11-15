// import express from "express";
// import Booking from "../models/Booking.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const booking = await Booking.create(req.body);
//     res.json({ message: "Booking saved", booking });
//   } catch (err) {
//     res.status(500).json({ message: "Error saving booking" });
//   }
// });

// export default router;

import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create booking
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json({ message: "Booking saved", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving booking" });
  }
});

// Get all bookings (Admin)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

export default router;
