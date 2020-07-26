import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled, { css } from 'styled-components'
import NetlifyForm from 'react-netlify-form'

import Display from '../Display'
import Text from '../Text'

export const query = graphql`
  {
    datoCmsContact {
      image {
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
  const render = data => {
    const {
      datoCmsContact: {
        image: { fluid },
      },
    } = data

    return (
      <Container id="contact">
        <Inner>
          <StyledImage fluid={fluid} loading="lazy" />

          <FormContainer>
            <StyledDisplay>Contact Us.</StyledDisplay>

            <NetlifyForm name="Contact">
              {({ loading, error, success }) => (
                <>
                  {loading && <Centered>Sending...</Centered>}
                  {error && (
                    <Centered left>
                      <Text>Your information was not sent. Please try again later.</Text>
                    </Centered>
                  )}
                  {success && (
                    <Centered left>
                      <Text>Thank you for contacting us!</Text>
                    </Centered>
                  )}
                  {!loading && !success && (
                    <Fields>
                      <Input placeholder="NAME" type="text" name="Name" required />
                      <Input placeholder="PHONE" type="tel" name="Phone" required />
                      <Input placeholder="EMAIL" type="email" name="Email" required />
                      <TextArea placeholder="QUESTION" name="Question" required rows="10" />
                      <Submit type="submit">Submit</Submit>
                    </Fields>
                  )}
                </>
              )}
            </NetlifyForm>
          </FormContainer>
        </Inner>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const fieldStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 10px 15px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.OpenSansRegular};
  }
`

const Container = styled.section`
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

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    margin: 0 auto;
    max-width: 1480px;
    padding: 80px 10% 0 0;
    width: 100%;
  }

  &:after {
    content: '';
    background-color: ${({ theme }) => theme.colors.tan};
    max-width: 575px;
    width: 100%;
    height: 660px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    z-index: -1;

    @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
      top: 0;
    }
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
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
  margin: 55px 0 0;
  padding: 16px 25px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    width: auto;
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
  margin: 0 0 30px;
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
