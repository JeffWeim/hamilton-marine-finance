import React from 'react'
import styled from 'styled-components'

import Button from '../Button'

import background from '../../images/cta-texture-background.png'

const Cta = () => {
  return (
    <Container>
      <Inner background={background}>
        <Text>Live life full throttle. Apply ONLINE.</Text>

        <StyledButton size="small" color="white">
          Apply Now
        </StyledButton>
      </Inner>
    </Container>
  )
}

const Container = styled.section`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
  padding: 50px 30px;
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    text-align: initial;
  }
`

const StyledButton = styled(Button)`
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    width: auto;
  }
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
  font-size: 30px;
  letter-spacing: 1.5px;
  line-height: 30px;
  margin: 0 0 30px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 30px 0 0;
  }
`

export default Cta
