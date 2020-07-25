import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled, { css } from 'styled-components'

import background from '../../images/icon-with-text-background.png'

import Display from '../Display'
import Text from '../Text'

export const query = graphql`
  {
    datoCmsAboutHmf {
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
      }
    }
  }
`

const ImageGridWithQuote = () => {
  const render = data => {
    const {
      datoCmsAboutHmf: {
        images: [{ fluid: fluidOne }, { fluid: fluidTwo }, { fluid: fluidThree }],
      },
    } = data

    return (
      <Container id="about">
        <Images>
          <Left>
            <StyledDisplay size="large" mobile>
              About Hamilton <br /> Marine Finance.
            </StyledDisplay>

            <StyledImageOne fluid={fluidOne} loading="lazy" />

            <StyledImageTwo fluid={fluidTwo} loading="lazy" />
          </Left>

          <Right>
            <StyledDisplay size="large" desktop>
              About Hamilton <br /> Marine Finance.
            </StyledDisplay>

            <StyledImageThree fluid={fluidThree} loading="lazy" />
          </Right>
        </Images>

        <TextArea>
          <Texture src={background} />

          <Copy>
            <CopyLeft>
              <Display color="white" size="small">
                Owning your dream is closer than you think.
              </Display>

              <Text color="white" size="small">
                - Jody Hamilton
              </Text>
            </CopyLeft>

            <CopyRight>
              <Text color="white" size="small">
                Jody has financed more than Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce sem erat, bibendum id diam at, lacinia fringilla tortor. Fusce odio justo,
                facilisis non lectus vitae, ultricies gravida.
              </Text>
            </CopyRight>
          </Copy>
        </TextArea>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const Container = styled.section`
  padding: 50px 0 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 0;
  }
`

const Copy = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  position: relative;
  width: 100%;
  text-align: left;
  padding: 0 30px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 0 60px;
    margin: -170px auto 0;
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 0;
    margin: -250px auto 0;
  }
`

const CopyLeft = styled.div`
  flex-basis: 60%;
`

const CopyRight = styled.div`
  flex-basis: 40%;
  padding: 30px 0 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 65px 0 0;
  }
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    background-color: ${({ theme }) => theme.colors.blue};
    position: absolute;
    left: 0;
    bottom: 0;
    height: 950px;
    width: 100%;
    z-index: -1;

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
      content: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    padding: 150px 0 0 30px;
    max-width: 1480px;
    margin: 0 auto;
  }
`

const Left = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 39%;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-items: flex-end;
  }
`

const Right = styled.div`
  display: flex;
  flex-basis: calc(68% + 20px);
  flex-direction: column;
  padding: 20px 0 0 0;
  margin: 0 0 70px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 115px 0 0 20px;
    margin: 0;
  }
`

const StyledImageOne = styled(Img)`
  width: calc(100% - 30px);
  align-self: flex-end;
  margin: 0 0 20px;
  max-width: 510px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-self: initial;
    width: 100%;
  }
`

const StyledImageTwo = styled(Img)`
  max-width: 302px;
  width: 100%;
  align-self: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-self: initial;
  }
`

const StyledImageThree = styled(Img)`
  width: 100%;
`

const StyledDisplay = styled(Display)`
  margin: 0 0 40px;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 0 0 0 90px;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: block;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        display: none;
      }
    `}

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        display: block;
      }
    `}
`

const TextArea = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  margin: 0;
  padding: 0 0 50px;
  position: relative;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: -210px 0 0;
  }
`

const Texture = styled.img`
  display: none;
  max-width: 100%;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    display: block;
    height: 400px;
    margin: 0 auto;
    max-width: 100%;
    padding: 0 100px;
    top: -130px;
  }

  @media screen and (min-width: 1200px) {
    height: auto;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    height: 500px;
  }
`

export default ImageGridWithQuote
