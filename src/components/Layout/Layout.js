import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'

import { Footer, GlobalStylesheet, Header, Seo } from 'Components'

import { theme } from '../../theme'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <GlobalStylesheet />

        <Seo title={data.site.siteMetadata.title} />

        <Header />
        <main>{children}</main>

        <Footer />
      </ThemeProvider>
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
