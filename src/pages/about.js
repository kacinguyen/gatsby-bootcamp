import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p><Link to="/contact">Contact me</Link></p>
        </div>
    )
}

export default AboutPage