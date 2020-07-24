import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Flickity from 'react-flickity-component'

import Text from '../Text'
import SvgIcon from '../SvgIcon'

const flickityOptions = {
  pageDots: true,
  // contain: true,
  prevNextButtons: false,
}

export const query = graphql`
  {
    datoCmsTestimonial {
      testimonials {
        quote
        person
        title
      }
    }
  }
`

const Testimonials = () => {
  const render = data => {
    const {
      datoCmsTestimonial: { testimonials },
    } = data

    return (
      <Container>
        <Inner>
          <Flickity options={flickityOptions} reloadOnUpdate>
            {testimonials.map((testimonial, index) => (
              <Slide key={index.toString()}>
                <SlideInner>
                  <Top>
                    <SvgIcon type="quotes" />

                    <TopCopy>
                      <Title>{testimonial.person}</Title>
                      <Title>{testimonial.title}</Title>
                    </TopCopy>
                  </Top>
                  <Copy>
                    <Text>{testimonial.quote}</Text>
                  </Copy>
                </SlideInner>
              </Slide>
            ))}
          </Flickity>
        </Inner>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.blue};

  .flickity-enabled {
    outline: none;
  }

  .dot {
    width: 30px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.blue2};
    margin: 0 10px 0 0;

    &:last-child {
      margin: 0;
    }

    &.is-selected {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .flickity-page-dots {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 25px auto 0;
    width: 100%;
    max-width: 720px;
  }
`

const Copy = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 100px 50px 40px;
`

const Inner = styled.div`
  padding: 0 0 150px;
  width: 100%;
`

const Slide = styled.div`
  width: 100%;
`

const SlideInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  top: 50px;
  right: 70px;
`

const TopCopy = styled.div``

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
  line-height: 40px;
  letter-spacing: 1px;
`

export default Testimonials
