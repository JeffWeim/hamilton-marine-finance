import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useEffect } from 'react'
import Rellax from 'rellax'
import styled, { css } from 'styled-components'

import Button from '../Button'
import Display from '../Display'
import Text from '../Text'

export const query = graphql`
  {
    allDatoCmsOtherService {
      nodes {
        service {
          title
          copy
          copyMaxWidth
          image {
            alt
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
          }
        }
      }
    }
  }
`

const Services = () => {
  useEffect(() => {
    // eslint-disable-next-line
    const rellax = new Rellax('.rellax2', {
      speed: 5,
      center: true,
    })
  }, [])

  const render = data => {
    const {
      allDatoCmsOtherService: {
        nodes: [{ service }],
      },
    } = data

    return (
      <Container id="other-services">
        <Inner>
          <StyledDisplay>Other Services.</StyledDisplay>

          <Rows>
            {service.map((s, index) => (
              <Row side={!!((index + 1) % 2)} key={index.toString()}>
                <StyledImage
                  alt={s.image.alt}
                  fluid={s.image.fluid}
                  loading="lazy"
                  side={!!((index + 1) % 2)}
                />

                <Copy side={!!((index + 1) % 2)}>
                  <SectionTitle>{s.title}</SectionTitle>

                  <Text color="black" size="small" maxWidth={s.copyMaxWidth}>
                    {s.copy}
                  </Text>
                </Copy>
              </Row>
            ))}
          </Rows>

          {/* <Rows>
             <Row first>
               <StyledImage alt={altOne} first fluid={fluidImageOne} loading="lazy" />

               <Copy first>
                 <SectionTitle>RV Financing</SectionTitle>

                 <Text color="black" size="small">
                   We offer the best available financing options to get you into the RV of your
                   dreams and onto the road.
                 </Text>
               </Copy>
             </Row>

             <Row second>
               <Copy second>
                 <SectionTitle>Aviation Financing</SectionTitle>

                 <Text color="black" size="small">
                   Planes are just as unique as those who fly them! Whether your need is recreation,
                   personal transportation or as a business tool there are many programs available.
                   Pistons, turboprops, jets, purchase, or refinance we have programs for you.
                 </Text>
               </Copy>

               <StyledImage alt={altTwo} second fluid={fluidImageTwo} loading="lazy" />
             </Row>
           </Rows> */}

          <Gray className="rellax2" />
        </Inner>

        <Cta>
          <SectionTitle>More questions?</SectionTitle>

          <Button href="#contact" scroll>
            Contact Us
          </Button>
        </Cta>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const Container = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 80px;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 0 30px 175px;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 0 80px 175px;
  }
`

const Copy = styled.div`
  flex-basis: 50%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    text-align: left;
  }

  ${({ side }) =>
    side &&
    css`
      @media (min-width: ${({ theme }) => theme.screen.md}) {
        padding: 0 0 0 40px;
      }
    `}

  ${({ side }) =>
    !side &&
    css`
      @media (min-width: ${({ theme }) => theme.screen.md}) {
        padding: 0 40px 0 0;
      }

      @media (min-width: ${({ theme }) => theme.screen.md1}) {
        margin: 0 0 50px;
      }

      @media (min-width: ${({ theme }) => theme.screen.lg}) {
        padding: 0 15px 0 80px;
      }
    `}
`

const Cta = styled.div`
  margin: 20px 0 0;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 80px 0 0;
    width: auto;
  }
`

const Inner = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 175px auto 0;
  position: relative;
  z-index: 1;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 0;
  }
`

const Gray = styled.div`
  background-color: ${({ theme }) => theme.colors.tan};
  height: calc(100% - 80px);
  left: 0;
  position: absolute;
  top: 0;
  width: calc(100% - 0px);
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: calc(100% - 80px);
    left: 4.25%;
  }
`

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    margin: 50px 0 0;
    align-items: flex-start;
  }

  ${({ side }) =>
    side &&
    css`
      margin: 0 0 60px;

      @media (min-width: ${({ theme }) => theme.screen.md}) {
        margin: 0;
      }
    `}

  ${({ side }) =>
    !side &&
    css`
      flex-direction: column;
      margin-bottom: 40px;

      @media (min-width: ${({ theme }) => theme.screen.md}) {
        flex-direction: row-reverse;
        margin-bottom: 0;
      }
    `}
`

const SectionTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.ProximaSemiboldItalic};
  font-size: 30px;
  letter-spacing: 1.2px;
  line-height: 80px;
  margin: 0 0 10px;
`

const StyledDisplay = styled(Display)`
  position: relative;
  margin-bottom: 30px;
  text-align: center;
`

const StyledImage = styled(Img)`
  width: 100%;
  max-width: 460px;
  flex-basis: 65%;
`

export default Services
