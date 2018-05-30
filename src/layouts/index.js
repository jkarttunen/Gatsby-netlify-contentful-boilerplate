import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'

import Header from '../components/header'
import '../../node_modules/tachyons/css/tachyons.css'
import slugify from 'slugify'

const slugifyOptions = {
   replacement: '-',
   remove: /[$*_+~.()'"!\-:@]/g,
   lower: true
 }


const NavLinkList = (data) => {
  return (
    <ul className="dtc v-mid w-75 tr">
      {data.items.map((item, i) => (
        <li key={i} className="dib">
          <Link className ="link dim dark-gray f6 f5-ns mr3 mr4-ns"  to={`/${data.basepath}/${slugify(item.title, slugifyOptions)}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} >
      <NavLinkList basepath="pages" items={data.mainNavi.pages} />
    </Header>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)


Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site: site {
      siteMetadata {
        title
      }
    }
    mainNavi: contentfulMainNavigation(id: {eq: "bpJLV5JhC0Sy0aIGSAkaM"}) {
      id
      pages {
        id
        title
      }
    }
  }
`
