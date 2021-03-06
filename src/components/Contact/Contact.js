import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import NetlifyForm from 'react-netlify-form'
import Rellax from 'rellax'

import Display from '../Display'
import Loader from '../Loader'
import Text from '../Text'

export const query = graphql`
  {
    datoCmsContact {
      image {
        alt
        fluid(imgixParams: { q: 85, w: "810", h: "640" }, maxWidth: 810) {
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

const Contact = () => {
  useEffect(() => {
    // eslint-disable-next-line
    const rellax = new Rellax('.rellax', {
      speed: -1,
      center: true,
    })
  }, [])

  const render = data => {
    const {
      datoCmsContact: {
        image: { fluid, alt },
      },
    } = data

    return (
      <Container id="contact">
        <Inner>
          <StyledImage alt={alt} fluid={fluid} loading="lazy" />

          <FormContainer>
            <StyledDisplay>Contact Us.</StyledDisplay>

            <NetlifyForm name="Contact">
              {({ loading, error, success }) => (
                <>
                  {loading && (
                    <Centered left>
                      <Loader />
                    </Centered>
                  )}
                  {error && (
                    <Centered left>
                      <Text>Something went wrong. Please try again later.</Text>
                    </Centered>
                  )}
                  {success && (
                    <Centered left>
                      <Text>Thank you for contacting us! We will get back to you very soon.</Text>
                    </Centered>
                  )}
                  {!loading && !success && (
                    <Fields>
                      <Input placeholder="NAME" type="text" name="Name" required />
                      <Input placeholder="PHONE" type="tel" name="Phone" required />
                      <Input placeholder="EMAIL" type="email" name="Email" required />
                      <TextArea placeholder="QUESTION" name="Question" required rows="10" />
                      <Submit type="submit">
                        <span>Submit</span>
                      </Submit>
                    </Fields>
                  )}
                </>
              )}
            </NetlifyForm>
          </FormContainer>

          <Gray className="rellax" />
        </Inner>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const fieldStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  padding: 10px 15px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  }
`

const Container = styled.section`
  overflow: hidden;
  padding: 100px 0;
`

const Centered = styled.div`
  display: flex;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'center')};
  align-items: center;
`

const FormContainer = styled.div`
  flex-basis: 50%;
  padding: 0 30px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 0 0 0 50px;
  }
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    max-width: 480px;
    width: 100%;
  }
`

const Gray = styled.div`
  background-color: ${({ theme }) => theme.colors.tan};
  max-width: 575px;
  width: 100%;
  height: 660px;
  position: absolute;
  left: 30%;
  top: 30%;
  transform: translateX(-50%);
  z-index: -1;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    top: 0;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 0 0;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    margin: 0 auto;
    max-width: 1480px;
    width: 100%;
    padding: 80px 30px 0 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.xl}) {
    padding: 80px 0 0 0;
  }
`

const Submit = styled.button`
  align-self: flex-end;
  background: ${({ theme }) => theme.colors.blue};
  background: linear-gradient(90deg, #1f2f97 0%, #1ca6eb 100%);
  border-radius: 35px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.ProximaSemiboldItalic};
  margin: 55px 0 0;
  padding: 16px 25px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    width: auto;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:hover,
  &:focus {
    &:before {
      transform: translateX(-74%);
    }
  }

  &:before {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#1f2f97),
      color-stop(33%, #1ca6eb),
      color-stop(66%, #1ca6eb),
      to(#1f2f97)
    );
    background: linear-gradient(to right, #1f2f97 0%, #1ca6eb 33%, #1ca6eb 66%, #1f2f97 100%);
    content: '';
    display: block;
    width: 400%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-out;
    z-index: 0;
  }
`

const StyledImage = styled(Img)`
  flex-basis: 50%;
  margin: 0 30px 0 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0;
  }
`

const StyledDisplay = styled(Display)`
  margin: 15px 0 30px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 0 30px;
    text-align: left;
  }
`

const Input = styled.input`
  ${fieldStyles}
  margin: 0 0 20px;
  height: 50px;
`

const TextArea = styled.textarea`
  ${fieldStyles}
`

export default Contact
