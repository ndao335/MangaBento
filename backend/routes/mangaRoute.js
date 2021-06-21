const route = require('express').Router()
const mangaController = require('../controllers/mangaController')

// Upload manga info
route.post('/uploaddata', mangaController.uploadData)

// Update number of views
route.post('/updateview', mangaController.updateView)

// Get mangas
// Manga pages
route.get('/:manga/:chapter', mangaController.getMangaPages)
// Manga info
route.get('/:id', mangaController.getMangaInfo)
// Manga names
route.get('/', mangaController.getMangaNames)


module.exports = route