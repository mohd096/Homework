const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({
    itemName: String,
    quantity: Number,
    paid: Boolean,
    amount: Number,
    supplier: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    }]
})

const Invoice = mongoose.model('Invoice',invoiceSchema)

module.exports = Invoice