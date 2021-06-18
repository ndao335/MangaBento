const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const { userRoute, mangaRoute } = require('./routes')
const Manga = require('./models/mangaModel')

require('dotenv').config()

// Permission to post/get JSON files
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Enable cors
const corsOptions = {
    origin: process.env.FRONT_URL
}
app.use(cors(corsOptions))

// API Routes
// User Route
app.use('/api/user', userRoute)
// Manga route
app.use('/api/manga', mangaRoute)

mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    },
    (err) => {
        if (err) {
            console.log(err)
            process.exit()
            return
        }
        // data = [{
        //     "name" : "Werid name",
        //     "alternative" : "―ナルト―",
        //     "author" : "Masashi Kishimoto",
        //     "thumbnail" : "naruto.jpeg",
        //     "genres" : ["Japanese" , "Shounen" , "Action" ,"Adventure" , "Martial Arts" , "Super Power"],
        //     "description" : "Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. But their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village. In order to stop the rampage, the Fourth Hokage sacrificed his life to seal the demon inside the body of the newborn Naruto.",
        //     "rating" : "5/5",
        //     "views" : 2000
        // }]
        // var temp = new Manga;
        // temp.collection.insertMany(data);
        
        console.log('MongoDB Connected...')
    }
)

app.listen(5000)