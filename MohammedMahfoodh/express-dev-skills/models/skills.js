
      // Load Express Module

const express = require("express");

// Invoke Express Models Functionality

const models = express.Router();


// Importing fake Controller
const fakeCtrl = require('../controllers/skills')


// Routes 
// Get - Root Route API
models.get("/fake",fakeCtrl.fake)
models.get("/fake/:id",fakeCtrl.fakeId)


      module.exports = models;