import { motion, AnimatePresence } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Button from '../Button'
import Image from '../Image'
import SvgIcon from '../SvgIcon'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const links = [
    {
      text: 'Need To Know',
      url: '#need-to-know',
    },
    {
      text: 'Other Services',
      url: '#other-services',
    },
    {
      text: 'About',
      url: '#about',
    },
    {
      text: 'Contact',
      url: '#contact',
    },
  ]

  return (
    <HeaderBase>
      <Inner>
        <Logo src="logo.png" alt="Hamilton Marine Finance Logo - Header" loading="eager" />

        <Links>
          {links.map(link => (
            <LinkItem key={link.text} desktop>
              <Link offset="120" href={link.url}>
                {link.text}
              </Link>
            </LinkItem>
          ))}

          <LinkItem desktop>
            <Button
              href="https://www.700dealer.com/QuickQualify/a624ac786dde40a897126561f9205ae3-201827"
              size="large"
              target="_blank"
            >
              Apply Online
            </Button>
          </LinkItem>

          <LinkItem mobile>
            <Hamburger
              isMobileMenuOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              type="hamburger"
            />
            <Close
              isMobileMenuOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(false)}
              type="close"
            />
          </LinkItem>
        </Links>
      </Inner>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            animate={{ opacity: 1, y: 120 }}
            exit={{ opacity: 0, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            key="mobile-menu"
            transition={{ ease: 'easeOut', duration: 0.3 }}
          >
            {links.map(link => (
              <MobileLink offset="100" href={link.url} onClick={() => setIsMobileMenuOpen(false)}>
                {link.text}
              </MobileLink>
            ))}

            <StyledButton
              href="https://www.700dealer.com/QuickQualify/a624ac786dde40a897126561f9205ae3-201827"
              target="_blank"
            >
              Apply Online
            </StyledButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderBase>
  )
}

const Hamburger = styled(SvgIcon)`
  cursor: pointer;
  opacity: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 0 : 1)};
  pointer-events: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'none' : 'auto')};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 300ms ease;
`

const HeaderBase = styled.header`
  background: white;
  box-shadow: 0px -6px 14px 2px rgb(0 0 0 / 0.5);
  position: sticky;
  top: 0;
  z-index: 99;
`

const Close = styled(SvgIcon)`
  cursor: pointer;
  opacity: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 1 : 0)};
  pointer-events: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'auto' : 'none')};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 300ms ease;
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 30px;
  position: relative;
  width: 100%;
  z-index: 60;
  transition: all 300ms ease;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    padding: 20px 60px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    padding: 30px;
  }
`

const Logo = styled(Image)`
  width: 100%;
  max-width: 160px;
`

const Link = styled(AnchorLink)`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.ProximaSemiboldItalic};
  text-decoration: none;
  text-transform: uppercase;
`

const LinkItem = styled.li`
  margin: 0 10px 0 0;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  ${({ desktop }) =>
    desktop &&
    css`
      display: none;

      @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        display: block;
      }
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      display: block;

      @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
        display: none;
      }
    `}
`

const Links = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;
  width: 80%;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    justify-content: space-evenly;
  }
`

const MobileLink = styled(AnchorLink)`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.ProximaSemiboldItalic};
  font-size: 30px;
  letter-spacing: 0.6px;
  line-height: 60px;
  text-decoration: none;
`

const MobileMenu = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.tan};
  display: flex;
  flex-direction: column;
  height: ${({ isScrolled }) => (isScrolled ? 'calc(100vh - 79px)' : 'calc(100vh - 119px)')};
  justify-content: center;
  padding: 0 40px;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 50;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    height: 50vh;

    &:after {
      content: '';
      background: black;
      opacity: 0.4;
      position: absolute;
      left: 0;
      bottom: -100%;
      height: 100%;
      width: 100%;
    }
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  margin: 40px auto 0;
`

export default Header
