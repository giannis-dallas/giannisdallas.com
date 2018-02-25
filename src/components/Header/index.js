import React from 'react'
import Link from 'gatsby-link'

const ListLink = props => 
<li style={{ display: `inline-block`, marginRight: `1rem` }}>
  <Link to={props.to}>
    {props.children}
  </Link>
</li>

const Header = () => (
  <div className="header">
    <div className="header-inner">
      <h1><Link to="/">
          Giannis Dallas
        </Link>
      </h1>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  </div>
)

export default Header
