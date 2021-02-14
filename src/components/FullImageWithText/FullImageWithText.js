import Img from 'gatsby-image'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Display from '../Display'
import Button from '../Button'

const simpleParallax = typeof window !== `undefined` ? require('simple-parallax-js') : null

export const query = graphql`
  {
    datoCmsFullImage {
      image {
        alt
        fluid(imgixParams: { q: 90, w: "1440", h: "730" }, maxWidth: 1400) {
          aspectRatio
          base64
          height
          sizes
          src
          srcSet
          tracedSVG
          width
        }
      }
      title
    }
  }
`

const FullImageWithText = () => {
  useEffect(() => {
    const image = document.getElementsByClassName('image')
    // eslint-disable-next-line
    new simpleParallax(image)
  }, [])

  const render = data => {
    const {
      datoCmsFullImage: {
        image: { fluid, alt },
        title,
      },
    } = data

    return (
      <Container>
        <StyledImage alt={alt} className="image" fluid={fluid} loading="lazy" />

        <Copy>
          <StyledDisplay color="white">{title}</StyledDisplay>

          <Button
            color="white"
            href="https://www.700dealer.com/QuickQualify/a624ac786dde40a897126561f9205ae3-201827"
            target="_blank"
          >
            Apply Online
          </Button>
        </Copy>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const Container = styled.section`
  position: relative;
`

const Copy = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 30px;
`

const StyledDisplay = styled(Display)`
  margin: 0 0 50px;
`

const StyledImage = styled(Img)`
  width: 100%;
  height: 100vw;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    height: auto;
  }
`

export default FullImageWithText
