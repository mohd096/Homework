const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

// Call Our API
router.get('/',indexController.index_get)

module.exports = router