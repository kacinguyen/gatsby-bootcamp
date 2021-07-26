import React from 'react'
// React component that links between pages
// Pre-loads content
import { Link } from 'gatsby'
import Footer from './components/footer'
import Header from './components/header'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello!</h1>
      <h2>I'm Kaci, a tea connoisseur :-)</h2>
      <p><Link to="/about">Learn more</Link></p>
      <Footer />
    
    </div>
  )
}

export default IndexPage