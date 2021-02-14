import React from 'react'
import styled, { css } from 'styled-components'

import background from '../../images/icon-with-text-background.png'

import Button from '../Button'
import Display from '../Display'
import SvgIcon from '../SvgIcon'
import Text from '../Text'

const IconWithText = () => {
  return (
    <Container id="need-to-know">
      <Inner>
        <StyledDisplay color="white" size="large">
          What you need to know.
        </StyledDisplay>

        <Icons>
          <IconItem>
            <StyleSvgIcon type="clipboard" />

            <StyledText color="white" size="small">
              You&apos;ll fill out a credit application based on your credit score & history.
            </StyledText>
          </IconItem>

          <IconItem>
            <StyleSvgIcon type="arrow" />

            <StyledText color="white" size="small">
              Terms can range from 10-20 years, depending on what fits best.
            </StyledText>
          </IconItem>

          <IconItem>
            <StyleSvgIcon type="building" />

            <StyledText color="white" size="small">
              We&apos;ll match you with the bank that works for you.
            </StyledText>
          </IconItem>
        </Icons>

        <Desktop>
          <CenteredText color="white">
            We&apos;ll take care of the financing, find you the best options, and walk you through
            the process. We&apos;ll take care of the paperwork while you enjoy finding the right
            boat for you & your family.
          </CenteredText>

          <Buttons>
            <StyledButton
              first
              color="white"
              href="https://www.700dealer.com/QuickQualify/a624ac786dde40a897126561f9205ae3-201827"
              target="_blank"
            >
              Apply Online
            </StyledButton>
            <StyledButton color="white" href="#contact" scroll>
              Contact Us
            </StyledButton>
          </Buttons>
        </Desktop>
      </Inner>

      <Mobile>
        <CenteredText color="white">
          We&apos;ll take care of the financing, find you the best options, and walk you through the
          process. We&apos;ll take care of the paperwork while you enjoy finding the right boat for
          you & your family.{' '}
        </CenteredText>

        <Buttons>
          <StyledButton
            first
            color="white"
            href="https://www.700dealer.com/QuickQualify/a624ac786dde40a897126561f9205ae3-201827"
            target="_blank"
          >
            Apply Online
          </StyledButton>
          <StyledButton color="white" href="#contact" scroll>
            Contact Us
          </StyledButton>
        </Buttons>
      </Mobile>
    </Container>
  )
}

const Buttons = styled.div`
  position: relative;
  text-align: center;
  top: 15px;
  margin: 20px 0 0;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
    margin: 40px 0 0;
    top: 25px;
  }
`

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 150px 30px;
  position: relative;
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 150px 55px;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 150px 130px;
  }
`

const CenteredText = styled(Text)`
  margin: 0 0 30px;
  margin: 0 auto;
  max-width: 620px;
  text-align: center;
  width: 100%;
`

const Desktop = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.screen.md1}) {
    display: block;
  }
`

const Icons = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.screen.md1}) {
    align-items: flex-start;
    flex-direction: row;
    margin: 0 0 40px;
  }
`

const IconItem = styled.li`
  flex-basis: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0 40px;

  @media (min-width: ${({ theme }) => theme.screen.md1}) {
    margin: 0 10px 0 0;

    &:last-child {
      margin: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    margin: 0 7% 0 0;
  }
`

const Inner = styled.div`
  background-image: url(${background});
  background-size: cover;
  margin: 0 auto;
  max-width: 1170px;
  position: relative;
  width: 100%;
  padding: 0 40px;

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 0 80px;
  }
`

const Mobile = styled.span`
  display: block;
  margin: 40px 0 0;

  @media (min-width: ${({ theme }) => theme.screen.md1}) {
    display: none;
  }
`

const StyledButton = styled(Button)`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.screen.md1}) {
    width: auto;
  }

  ${({ first }) =>
    first &&
    css`
      margin: 0 0 30px;

      @media (min-width: ${({ theme }) => theme.screen.lg}) {
        margin: 0 30px 0 0;
      }
    `}
`

const StyledText = styled(Text)`
  line-height: 32px;
`

const StyleSvgIcon = styled(SvgIcon)`
  margin: 0 0 20px;
`

const StyledDisplay = styled(Display)`
  margin: 0px auto 10px;
  position: relative;
  text-align: center;
  top: -80px;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    top: -30px;
  }
`

export default IconWithText
