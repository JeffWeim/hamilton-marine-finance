import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
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
                    <Quotes type="quotes" />

                    <TopCopy>
                      <Title first>{testimonial.person}</Title>
                      <Title second>{testimonial.title}</Title>
                    </TopCopy>
                  </Top>
                  <Copy>
                    <Text color="#1F2F97">{testimonial.quote}</Text>
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
  overflow: hidden;

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
    justify-content: center;
    margin: 65px auto 0;
    max-width: 720px;
    padding: 0 30px;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.screen.md1}) {
      margin: 25px auto 0;
      padding: 0;
      justify-content: flex-end;
    }
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
  cursor: grab;
  width: 100%;
  transition: all 300ms ease;
  opacity: 0;

  &.is-selected {
    opacity: 1;
  }
`

const SlideInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md1}) {
    padding: 0;
  }
`

const Quotes = styled(SvgIcon)`
  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 20px 0 0;
  }
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  top: 50px;
  right: 70px;
`

const TopCopy = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 35vw;
    width: 100%;
    top: 60px;
  }
`

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 1px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 0 10px;

    ${({ first }) =>
      first &&
      css`
        margin: 35px 0 10px;
      `}
  }

  ${({ second }) =>
    second &&
    css`
      font-size: 20px;
    `}
`

export default Testimonials
