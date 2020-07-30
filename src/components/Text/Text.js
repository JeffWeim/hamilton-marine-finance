import React from 'react'
import PropTypes from 'prop-types'
import { fluidRange } from 'polished'
import styled from 'styled-components'

const Text = props => {
  const { children, className, color, size } = props

  return (
    <TextBase className={className} color={color} size={size}>
      {children}
    </TextBase>
  )
}

const TextBase = styled.p`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  line-height: ${({ theme, size }) => theme.fontStyles.text[size].lineHeight};
  ${({ theme, size }) =>
    fluidRange(
      {
        prop: `font-size`,
        fromSize: `${theme.fontStyles.text[size].fontSizeMin}px`,
        toSize: `${theme.fontStyles.text[size].fontSizeMax}px`,
      },
      `${theme.screen.xxs}`,
      `${theme.screen.xl}`,
    )}
`

Text.defaultProps = {
  children: '',
  className: '',
  color: 'black',
  size: 'regular',
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['regular', 'small']),
}

export default Text
