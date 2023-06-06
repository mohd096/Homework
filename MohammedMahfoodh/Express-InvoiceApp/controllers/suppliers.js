const Supplier = require('../models/Supplier')
exports.supplier_create_get = (req, res) => {
    res.render('supplier/add')
}

exports.supplier_create_post = async (req, res) => {
    try{
        console.log(req.body)
        const supplier = new Supplier(req.body)

        await supplier.save()
    } catch (error) {
        console.log(error.message)
    }
}

exports.supplier_index_get = async (req, res) => {
    try{
        console.log(req.body)
        const suppliers = await Supplier.find()
        res.render('supplier/index',{suppliers})
    } catch (error) {
        console.log(error.message)
    }
}
