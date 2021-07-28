import React from 'react'
// React component that links between pages
// Pre-loads content
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <h2>I'm Kaci – just learning about React, Gatsby, and GraphQL :-)</h2>
      <h2>This site is practice with full-stack.</h2>
      <p><Link to="/about">Learn more</Link></p>
    </Layout>
  )
}

export default IndexPage