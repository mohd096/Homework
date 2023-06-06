const express = require('express')
const router = express.Router()
const invoiceController = require('../controllers/invoices')
const isLoggedIn = require('../lib/isLoggedIn')


// Call Our API
router.get('/invoice/add', isLoggedIn ,invoiceController.invoice_create_get)
router.post('/invoice/add',invoiceController.invoice_create_post)
router.get('/invoice/index', isLoggedIn ,invoiceController.invoice_index_get)
router.post('/invoice/delete',invoiceController.invoice_delete)
router.get('/invoice/detail', isLoggedIn ,invoiceController.invoice_detail_get)
router.get('/invoice/edit', isLoggedIn ,invoiceController.invoice_edit_get)
router.post('/invoice/edit',invoiceController.invoice_edit_post)

module.exports = router