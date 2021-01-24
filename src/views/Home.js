import React from 'react';
import pageWithLayuot from '../containers/page.js';

const Home = (props) => {
    return (
        <div className="home">
            <h1 className="home__caption">Welcome Home</h1>
            <button className="button">Click me</button>
        </div>
    )
};

export default pageWithLayuot(Home);