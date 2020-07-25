import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Display from '../Display'
import Text from '../Text'

export const query = graphql`
  {
    desktop: datoCmsHero {
      image {
        fluid(imgixParams: { w: "1000", h: "1300", q: 85 }, maxWidth: 920) {
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
    tablet: datoCmsHero {
      image {
        fluid(imgixParams: { w: "480", h: "1300", q: 85 }, maxWidth: 480) {
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
      desktop: {
        image: { fluid: desktopFluid },
      },
      tablet: {
        image: { alt, fluid: tabletFluid },
      },
    } = data

    const heroSrc = [
      { ...tabletFluid },
      {
        ...desktopFluid,
        media: `(min-width: 768px)`,
      },
    ]

    return (
      <Container>
        <Inner>
          <Copy>
            <CopyInner>
              <Display>Live Your Dreams</Display>

              <Line />

              <StyledText>
                Turn dreams to reality with Hamilton Marine Finance. We are diligent in streamlining
                the finance process.
              </StyledText>

              <Button size="small">Apply Online</Button>
            </CopyInner>
          </Copy>

          <StyledImg alt={alt} fluid={heroSrc} loading="lazy" />
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
  position: relative;
  top: -60px;
  width: calc(100% - 40px);
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    left: 0;
    position: absolute;
    top: 50px;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    width: 40%;
  }
`

const CopyInner = styled.div`
  padding: 40px;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    float: right;
    margin-right: 80px;
    max-width: 50%;
    padding: 50px 0 50px;
  }
`

const Line = styled.hr`
  background: ${({ theme }) => theme.colors.blue};
  height: 2px;
  margin: 18px 0;
  width: 80px;
`

const StyledText = styled(Text)`
  margin: 0 0 60px;
`

const StyledImg = styled(Img)`
  max-width: 920px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin-left: 32.5vw;
    height: calc(45vw + 250px);
  }

  @media screen and (min-width: 1450px) {
    margin-left: 0;
    height: auto;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 0 40px;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 50px 50px 50px 0;
    flex-direction: row;
    justify-content: flex-end;
  }
`

export default Hero
