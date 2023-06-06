const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({
    title: String,
    genre: String,
    isFiction: Boolean,
    numberOfPages: Number,
    supplier: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    }]
})

const Invoice = mongoose.model('Invoice',invoiceSchema)

module.exports = Invoice