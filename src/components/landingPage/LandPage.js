import React from 'react';
import './land.css'

const LandPage = ({renderUser}) => {
    return (
        <div className="landing">
            <h2>
                Creating a community to boost interactions between students.
            </h2>
            <form>
                <h3>Create an account</h3>
                <input placeholder="Full name" className="name"/>
                <input placeholder="Username" className="username"/>
                <input placeholder="Email" type="email" className="mail"/>
                <input placeholder="Phone no" className="phone"/>
                <input placeholder="date of birth" type="date" className="date"/>
                <input placeholder="Password" type="password" className="password"/>
                <button onClick={(e)=>renderUser(e)}>CREATE</button>
            </form>
        </div>
    );
};

export default LandPage;