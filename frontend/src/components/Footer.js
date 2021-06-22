import React from 'react'

import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <Link className="navbar-brand" to="/">
                <img className="logo" src="./logo.png" alt="MangaBento"/>
            </Link>
            <div>
                <h4>Copyright &#169; by Nathaniel Dao</h4>
                <p>Contact me: <a href="mailto:nathanielxd94@gmail.com">nathanielxd94@gmail.com</a></p>
            </div>
        </footer>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default Footer;