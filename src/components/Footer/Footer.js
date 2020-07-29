import React from 'react'
import styled, { css } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import SvgIcon from '../SvgIcon'
import Image from '../Image'

export const query = graphql`
  {
    datoCmsFooterInformation {
      emailInformation {
        email
      }
      locationInformation {
        googleMapsUrl
        locationString
      }
      phoneInformation {
        direct
        office
      }
    }
  }
`

const Footer = () => {
  const render = data => {
    const {
      datoCmsFooterInformation: {
        emailInformation: [{ email }],
        locationInformation: [{ googleMapsUrl, locationString }],
        phoneInformation: [{ direct, office }],
      },
    } = data

    const index = email.search('@') + 1
    const splitString = `${email.substr(0, index)}\n${email.substr(index)}`

    return (
      <Container>
        <Inner>
          <LogoContainer>
            <Logo src="logo.png" alt="Hamilton Marine Finance Logo" />

            <Small>Financing provided by Diverse Offerings Finance</Small>
          </LogoContainer>

          <Links>
            <a className="white-box" href={`mailto:${email}`}>
              <Link>
                <StyledIcon one type="email" />

                <Small>{splitString}</Small>
              </Link>
            </a>

            <Link className="white-box">
              <StyledIcon two type="phone" />

              <a href={`tel:${direct.replace(/\./g, '')}`}>
                <Small>Direct: {direct}</Small>
              </a>
              <a href={`tel:${office.replace(/\./g, '')}`}>
                <Small>Office: {office}</Small>
              </a>
            </Link>

            <a className="white-box" href={googleMapsUrl} target="_blank" rel="noreferrer">
              <Link last>
                <StyledIcon three type="location" />

                <Small>{locationString}</Small>
              </Link>
            </a>
          </Links>
        </Inner>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.tan};
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
  padding: 50px 30px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-items: flex-end;
    flex: 1 0 auto;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`

const Link = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 50px;
  padding: 30px 20px;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-items: flex-start;
    max-width: 100%;
    padding: 30px 20px 30px 50px;
    width: 280px;

    .white-box {
      margin: 0 0 30px;

      &:last-child {
        margin: 0;
      }
    }
  }

  ${({ last }) =>
    last &&
    css`
      margin-bottom: 0;
    `}
`

const Logo = styled(Image)`
  width: 100%;
  max-width: 458px;
  margin: 0 0 30px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 40px 0 0;

    flex: 1 0 auto;
  }
`

const Small = styled.p`
  font-family: ${({ theme }) => theme.fonts.OpenSansRegular};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.325px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    text-align: left;
  }
`

const StyledIcon = styled(SvgIcon)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    top: 50%;
    transform: translateY(-50%);
  }

  ${({ one }) =>
    one &&
    css`
      top: -10px;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        left: -35px;
      }
    `}

  ${({ two }) =>
    two &&
    css`
      top: -30px;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        left: -30px;
      }
    `}

  ${({ three }) =>
    three &&
    css`
      top: -40px;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        left: -20px;
      }
    `}
`

const Svg = styled.svg`
  max-width: 100%;
`

export default Footer
