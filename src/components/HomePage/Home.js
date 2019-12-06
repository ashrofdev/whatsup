import React from 'react';
import './home.css'

const Home = ({user}) => {
    return (
        <div className="home">
            <header>
                <figure>
                    <img />
                </figure>
                <h2>{user.name}</h2>
                <nav>
                    <ul>
                        <li>My Profile</li>
                        <li>Followers {user.followers}</li>
                        <li>Following {user.following}</li>
                        <li>Notification</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Home;