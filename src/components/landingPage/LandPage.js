import React from 'react';
import './land.css'

const LandPage = () => {
    return (
        <div className="landing">
            <h2>
                Lorem ipsom dorlasit tuelamisj krnbdbd wehekwu fksdf sdkhbs ksdbfdsk 
                sjfb skhui yqto iutrqiut gfi nbcyeg ba.
            </h2>
            <form>
                <input placeholder="Full name" className="name"/>
                <input placeholder="Username" className="username"/>
                <input placeholder="Email" type="email" className="mail"/>
                <input placeholder="Phone no" className="phone"/>
                <input placeholder="date of birth" type="date" className="date"/>
                <input placeholder="Password" type="password" className="password"/>
            </form>
        </div>
    );
};

export default LandPage;