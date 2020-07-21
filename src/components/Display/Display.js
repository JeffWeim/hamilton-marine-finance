import React from 'react'
import PropTypes from 'prop-types'
import { fluidRange } from 'polished'
import styled from 'styled-components'

const Display = props => {
  const { children, className, color, element, size } = props

  return (
    <DisplayTag as={element} className={className} color={color} size={size}>
      {children}
    </DisplayTag>
  )
}

const DisplayTag = styled.h1`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
  line-height: ${({ theme, size }) => theme.fontStyles.displays[size].lineHeight};
  ${({ theme, size }) =>
    fluidRange(
      {
        prop: `font-size`,
        fromSize: `${theme.fontStyles.displays[size].fontSizeMin}px`,
        toSize: `${theme.fontStyles.displays[size].fontSizeMax}px`,
      },
      `${theme.screen.xxs}`,
      `${theme.screen.xl}`,
    )}
`

Display.defaultProps = {
  children: '',
  className: '',
  color: 'black',
  element: 'h1',
  size: 'xLarge',
}

Display.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  color: PropTypes.oneOf(['black', 'white']),
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  size: PropTypes.oneOf(['xLarge', 'large', 'medium', 'small']),
}

export default Display
