import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Button = props => {
  const { className, children, color, href, size, scroll } = props

  if (scroll) {
    return (
      <ScrollBase className={className} color={color} href={href} size={size}>
        {children}
      </ScrollBase>
    )
  }

  return (
    <Base className={className} color={color} href={href} size={size}>
      {children}
    </Base>
  )
}

const styles = css`
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

const ScrollBase = styled(AnchorLink)`
  ${styles}
`

const Base = styled.a`
  ${styles}
`

Button.defaultProps = {
  className: '',
  color: 'gradient',
  href: '',
  scroll: false,
  size: 'regular',
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['gradient', 'white']),
  href: PropTypes.string,
  scroll: PropTypes.bool,
  size: PropTypes.oneOf(['regular', 'small']),
}

export default Button
