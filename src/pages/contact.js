import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

let test2 = `
<script type='text/javascript'>
(function(d, s) {
    var useSSL = 'https:' == document.location.protocol;
    var js, where = d.getElementsByTagName(s)[0],
    js = d.createElement(s);
    js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/1002307300/1213788.js?width=300&height=135&orientation=vertical&theme=light&rnd='+parseInt(Math.random()*10000, 10);\
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }\
}(document, 'script'));
</script><div id='pph-hireme'></div>
`

const ContactPage = ({data}) => (

    <div>
        <div className="background-svg">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 1920 1080" enable-background="new 0 0 1920 1080">
                <polyline className="line1" points="-0.5,0.5 960,1080.5 -0.5,1080.5 "/>
                <polygon className="line2" points="-0.5,555.5 1920.5,0.5 1920.5,1080.5 -0.5,1080.5 "/>
                <polygon className="line3" points="-0.5,823.5 1920.5,268.5 1920.5,1080.5 -0.5,1080.5 "/>
            </svg>
        </div>
        <div className="hero-image">    
            <Img sizes={data.hero.sizes} />
        </div>
        <div className="Content-inner">    
            <h1>ContactPage</h1>

            <h2>Direct Contact</h2>
            <p>For anything you need or want to ask send me a message at <strong><a href='mailto:giannisdallas81@gmail.com'>
                giannisdallas81@gmail.com
            </a></strong>
            </p>
            <h2>Hire me online</h2>
            <p><a href="https://www.upwork.com/o/profiles/users/_~0168d059ac7bbd584a/">Find me on Upwork</a></p>
            <p
                dangerouslySetInnerHTML={{ __html: test2 }}
            />
            <Link to="/">Back to my homepage</Link>
        </div>
    </div>

)

export default ContactPage
export const HeroImageQuery = graphql`
  query HeroImage_contact {
    hero:imageSharp(id: {regex: "/hero/"}) {
      sizes(maxWidth: 960){
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`