const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    genre: String,
    isFiction: Boolean,
    duration: Number
})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie