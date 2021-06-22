import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import axios from 'axios'

function ReadManga(props) {
    
    const [images, setImages] = useState([])
    var mangaName = props.location.state.name.split(' ').join('-');
    var chapter = props.location.state.chapter;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/manga/${mangaName}/${chapter}`)
            .then(res => {
                const myImages = [...res.data]
                setImages(myImages)
            })

        axios.post('http://localhost:5000/api/manga/updateView',
                {
                    name: props.location.state.name,
                }
            ).catch(err => alert(err))
        if(props.location.state.chapter === 1){
            document.getElementById('previousButton').style.display = 'none';
        }
        else if (props.location.state.chapter === 3){
            document.getElementById('nextButton').style.display = 'none';
        }
    }, [])

    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{ minHeight: 'calc(100vh - 56px)', backgroundColor: '#000' }}>
            <div className='d-flex flex-row justify-content-between' style={{ marginTop: '10px', width: '100%' }}>
                <div style={{ color: 'red' }}>
                    <Link style={{ color: '#fff' }} to='/'>Home</Link> / <Link style={{ color: '#fff' }} to='/manga'>{props.location.state.displayName} </Link> / Chapter {chapter}
                </div>
            </div>
            <ul className='d-flex flex-column justify-content-center align-items-center' style={{ padding: '10px 0px' }}>
                {
                    images.map((item, key) => <li key={key}><img src={`data:image/jpeg; base64, ${item}`} className='img-fluid' alt="" /></li>)
                }
            </ul>

            <div className='col-lg-12' style={{ margin: '10px' }}>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <Link to={{ 
                        pathname: '/readmanga', 
                        state: {
                            displayName: props.location.state.displayName, 
                            name: props.location.state.name, 
                            chapter: (props.location.state.chapter - 1)}}} 
                        onClick={() => window.location.reload()}>
                        <Button id='previousButton' className='btn btn-success' style={{ marginRight: '5px' }}>Previous chapter</Button>
                    </Link>
                    <Link to={{ 
                        pathname: '/readmanga', 
                        state: {
                            displayName: props.location.state.displayName, 
                            name: props.location.state.name, 
                            chapter: (props.location.state.chapter + 1)}}} 
                        onClick={() => window.location.reload()}>
                        <Button id='nextButton' className='btn btn-success' style={{ marginLeft: '5px' }}>Next chapter</Button>
                    </Link>
                </div>
            </div>            
        </div>
    )
}

export default ReadManga
