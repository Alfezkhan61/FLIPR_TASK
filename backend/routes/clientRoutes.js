const express = require("express");
const {
  createClient,
  getAllClients
} = require("../controllers/clientcontrollers");

const router = express.Router();

router.post("/", createClient);
router.get("/", getAllClients);

module.exports = router;
