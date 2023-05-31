// Load Express Module

const express = require("express");

// Invoke Express Router Functionality

const router = express.Router();


// Importing skills Controller
const skillsCtrl = require('../controllers/skills')


// Routes 
// Get - Root Route API
router.get("/skills",skillsCtrl.skills)
router.get("/skills/:id",skillsCtrl.skillsId)


      module.exports = router;