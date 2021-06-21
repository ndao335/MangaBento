import React, { useState } from 'react'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const AdminPage = (props) => {

    const [mangaName, setMangaName] = useState('')
    const [alternativeName, setAlternativeName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [genres, setGenres] = useState([])
    const [description, setDescription] = useState('')

    const onNameChange = (e) => {
        setMangaName(e.target.value)
    }

    const onAlternativeChange = (e) => {
        setAlternativeName(e.target.value)
    }

    const onAuthorChange = (e) => {
        setAuthorName(e.target.value)
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        const result = document.getElementById('genreInput').value.toString().split("|")
        setGenres(result);
        e.preventDefault()
        axios.post(
            'http://localhost:5000/api/manga/uploaddata',
            {
                name: mangaName,
                alternative: alternativeName,
                author: authorName,
                genres: genres,
                description: description,
                thumbnail: mangaName.replace(" ", "-") + ".jpeg"
            }
        ).then(res => {
            setMangaName('')
            setAlternativeName('')
            setAuthorName('')
            setGenres('')
            setDescription('')

        }).catch(err => alert(err))
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="mangaName">Manga Name</label>
                    <input required type="text" value={mangaName} onChange={onNameChange} className='form-control' placeholder='Manga Name' />
                </div>
                <div class="form-group">
                    <label for="alternativeName">Manga Alternative Name</label>
                    <input required type="text" value={alternativeName} onChange={onAlternativeChange} className='form-control' placeholder='Alternative Name' />
                </div>
                <div class="form-group">
                    <label for="authorName">Author</label>
                    <input required type="text" value={authorName} onChange={onAuthorChange} className='form-control' placeholder='Author Name' />
                </div>
                <div class="form-group">
                    <label for="genres">Genres</label>
                    <input id="genreInput" required type="text" className='form-control' placeholder='Genre(s)' />
                    <small id="genreHelp" class="form-text text-muted">Seperate genres by " | " with no space</small>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input required type="text" value={description} onChange={onDescriptionChange} className='form-control' placeholder='Description' />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminPage;