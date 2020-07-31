import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Button = props => {
  const { className, children, color, fullWidthMobile, href, size, scroll, target } = props

  if (scroll) {
    return (
      <ScrollBase
        className={className}
        color={color}
        fullWidthMobile={fullWidthMobile}
        href={href}
        size={size}
        target={target}
      >
        <span>{children}</span>
      </ScrollBase>
    )
  }

  return (
    <Base
      className={className}
      color={color}
      fullWidthMobile={fullWidthMobile}
      href={href}
      size={size}
      target={target}
    >
      <span>{children}</span>
    </Base>
  )
}

const styles = css`
  border-radius: 35px;
  font-family: ${({ theme }) => theme.fonts.ProximaSemiboldItalic};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;


  ${({ fullWidthMobile }) =>
    fullWidthMobile &&
    css`
      width: 100%;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        width: auto;
      }
    `}


  ${({ color }) =>
    color === 'gradient' &&
    css`
      background: ${({ theme }) => theme.colors.blue};
      background: linear-gradient(90deg, #1f2f97 0%, #1ca6eb 100%);
      color: ${({ theme }) => theme.colors.white};
      transition: all 300ms ease;
      position: relative;
      overflow: hidden;
      display: block;
      pointer-events: auto;

      span {
        position: relative;
        z-index: 1;
      }

      &:hover,
      &:focus {
        &:before {
          transform: translateX(-74%);
        }
      }

      &:before {
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#1f2f97),
          color-stop(33%, #1ca6eb),
          color-stop(66%, #1ca6eb),
          to(#1f2f97)
        );
        background: linear-gradient(to right, #1f2f97 0%, #1ca6eb 33%, #1ca6eb 66%, #1f2f97 100%);
        content: '';
        display: block;
        width: 400%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-out;
        z-index: 0;
      }
    `}

  ${({ color }) =>
    color === 'white' &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.blue};
      position: relative;
      overflow: hidden;
      transition: all 300ms ease;

      span {
        position: relative;
        z-index: 1;
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.white};

        &:before {
          transform: translateX(-74%);
        }
      }

      &:before {
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#fff),
          color-stop(33%, #fff),
          color-stop(66%, #1f2f97),
          to(#1ca6eb)
        );
        background: linear-gradient(to right, #fff 0%, #fff 33%, #1f2f97 66%, #1ca6eb 100%);
        content: '';
        display: block;
        width: 400%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-out;
        z-index: 0;
      }
    `}

  ${({ size }) =>
    size === 'regular' &&
    css`
      align-items: center;
      display: inline-flex;
      justify-content: center;
      max-height: 54px;
      padding: 16px 25px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 12.5px 25px;
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
  fullWidthMobile: true,
  href: '',
  scroll: false,
  size: 'regular',
  target: '',
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['gradient', 'white']),
  fullWidthMobile: PropTypes.bool,
  href: PropTypes.string,
  scroll: PropTypes.bool,
  size: PropTypes.oneOf(['regular', 'large']),
  target: PropTypes.string,
}

export default Button
