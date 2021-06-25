import React, { useState } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { login } from '../redux/actions/userAction'

import { Link } from 'react-router-dom'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';



import './Login.css'

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [login, setLogin] = useState(false); //set up login
    const [data, setData] = useState({}); //set up fb data

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        if(response.accessToken){
            console.log(data);
            setLogin(true);
        } else{
            setLogin(false);
        }
    }

    const responseGoogle = (response) => {
        console.log(response);
        setData(response);
        if(response.accessToken){
          setLogin(true);
        } else{
          setLogin(false);
        }
    }

    const usernameChanged = (e) => {
        setUsername(e.target.value)
    }

    const passwordChanged = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(
            'http://localhost:5000/api/user/signin',
            {
                username,
                password
            }
        ).then(res => {
            if (res.data.accessToken) {
                const { username, accessToken, bookmarks } = res.data
                props.login(username, accessToken, bookmarks)
                setUsername('')
                setPassword('')
                props.history.push('/')
                //setLogin(true);
            }
        })
        .catch(err => {
            console.log(err);
            //setLogin(false);
            alert('Incorrect username or password')
        })
    }

    return (
        <div class="container" style={{ backgroundImage: `url("./sideview.jpeg")`}}>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            <meta name="google-signin-client_id" content="1050954081973-n1u9uvkipun891krjs8ehj5kpbharvt1.apps.googleusercontent.com"></meta>
            {!login && 
                <React.Fragment>
                    <div className='loginPage'>
                        <div className='loginForm'>
                            <img className="logo" src="./logo.png" alt="MangaBento"/>
                            <h4>Log In</h4>
                            <p>Haven't register? <Link className="nav-link" to="/register">Register</Link></p>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <input required type="text" value={username} onChange={usernameChanged} className='form-control' placeholder='Username' />
                                </div>
                                <div className='form-group'>
                                    <input required type="password" value={password} onChange={passwordChanged} className='form-control' placeholder='Password' />
                                </div>
                                <div className='form-group'>
                                    <button className='btn btn-primary btn-block'>Submit</button>
                                </div>
                            </form>
                            <FacebookLogin
                            appId="502330741034696"
                            autoLoad={false}
                            fields="name,email,picture"
                            scope="public_profile,user_friends"
                            callback={responseFacebook} 
                            icon="fa-facebook"
                            />
                            <GoogleLogin
                            className="GoogleButton"
                            clientId={"1050954081973-n1u9uvkipun891krjs8ehj5kpbharvt1.apps.googleusercontent.com"}
                            cookiePolicy={'single_host_origin'}
                            callback={responseGoogle} 
                            icon="fa-google"
                            />
                        </div>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, accessToken, bookmarks) => {
            dispatch(login(username, accessToken, bookmarks))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)