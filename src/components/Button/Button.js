import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Button = props => {
  const { children, href, size } = props

  return (
    <Base href={href} size={size}>
      {children}
    </Base>
  )
}

const Base = styled.a`
  background: ${({ theme }) => theme.colors.blue};
  background: linear-gradient(90deg, #1f2f97 0%, #1ca6eb 100%);

  color: white;
  font-family: ${({ theme }) => theme.fonts.OpenSansOpenSansSemiboldItalic};

  text-decoration: none;
  text-transform: uppercase;

  ${({ size }) =>
    size === 'regular' &&
    css`
      padding: 19px 25px;
      border-radius: 30px;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 16px 25px;
      border-radius: 25px;
    `}
`

Button.defaultProps = {
  href: '',
  size: 'regular',
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  size: PropTypes.oneOf(['regular', 'small']),
}

export default Button
