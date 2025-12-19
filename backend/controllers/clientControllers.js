const Client = require("../models/Client");

// @desc    Add new client (Admin)
// @route   POST /api/clients
exports.createClient = async (req, res) => {
  try {
    const { name, designation, description, image } = req.body;

    if (!name || !designation || !description || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const client = await Client.create({
      name,
      designation,
      description,
      image
    });

    res.status(201).json({
      success: true,
      message: "Client created successfully",
      client
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all clients (Landing Page)
// @route   GET /api/clients
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: clients.length,
      clients
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
