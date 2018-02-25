import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import html from '../images/logos/1200px-HTML5_logo_and_wordmark.svg.png'
import css from '../images/logos/css-3.jpg'
import javascript from '../images/logos/javascript.png'
import wordpress from '../images/logos/Wordpress-Logo-HD-Picture.jpg'
import jquery from '../images/logos/jquery.gif'
import react from '../images/logos/react-hexagon.png'
import gatsby from '../images/logos/Gatsbyjs.png'
import graphql from '../images/logos/graphql.jpeg'

const IndexPage = ({data}) => (
  <div>
    <Img sizes={data.hero.sizes} />
    <h1>I am Giannis Dallas, Web Developer</h1>
    <p>Welcome to my personal site.</p>
    <p>I am a web developer with extensive WordPress experience. I design, develop and manage sites using WordPress, Bootstrap or even plain HTML/CSS/JS.</p>
    <p>Currently, I work for <Link to="https://mosaicdataservices.com" target="_blank">Mosaic Data Services</Link> firm as WordPress developer.   </p>  
    <p><Link to="/portfolio/">Go to portfolio</Link></p>
    <p><Link to="/portfolio/">Get in touch with me</Link></p>

    <h2>What I know well</h2>
    <div className="know-well">
      <img src={html} />
      <img src={css} />
      <img src={wordpress} />
      <img src={javascript} />
      <img src={jquery}/>  
    </div>

    <h2>What I am learing now</h2>
    <div className="learn-now">
      <img src={react} />
      <img src={gatsby} />
      <img src={graphql} />    
    </div>

  </div>
)

export default IndexPage

export const ImageQuery = graphql`
  query ImageQuery {
    hero:imageSharp(id: {regex: "/hero/"}) {
      sizes(maxWidth: 960){
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`