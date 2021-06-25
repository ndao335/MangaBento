import React from 'react'
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
        let results = mangaList;
        let temporary = fullMangaList;
        switch(e){
            case "views":
                results = mangaList.sort(
                    function (a, b)
                    {
                        if(a.views < b.views) return 1;
                        else return -1;
                    }
                )
                setMangaList(results);
                break;
            case "rating":
                results = mangaList.sort(
                    function (a,b)
                    {
                        if(a.rating < b.rating) return 1;
                        else return -1;
                    });
                
                setMangaList(results);
                break;
            case "letter":
                results = mangaList.sort(
                    function (a,b)
                    { 
                        if(a.name < b.name) return 1;
                        else return -1;
                    });
                setMangaList(results);
                break;
            case "comedy":
                temporary = fullMangaList;
                results = temporary.filter(manga => (manga.genres).includes('Comedy'));
                setMangaList(results);
                break;
            case "fantasy":
                temporary = fullMangaList;
                results = temporary.filter(manga => (manga.genres).includes('Fantasy'));
                setMangaList(results);
                break;
            default:
                setMangaList(fullMangaList);
                break;
        }
    }

    return (
        <div className='homePage container-fluid'>
            <div className='row' style={{ textAlign: 'center' }}>
                <div className='col-lg-12'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <input type="text" value={searchTerm} onChange={onSearchInputChange} placeholder='Search Mangas' className='searchManga' />
                    </form>
                </div>
            </div>

            <div className='mainContainer'>
                <div className='viewContainer d-flex flex-column text-center'>
                    <h4>Manga by genres:</h4>
                    <ul className='d-flex flex-column text-center'>
                        <Link onClick={() => {handleView("default")}}>Default</Link>
                        <Link onClick={() => {handleView("views")}}>Highest View</Link>
                        <Link onClick={() => {handleView("rating")}}>Rating View</Link>
                        <Link onClick={() => {handleView("comedy")}}>Comedy</Link>
                        <Link onClick={() => {handleView("fantasy")}}>Fantasy</Link>
                    </ul>
                </div>
                <div>
                    <div className="midContent">
                        <div className='title text-center'>
                            <h2>Read Manga Online</h2>
                        </div>

                        <div className='justify-content-between'>
                            <div className='mangaContainer'>
                                {
                                    mangaList.map((item, index) => {
                                        return(<MangaCard key={index} manga={{ name: item.name, id: item.id, image: item.image }}/>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sideview-container">
                    <img className="clipimage" src="./sideview.jpeg" alt="sideview"/>
                </div>
            </div>
        </div>
    )
}

export default Home
