const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')

// Import our Routes
const indexRoute = require('./routes/index')
const movieRoute = require('./routes/movies')

//Initialise our app
const app = express()

const PORT = 4000

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: true
}))
// Mount our Routes
app.use('/', indexRoute)
app.use('/', movieRoute)


app.listen(PORT, () => {
    console.log(`The Movies is open on port ${PORT}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/theMovies',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occurred', err)
})