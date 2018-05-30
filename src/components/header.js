import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, children }) => (
  <nav className="dt w-100 border-box pa3 ph5-ns">
    <Link className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
      <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
    </Link>
    {children}
  </nav>
)

export default Header


