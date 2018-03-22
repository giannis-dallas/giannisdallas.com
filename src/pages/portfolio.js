import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './portfolio.scss'

const SinglePortfolio = props => 
  <div className="portfolio-masonry-item">
        <div className="image-holder">
      <Img sizes={props.imgsizes} />
    </div>
    <h3>{props.name}</h3>
    <h5>{props.type}</h5>

  </div>

const PortfolioPage = ({data}) => (
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
   
      <h1>Welcome to my Portfolio</h1>
      <p>Take a look at my personal projects</p>    
      <div className="portfolio-masonry">
        <SinglePortfolio imgsizes={data.poliergo.edges[0].node.childImageSharp.sizes} name="Poliergo.gr" type="WordPress Development"/>
        <SinglePortfolio imgsizes={data.women.edges[0].node.childImageSharp.sizes} name="Womenassociations.gr" type="WordPress Development" />
        <SinglePortfolio imgsizes={data.menscare.edges[0].node.childImageSharp.sizes} name="Mens Care.gr" type="WordPress Development" />
        <SinglePortfolio imgsizes={data.betterparents.edges[0].node.childImageSharp.sizes} name="BetterParents.gr" type="WordPress Development" />
        <SinglePortfolio imgsizes={data.gklegal.edges[0].node.childImageSharp.sizes} name="GKLegal.gr" type="WordPress Development" />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
    </div>
  </div>
)

export default PortfolioPage

export const pageQuery = graphql`
  query portfolio{
    hero:imageSharp(id: {regex: "/hero/"}) {
      sizes(maxWidth: 960){
        ...GatsbyImageSharpSizes_noBase64
      }
    },
    poliergo:allFile(filter: {relativePath: {regex: "/Poliergo-min-horizontal/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    },
    women:allFile(filter: {relativePath: {regex: "/assoc/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    },
    menscare:allFile(filter: {relativePath: {regex: "/mens/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    },
    betterparents:allFile(filter: {relativePath: {regex: "/Better/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    },
    gklegal:allFile(filter: {relativePath: {regex: "/GK Legal/"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            sizes(maxWidth: 960) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
    }
`