import React from 'react';
import './head.css'

import Slide from 'react-reveal/Zoom'

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
                <div className="heading">
                    <Slide left delay={500} duration={2000}>W</Slide>
                    <Slide top delay={1000} duration={2000}>H</Slide>
                    <Slide right delay={1500} duration={2000}>A</Slide>
                    <Slide bottom delay={2000} duration={2000}>T</Slide>
                    <Slide left delay={2500} duration={2000}>S</Slide>
                    <Slide top delay={3000} duration={2000}>U</Slide>
                    <Slide right delay={3500} duration={2000}>P</Slide>
                </div>
            </div>
        </div>
    );
};

export default Header;