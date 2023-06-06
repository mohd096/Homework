const Invoice = require('../models/Invoice')
const Supplier = require('../models/Supplier')


exports.invoice_create_get = async (req, res) => {
   try {
    const suppliers = await Supplier.find()
    res.render('invoice/add',{suppliers})

   }catch (error) {
    console.log(error.message)
   }
       
}

exports.invoice_create_post = (req, res) => {
    console.log(req.body)


    const invoice = new Invoice(req.body)
    invoice.save()
        .then(() => {
            console.log('Your invoice has been saved')
            return res.redirect('/invoice/index')
        })
        .catch((err) => {
            console.log('an error occurred', err)
        })
}

exports.invoice_index_get = async (req, res) => {
    try{
        const invoices = await Invoice.find().populate('author')
        console.log(invoices)
        res.render('invoice/index', { invoices })
        // res.render('invoice/index', { invoices: invoices }) //does the same thing
    } catch (error) {
        console.log(error.message)
        res.send('HMMMMM Something is not right')
    }

    // invoice.find().then((invoices) =>{
    //     console.log(invoices)
    //     res.render('invoice/index', {invoices})
    // }).catch((error) => {
    //     console.log(error.message)
    //     res.send('HMMMMM Something is not right')
    // })

}

exports.invoice_delete = async (req, res) => {
    console.log(req.query.id)
    try {
        // Try to execute this code
        await Invoice.findByIdAndDelete(req.query.id)
        return res.redirect('/invoice/index')
    } catch (error) {
        // Execute this if there is an error
        console.log(error.message)
        res.send(error.message)
    } finally {
        // Execute this code no matter what
        console.log('We are in the finally block')
    }
}

exports.invoice_detail_get = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.query.id)
        res.render('invoice/detail', {invoice} )
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.invoice_edit_get = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.query.id)
        res.render('invoice/edit', {invoice})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.invoice_edit_post = async (req, res) => {
    try {
        console.log(req.body.id)
        await Invoice.findByIdAndUpdate(req.body.id, req.body)
        res.redirect('/invoice/index')
    } catch (error) {
        console.log(error.message)
    }
}