import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
