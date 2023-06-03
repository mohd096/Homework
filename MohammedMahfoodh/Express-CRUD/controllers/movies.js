const Movie = require('../models/Movie')

exports.movie_create_get = (req, res) => {
    res.render('movie/add')
}
exports.movie_create_post = (req, res) => {
    console.log(req.body)
    const movie = new Movie(req.body)

    movie.save()
    .then(() => {
        console.log('Your Movie Has Been Saved')
    })
    .catch((err) => {
        console.log('an Error Occured')
    })
}

exports.movie_index_post = async (req, res) => {
    const movies = await Movie.find()
    console.log(movies)
    res.render('movie/index',{movies})
}