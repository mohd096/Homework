const express = require('express')

const router = express.Router()

const supplierController = require('../controllers/suppliers')
const isLoggedIn = require('../lib/isLoggedIn')

router.get('/supplier/add', isLoggedIn , supplierController.supplier_create_get)
router.post('/supplier/add', supplierController.supplier_create_post)
router.get('/supplier/index', supplierController.supplier_index_get)

module.exports = router