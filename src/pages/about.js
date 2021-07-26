import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Me</h1>
                <p><Link to="/contact">Contact me</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage