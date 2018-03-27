import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './index.scss'

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

  <div className="Content-outer">
    <div className="background-svg">
      <svg version="1.2" id="Layer_1" preserveAspectRatio="none" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
          <polyline className="line1" points="-0.5,0.5 960,1080.5 -0.5,1080.5 "/>
          <polygon className="line2" points="-0.5,555.5 1920.5,0.5 1920.5,1080.5 -0.5,1080.5 "/>
          <polygon className="line3" points="-0.5,823.5 1920.5,268.5 1920.5,1080.5 -0.5,1080.5 "/>
        </svg>
    </div>
  <div className="Content-inner">

    <h1>I am Giannis Dallas, Web Developer</h1>
    <h2>Welcome to my personal site.</h2>
    <p>Hello,<br/>
    I am a web developer with extensive WordPress experience. I design, develop and manage sites using WordPress, Bootstrap or even plain HTML/CSS/JS.</p>
    <p>In less than a year, I learned WordPress, PHP, MySQL database handling and of course HTML CSS and JavaScript.</p>
    <h4>My next goal is to learn ReactJS and create static sites and JavaScript apps</h4>
    <p>I can edit the PHP files to modify a WordPress theme beyond its capabilities. I can create child themes, write plugins add new functions, new shortcodes, custom queries etc.</p>
    <p>Currently, I work for <Link to="https://mosaicdataservices.com" target="_blank">Mosaic Data Services</Link> firm as WordPress developer.My duties are building, managing and troubleshooting US or foreign WordPress sites.
I also work as Freelancer in Greece</p>
    <div className="divider"></div>
    <div className="skills">
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
    <div className="divider"></div>
    <p><Link className="primary-button" to="/portfolio/">Go to portfolio</Link>
    <Link className="primary-button" to="/contact/">Get in touch with me</Link></p>
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
    },
    profile:imageSharp(id: {regex: "/Profile/"}) {
      sizes(maxWidth: 150){
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`