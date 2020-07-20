import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = props => {
  const { children, href } = props

  return <Base href={href}>{children}</Base>
}

const Base = styled.a`
  background: ${({ theme }) => theme.colors.blue};
  background: linear-gradient(90deg, rgba(32, 53, 163, 1) 50%, rgba(245, 245, 245, 1) 100%);
  border-radius: 25px;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
  text-transform: uppercase;
`

Button.defaultProps = {
  href: '',
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

export default Button
