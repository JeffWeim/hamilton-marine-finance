import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

const SvgIcon = props => {
  const { className, fill, height, onClick, stroke, style, theme, type, width } = props

  const initialHeight = theme.icons[type].height
  const initialWidth = theme.icons[type].width

  return (
    <svg
      fill="none"
      height={height || initialHeight}
      style={style}
      viewBox={`0 0 ${initialWidth} ${initialHeight}`}
      width={width || initialWidth}
      className={className}
      onClick={onClick}
    >
      {theme?.icons[type]?.circle &&
        theme?.icons[type]?.circle.map((svgCircle, index) => (
          <circle
            cx={svgCircle?.cx}
            cy={svgCircle?.cy}
            fill={fill || svgCircle.fill}
            key={`${type + index}`}
            r={svgCircle?.r}
          />
        ))}

      {theme.icons[type].path.map((svgPath, index) => (
        <path
          d={svgPath.d}
          fill={fill || svgPath.fill}
          key={`${type + index}`}
          stroke={stroke || svgPath.stroke}
          strokeWidth={svgPath.strokeWidth}
          fillRule={svgPath?.fillRule}
          clipPath={svgPath?.clipPath}
          strokeLinecap={svgPath?.strokeLinecap}
          strokeLinejoin={svgPath?.strokeLinejoin}
        />
      ))}
    </svg>
  )
}

SvgIcon.defaultProps = {
  className: '',
  fill: '',
  height: null,
  onClick: null,
  stroke: '',
  style: null,
  width: null,
}

SvgIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  onClick: PropTypes.func,
  stroke: PropTypes.string,
  style: PropTypes.arrayOf(PropTypes.any),
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
}

export default withTheme(SvgIcon)
