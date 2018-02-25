import React from 'react'
import Link from 'gatsby-link'


let test = "<script type='text/javascript'>\
(function(d, s) {\
    var useSSL = 'https:' == document.location.protocol;\
    var js, where = d.getElementsByTagName(s)[0],\
    js = d.createElement(s);\
    js.src = (useSSL ? 'https:' : 'http:') +  '//www.peopleperhour.com/hire/1002307300/1213788.js?width=300&height=135&orientation=vertical&theme=light&rnd='+parseInt(Math.random()*10000, 10);\
    try { where.parentNode.insertBefore(js, where); } catch (e) { if (typeof console !== 'undefined' && console.log && e.stack) { console.log(e.stack); } }\
}(document, 'script'));\
</script><div id='pph-hireme'></div>"

const ContactPage = () => (

    <div>
        <h1>ContactPage</h1>

        <h2>Direct Contact</h2>
        <p>For anything you need or want to ask send me a message at <strong><a href='mailto:giannisdallas81@gmail.com'>
            giannisdallas81@gmail.com
        </a></strong>
        </p>
        <h2>Hire me online</h2>
        <p><Link to="https://www.upwork.com/o/profiles/users/_~0168d059ac7bbd584a/">Find me on Upwork</Link></p>        
        <div
            dangerouslySetInnerHTML={{ __html: test }}
          />
        <Link to="/">Back to my homepage</Link>

    </div>

)

export default ContactPage