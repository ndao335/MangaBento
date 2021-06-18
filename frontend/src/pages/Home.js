import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MangaCard from '../components/MangaCard'

import './Home.css'

const Home = props => {

    const [searchTerm, setSearchTerm] = React.useState('')
    const [mangaList, setMangaList] = React.useState([])
    const [fullMangaList, setFullMangaList] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:5000/api/manga')
            .then(res => {
                setMangaList([...res.data])
                setFullMangaList([...res.data])
            })
    }, [])

    const onSearchInputChange = e => {
        setMangaList(fullMangaList);
        setSearchTerm(e.target.value);
    };

    React.useEffect(() => {
        const results = mangaList.filter(manga => (manga.name).toLowerCase().includes(searchTerm.toLowerCase()));
        setMangaList(results);
    }, [searchTerm]);

    const handleView = e => {
        if(e == "letter"){
            const results = mangaList.sort(
                function (a,b)
                { 
                    if(a.name < b.name) return 1;
                    else return -1;
                });
            console.log(results);
            setMangaList(results);
        } else{
            setMangaList(fullMangaList);
        }
    }

    return (
        <div className='homePage container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <input type="text" value={searchTerm} onChange={onSearchInputChange} placeholder='Search Mangas' className='searchManga' />
                    </form>
                </div>
            </div>

            <div className='row d-flex flex-row justify-content-between'>
                <div className="sideview-container">
                    <img className="clipimage" src="./sideview.jpeg" alt="sideview image"/>
                </div>
                <div className='col-lg-6 container-fluid' >
                    <div className='row'>
                        <div style={{ padding: '10px' }} className='col-lg-12 text-center'>
                            <h2>Read Manga Online</h2>
                        </div>

                        <div className='row d-flex flex-row justify-content-between'>
                            <div className='col-lg-8 d-flex justify-content-center'>
                                {
                                    mangaList.map((item, index) => {
                                        return <MangaCard key={index} manga={{ name: item.name, id: item.id, image: item.image }} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 d-flex flex-column align-items-start' style={{ marginTop: '10px' }}>
                    <h4>Manga by genres:</h4>
                    <ul className='d-flex flex-column align-items-start' style={{ listStyle: 'none', width: '100%' }}>
                        <Link onClick={() => {handleView("default")}}>Default</Link>
                        <Link onClick={() => {handleView("letter")}}>Reverse Order</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
