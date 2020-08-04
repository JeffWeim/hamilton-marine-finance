import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  {
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 10000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Image = props => {
  const { alt, className, loading, placeholderClassName, src } = props

  return (
    <StaticQuery
      query={`${query}`}
      render={data => {
        const image = data.images.edges.find(edge => {
          return edge.node.relativePath === src
        })

        if (!image) {
          return null
        }

        return (
          <Img
            alt={alt}
            className={className}
            fluid={image.node.childImageSharp.fluid}
            loading={loading}
            placeholderClassName={placeholderClassName}
          />
        )
      }}
    />
  )
}

Image.defaultProps = {
  className: '',
  loading: 'lazy',
  placeholderClassName: '',
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.string,
  placeholderClassName: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Image
