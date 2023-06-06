const mongoose = require('mongoose')

const supplierSchema = mongoose.Schema({
    name: {type: String, default:'Mohammed'},
    email: {type: String, required: true, default: 'someEmail'},
    invoice: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    }]
},{
    // Created at, update at
    timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema)

module.exports = Supplier