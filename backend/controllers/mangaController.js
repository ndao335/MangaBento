const fs = require('fs')
const path = require('path')
const Manga = require('../models/mangaModel')

const getMangaNames = async (req, res) => {
    let returnItems = []
    const MANGA_FOLDER = process.env.MANGA_FOLDER
    const mangaNames = fs.readdirSync(MANGA_FOLDER)
    for (const mangas of mangaNames) {
        const mangaFolderUrl = `${MANGA_FOLDER}/${mangas}`
        const mangaFolder = fs.readdirSync(mangaFolderUrl)
        for (const items of mangaFolder) {
            if (mangas === path.basename(items, '.jpeg')) {
                const dbManga = await Manga.findOne({ name: mangas.replace(/-/g, ' ') }).exec()
                returnItems.push({
                    name: dbManga.name,
                    id: dbManga._id,
                    image: fs.readFileSync(`${mangaFolderUrl}/${items}`, 'base64'),
                    alternative: dbManga.alternative,
                    author: dbManga.author,
                    genres: dbManga.genres,
                    description: dbManga.description,
                    rating: dbManga.rating,
                    views: dbManga.views
                })
            }
        }
    }
    res.send(returnItems)
}


const getMangaPages = (req, res) => {
    const { manga, chapter } = req.params
    const requestedMangaUrl = `${process.env.MANGA_FOLDER}/${manga}`

    fs.readdir(requestedMangaUrl, (err, files) => {
        if (err) {
            return res.json({ message: err })
        }
        let haveMangas = files.filter(item => item === 'chapters')
        haveMangas = `${requestedMangaUrl}/${haveMangas}`
        fs.readdir(haveMangas, (err, files) => {
            if (err) {
                return res.json({ message: err })
            }
            const haveChapter = files.indexOf(chapter)
            if (haveChapter === -1) {
                return res.json({ message: 'Error while searching this chapter.' })
            }
            haveMangas = `${haveMangas}/${chapter}`
            // Save the image as BASE64 and return as array
            fs.readdir(haveMangas, (err, chapters) => {
                if (err) {
                    return res.json({ message: err })
                }
                const imagesBase64 = []
                chapters.forEach(item => {
                    imagesBase64.push(fs.readFileSync(`${haveMangas}/${item}`, 'base64'))
                })
                return res.send(imagesBase64)
            })

        })
    })
}

const getMangaInfo = (req, res) => {
    const { id } = req.params
    Manga.findOne(
        { _id: id },
        (err, doc) => {
            if (err) {
                return res.json({ message: err })
            }
            return res.json(doc)
        }
    )
}

const uploadData = async (req, res) => {
    if (!req.body.name || !req.body.alternative || !req.body.author || !req.body.genres || !req.body.description) {
        return res.json({ message: 'Incomplete request!' })
    }

    Manga.findOne(
        { name: req.body.name },
        (err, manga) => {
            if (err) {
                return res.json({ message: err })
            }

            if (manga) {
                return res.json({ message: `${req.body.name} data already uploaded!` })
            }

            const newManga = new Manga({
                name: req.body.name,
                alternative: req.body.alternative ? req.body.alternative : '',
                author: req.body.author,
                thumbnail: req.body.thumbnail,
                genres: req.body.genres,
                description: req.body.description,
                rating: Math.floor(Math.random() * 5).toString() + "/5",
                views: 0
            })

            newManga.save((err) => {
                if(err){
                    console.log(err)
                    return res.status(500).send({message: err.message})
                }
                return res.status(200).send({message: `Manga ${req.body.name} created!`})
            })
        }
    )
}

const updateView = async (req, res) => {
    if (!req.body.name) {
        return res.json({ message: 'Incomplete request!' })
    }
    Manga.findOne(
        { name: req.body.name },
        (err, manga) => {
            if (err) {
                return res.json({ message: err })
            }
            if (manga) {
                const numOfViews = manga.views + 1;
                manga.views = numOfViews;
                manga.save((err) => {
                    if(err){
                        console.log(err)
                        return res.status(500).send({message: err.message})
                    }
                    return res.status(200).send({message: `Manga ${req.body.name} created!`})
                })
            }
        }
    )
}

module.exports = {
    getMangaPages,
    getMangaInfo,
    getMangaNames,
    uploadData,
    updateView
}