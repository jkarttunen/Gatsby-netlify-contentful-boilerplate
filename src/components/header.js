import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="bg-purple pa2"
  >
    <div className="pa2 mw7"
    >
      <h1 style={{ margin: 0 }}>
        <Link className="white link"
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
