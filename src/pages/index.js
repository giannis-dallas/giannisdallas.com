import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import html from '../images/logos/HTML5-150.jpg'
import css from '../images/logos/css3-150.jpg'
import javascript from '../images/logos/JavaScript-150.jpg'
import wordpress from '../images/logos/Wordpress-150.jpg'
import jquery from '../images/logos/jQuery-150.jpg'
import react from '../images/logos/react-150.jpg'
import gatsby from '../images/logos/Gatsbyjs-150.jpg'
import graphql from '../images/logos/graphql-150.jpg'

const IndexPage = ({data}) => (
  <div>
  <div className="hero-image">    
      <Img sizes={data.hero.sizes} />
  </div>
  <div className="Content-inner">   
    <h1>I am Giannis Dallas, Web Developer</h1>
    <p>Welcome to my personal site.</p>
    <p>I am a web developer with extensive WordPress experience. I design, develop and manage sites using WordPress, Bootstrap or even plain HTML/CSS/JS.</p>
    <p>Currently, I work for <Link to="https://mosaicdataservices.com" target="_blank">Mosaic Data Services</Link> firm as WordPress developer.   </p>  
    <p><Link to="/portfolio/">Go to portfolio</Link></p>
    <p><Link to="/portfolio/">Get in touch with me</Link></p>

    <div className="know-well-container">
      <h2>What I know well</h2>
      <div className="know-well">
        <img src={html} />
        <img src={css} />
        <img src={wordpress} />
        <img src={javascript} />
        <img src={jquery}/>  
      </div>
    </div>

    <div className="learn-now-container">
      <h2>What I am learing now</h2>
      <div className="learn-now">
        <img src={react} />
        <img src={gatsby} />
        <img src={graphql} />    
      </div>
    </div>
    </div>
  </div>
)

export default IndexPage
export const HeroImageQuery = graphql`
  query HeroImage_home {
    hero:imageSharp(id: {regex: "/hero/"}) {
      sizes(maxWidth: 960){
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`