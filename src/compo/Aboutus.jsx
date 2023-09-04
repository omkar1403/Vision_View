import React from 'react';
import './carwrap.css'; // import your CSS file

function About() {
    return (
        <div className="about-container2">
            <div className='namkd'>
                <h1 >About Us</h1>
            </div>
            <p className='mainp'>Our mission is to build innovative software that Predicts Price.<br />
                Many people face the common problem of uncertainty when it comes to the prices of expensive items such as cars, phones, laptops, and houses. This uncertainty can make it difficult to plan finances and create a budget for these purchases. To help address this issue, this website offers a price prediction model that provides users with estimated costs of these items, allowing them to make informed decisions about their purchases.<br />
                Additionally, the website's budget maker tool assists users in creating a budget plan for purchasing expensive items, further helping them to plan their finances and make informed decisions. These tools can be useful for anyone looking to make big purchases and wanting to ensure they are making the right financial decisions. Overall, this website has practical applications for anyone who wants to make informed decisions about their finances when it comes to purchasing expensive items.</p>
        </div>
    );
}

export default About;
