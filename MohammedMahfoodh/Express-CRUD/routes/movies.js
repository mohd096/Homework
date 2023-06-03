const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies')

// Call Our API
router.get('/movie/add',movieController.movie_create_get)
router.post('/movie/add',movieController.movie_create_post)
router.get('/movie/index',movieController.movie_index_post)

module.exports = router