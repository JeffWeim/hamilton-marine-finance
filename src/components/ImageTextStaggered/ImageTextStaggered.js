import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled, { css } from 'styled-components'

import Button from '../Button'
import Display from '../Display'
import Text from '../Text'

export const query = graphql`
  {
    datoCmsStaggeredImage {
      image {
        fluid {
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

const ImageTextStaggered = () => {
  const render = data => {
    const {
      datoCmsStaggeredImage: {
        image: [{ fluid: fluidImageOne }, { fluid: fluidImageTwo }],
      },
    } = data

    return (
      <Container id="other-services">
        <Inner>
          <StyledDisplay>Other Services.</StyledDisplay>

          <Rows>
            <Row first>
              <StyledImage first fluid={fluidImageOne} loading="lazy" />

              <Copy first>
                <SectionTitle>RV Financing</SectionTitle>

                <Text color="black" size="small">
                  The best available financing options that will accomplish your goals for any kind
                  of RV you’re looking for.
                </Text>
              </Copy>
            </Row>

            <Row second>
              <Copy second>
                <SectionTitle>Aviation Financing</SectionTitle>

                <Text color="black" size="small">
                  From pistons to turboprops and jets. We have programs to purchase, refinance,
                  modify and upgrade that will work for you.
                </Text>
              </Copy>

              <StyledImage second fluid={fluidImageTwo} loading="lazy" />
            </Row>
          </Rows>
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

  ${({ first }) =>
    first &&
    css`
      @media (min-width: ${({ theme }) => theme.screen.md}) {
        padding: 0 0 0 40px;
      }
    `}

  ${({ second }) =>
    second &&
    css`
      @media (min-width: ${({ theme }) => theme.screen.md}) {
        padding: 0 40px 0 0;
      }

      @media (min-width: ${({ theme }) => theme.screen.md1}) {
        margin: 0 0 100px;
      }

      @media (min-width: ${({ theme }) => theme.screen.lg}) {
        padding: 0 15px 0 80px;
      }
    `}
`

const Cta = styled.div`
  margin: 20px 0 0;
  width: 100%;

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

  &:after {
    background-color: ${({ theme }) => theme.colors.tan};
    content: '';
    height: calc(100% - 80px);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 0px);
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.screen.md}) {
      width: calc(100% - 80px);
    }
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

  ${({ first }) =>
    first &&
    css`
      margin: 0 0 60px;

      @media (min-width: ${({ theme }) => theme.screen.md}) {
        margin: 0;
      }
    `}

  ${({ second }) =>
    second &&
    css`
      flex-direction: column-reverse;

      @media (min-width: ${({ theme }) => theme.screen.md}) {
        flex-direction: column;
      }
    `}

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    margin: 50px 0 0;
    align-items: flex-start;
  }
`

const SectionTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
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

export default ImageTextStaggered
