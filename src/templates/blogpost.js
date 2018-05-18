import React from 'react'
import Link from 'gatsby-link'

const BlogPost = () => (
  <div>
    <h1>Blog Post Title</h1>
    <p>Content here</p>
    <Link className="link" to="/">Go back to the homepage</Link>
  </div>
)

export default BlogPost