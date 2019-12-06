import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <header>
                <figure>
                    <img />
                </figure>
                <h2>User Name</h2>
                <nav>
                    <ul>
                        <li>My Profile</li>
                        <li>Followers {20}</li>
                        <li>following {15}</li>
                        <li>Notification</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Home;