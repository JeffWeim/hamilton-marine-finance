import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Button = props => {
  const { className, children, color, href, size } = props

  return (
    <Base className={className} color={color} href={href} size={size}>
      {children}
    </Base>
  )
}

const Base = styled.a`
  border-radius: 35px;
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  ${({ color }) =>
    color === 'gradient' &&
    css`
      background: ${({ theme }) => theme.colors.blue};
      background: linear-gradient(90deg, #1f2f97 0%, #1ca6eb 100%);
      color: ${({ theme }) => theme.colors.white};
    `}

  ${({ color }) =>
    color === 'white' &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.blue};
    `}

  ${({ size }) =>
    size === 'regular' &&
    css`
      padding: 19px 25px;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 16px 25px;
    `}
`

Button.defaultProps = {
  className: '',
  color: 'gradient',
  href: '',
  size: 'regular',
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['gradient', 'white']),
  href: PropTypes.string,
  size: PropTypes.oneOf(['regular', 'small']),
}

export default Button
