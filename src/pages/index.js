import React from 'react'
// React component that links between pages
// Pre-loads content
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I'm Kaci, a tea connoisseur :-)</h2>
      <p><Link to="/about">Learn more</Link></p>
    </div>
  )
}

export default IndexPage