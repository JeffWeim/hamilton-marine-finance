import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

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
      <Container>
        <Images>
          <Left>
            <StyledImageOne fluid={fluidOne} loading="lazy" />

            <StyledImageTwo fluid={fluidTwo} loading="lazy" />
          </Left>

          <Right>
            <StyledDisplay size="large">
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

const Container = styled.section``

const Copy = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -250px auto 0;
  max-width: 900px;
  position: relative;
  width: 100%;
  text-align: left;
`

const CopyLeft = styled.div`
  flex-basis: 60%;
`

const CopyRight = styled.div`
  flex-basis: 40%;
  padding: 65px 0 0;
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    padding: 150px 0 0 30px;
    max-width: 1480px;
    margin: 0 auto;
  }
`

const Left = styled.div`
  align-items: flex-end;
  display: flex;
  flex-basis: 39%;
  flex-direction: column;
`

const Right = styled.div`
  display: flex;
  flex-basis: calc(68% + 20px);
  flex-direction: column;
  padding: 115px 0 0 20px;
`

const StyledImageOne = styled(Img)`
  margin: 0 0 20px;
  max-width: 510px;
  width: 100%;
`

const StyledImageTwo = styled(Img)`
  max-width: 302px;
  width: 100%;
`

const StyledImageThree = styled(Img)`
  width: 100%;
`

const StyledDisplay = styled(Display)`
  margin: 0 0 40px;
  padding: 0 0 0 90px;
`

const TextArea = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  margin: -210px 0 0;
  padding: 0 0 50px;
  text-align: center;
`

const Texture = styled.img`
  position: relative;
  top: -200px;
`

export default ImageGridWithQuote
