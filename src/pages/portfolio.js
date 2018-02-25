import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

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
    <h1>Welcome to my Portfolio</h1>
    <p>Take a look at my personal projects</p>    
    <div className="portfolio-masonry">
      <SinglePortfolio imgsizes={data.poliergo.edges[0].node.childImageSharp.sizes} name="Poliergo.gr" type="WordPress Development"/>
      <SinglePortfolio imgsizes={data.women.edges[0].node.childImageSharp.sizes} name="Womenassociations.gr" type="WordPress Development" />
      <SinglePortfolio imgsizes={data.menscare.edges[0].node.childImageSharp.sizes} name="Mens Care.gr" type="WordPress Development" />
      <SinglePortfolio imgsizes={data.betterparents.edges[0].node.childImageSharp.sizes} name="BetterParents.gr" type="WordPress Development" />
      <SinglePortfolio imgsizes={data.gklegal.edges[0].node.childImageSharp.sizes} name="GKLegal.gr" type="WordPress Development" />
    </div>
    <p>{JSON.stringify(data.poliergo.edges[0].node)}</p>
    <p>{JSON.stringify(data.gklegal.edges)}</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default PortfolioPage

export const pageQuery = graphql`
  query poliergoSnap {
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