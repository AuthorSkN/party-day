import React from 'react';
import Local from '../local.json';

const About = () => {
    return (
        <div className="content">
            <h4>{Local.ABOUT}</h4>
        </div>
    );
}

export default About;