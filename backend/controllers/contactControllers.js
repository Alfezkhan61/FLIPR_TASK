const Contact = require("../models/Contact");

// @desc    Submit contact form (User)
// @route   POST /api/contacts
exports.createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const contact = await Contact.create({
      fullName,
      email,
      mobile,
      city
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all contact responses (Admin)
// @route   GET /api/contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
