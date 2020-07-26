import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import Display from '../Display'
import Button from '../Button'

export const query = graphql`
  query MyQuery {
    datoCmsFullImage {
      image {
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
    }
  }
`

const FullImageWithText = () => {
  const render = data => {
    const {
      datoCmsFullImage: {
        image: { fluid },
      },
    } = data

    return (
      <Container>
        <StyledImage fluid={fluid} loading="lazy" />

        <Copy>
          <StyledDisplay color="white">Live life full throttle.</StyledDisplay>

          <Button color="white">Apply Online</Button>
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
