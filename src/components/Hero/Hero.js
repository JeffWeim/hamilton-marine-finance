import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Button, Display, Text } from 'Components'

export const query = graphql`
  {
    datoCmsHero {
      images {
        fluid {
          width
          tracedSVG
          srcSet
          src
          sizes
          height
          base64
          aspectRatio
        }
        alt
      }
    }
  }
`

const Hero = () => {
  const render = data => {
    const {
      datoCmsHero: {
        images: [{ alt, fluid }],
      },
    } = data

    return (
      <Container>
        <Inner>
          <Copy>
            <Display>Live Your Dreams</Display>

            <Text>
              Turn dreams to reality with Hamilton Marine Finance. We are diligent in streamlining
              the finance process.
            </Text>

            <Button size="small">Apply Now</Button>
          </Copy>

          <StyledImg alt={alt} fluid={fluid} loading="lazy" size={fluid} />
        </Inner>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const Container = styled.section`
  background: linear-gradient(90deg, #1f2f97 0%, #1ca6eb 100%);
  overflow: hidden;

  .flickity-enabled {
    outline: none;
  }
`

const Copy = styled.div`
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50px;
  left: 0;
  width: 40%;
  height: 75%;
  z-index: 1;
`

const StyledImg = styled(Img)`
  max-width: 1300px;
  width: 100%;
  margin-left: 21.5vw;
`

const Inner = styled.div`
  padding: 50px 50px 50px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
`

export default Hero
