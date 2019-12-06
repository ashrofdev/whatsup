import React from 'react';
import Slider from 'react-slick'
import './head.css'

const Header = () => {
    // const settings = {
    //     dots: false,
    //     infinite:true,
    //     autoplay: true,
    //     speed: 700
    // }
    return (
        <div className="header">
            <div className="top">
                <figure className="logo">
                    <img  src={require('../img/logo.png')}/>
                </figure>
                <h1 className="heading">WHATSUP</h1>
            </div>
        </div>
    );
};

export default Header;