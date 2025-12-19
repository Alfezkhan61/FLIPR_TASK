const Subscriber = require("../models/Subscriber");

// @desc    Subscribe email (User)
// @route   POST /api/subscribers
exports.subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Email already subscribed"
      });
    }

    const subscriber = await Subscriber.create({ email });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      subscriber
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all subscribers (Admin)
// @route   GET /api/subscribers
exports.getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
