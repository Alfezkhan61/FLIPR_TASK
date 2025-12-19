const express = require("express");
const {
  createContact,
  getAllContacts
} = require("../controllers/contactControllers");

const router = express.Router();

// POST - submit contact form
router.post("/", createContact);

// GET - admin view contacts
router.get("/", getAllContacts);

module.exports = router;
