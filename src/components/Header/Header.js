import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from 'Components'

const Header = () => {
  const links = [
    {
      text: 'Need To Know',
      url: '',
    },
    {
      text: 'Other Services',
      url: '',
    },
    {
      text: 'About',
      url: '',
    },
    {
      text: 'Contact',
      url: '',
    },
  ]

  return (
    <header>
      <Inner>
        <Logo src="https://placehold.it/150x75" />

        <Links>
          {links.map(link => (
            <LinkItem key={link.text}>
              <Link href={link.url}>{link.text}</Link>
            </LinkItem>
          ))}

          <LinkItem>
            <Button href="">Apply Online</Button>
          </LinkItem>
        </Links>
      </Inner>
    </header>
  )
}

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  text-transform: uppercase;
`

const LinkItem = styled.li`
  margin: 0 10px 0 0;

  &:last-child {
    margin-right: 0;
  }
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Logo = styled.img``

Header.propTypes = {}

export default Header
