import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './layout.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children,data }) => (
  <div>
    <Helmet
      title="Giannis Dallas Web Development"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header/>
    <div className="Content">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper