import React from 'react';
import './home.css'

const Home = ({user}) => {
    // extracting arrays from user object
    const friends = user.friends
    const status = user.status


    // rendering the list of friends
    const friend = friends.map((i,e)=>{
        return (
            <div className="friend">
                <h3>{i.name}</h3>
                <p>{i.department}</p>
            </div>
        )
    })
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
            <body>
                <section className="friends">
                    {friend}
                </section>
                <section className="status">

                </section>
            </body>
        </div>
    );
};

export default Home;