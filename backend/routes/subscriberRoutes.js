const express = require("express");
const {
  subscribeEmail,
  getAllSubscribers
} = require("../controllers/subscriberControllers");

const router = express.Router();

// POST - subscribe email
router.post("/", subscribeEmail);

// GET - admin view subscribers
router.get("/", getAllSubscribers);

module.exports = router;
