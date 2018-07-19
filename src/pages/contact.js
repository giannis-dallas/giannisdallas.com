import React,{Component} from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import upwork from'../images/logos/upwork-logo-150px.jpg'

import './contact.scss'


//const ContactPage = ({data}) => (
class ContactPage extends Component {
    
    constructor(props) {
        super(props);
      }    

    loadHireMe(d, s) {
        var useSSL = 'https:' == document.location.protocol;
        var js,
          where = d.getElementsByTagName(s)[0],
          js = d.createElement(s);
        js.src =
          (useSSL ? 'https:' : 'http:') +
          '//www.peopleperhour.com/hire/1002307300/1213788.js?width=300&height=135&orientation=vertical&theme=light&rnd=' +
          parseInt(Math.random() * 10000, 10);
        try {
          where.parentNode.insertBefore(js, where);
        } catch (e) {
          if (typeof console !== 'undefined' && console.log && e.stack) {
            console.log(e.stack);
          }
        }
      }
    
      componentWilMount() {
        this.loadHireMe(document, 'script');

        console.log('Did Mount');
        setTimeout(function(){ this.forceUpdate() }.bind(this), 10000);
        //window.location.reload()
        console.log('Did Mount 2');
        
      }
    
      render(){
          return(
    <div>
        <div className="background-svg">
        <svg version="1.2" id="Layer_1" preserveAspectRatio="none" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
                <polyline className="line1" points="-0.5,0.5 960,1080.5 -0.5,1080.5 "/>
                <polygon className="line2" points="-0.5,555.5 1920.5,0.5 1920.5,1080.5 -0.5,1080.5 "/>
                <polygon className="line3" points="-0.5,823.5 1920.5,268.5 1920.5,1080.5 -0.5,1080.5 "/>
            </svg>
        </div>
        <div className="hero-image">    
            <Img sizes={this.props.data.hero.sizes} />
        </div>
        <div className="Content-inner">    
            <h1>ContactPage</h1>

            <h2>Direct Contact</h2>
            <p>For anything you need or want to ask, send me a message at <strong><a href='mailto:giannisdallas81@gmail.com'>
                giannisdallas81 @ gmail.com
            </a></strong>
            </p>
            <h2>Hire me online</h2>
            <p className="upwork">
                <a href="https://www.upwork.com/o/profiles/users/_~0168d059ac7bbd584a/">
                    <img src={upwork} /> Find me on Upwork
                </a></p>
            <div id='pph-hireme'></div>
            <p><Link className="primary-button" to="/">Back to Homepage</Link></p>
        </div>
    </div>
          )
        };
    }

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