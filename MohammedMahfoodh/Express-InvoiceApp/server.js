const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')

const passport = require('./lib/passportConfig')

// Import our Routes
const indexRoute = require('./routes/index')
const invoiceRoute = require('./routes/invoices')
const supplierRoute = require('./routes/suppliers')
const authRoute = require('./routes/auth')

//Initialise our app
const app = express()

const PORT = 4000

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret:'Thisisasecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next ) {
    res.locals.currentUser = req.user
    next()
})

// Mount our Routes
app.use('/', indexRoute)
app.use('/', invoiceRoute)
app.use('/', supplierRoute)
app.use('/', authRoute)


app.listen(PORT, () => {
    console.log(`The Invoice is open on port ${PORT}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/theinvoice',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occurred', err)
})